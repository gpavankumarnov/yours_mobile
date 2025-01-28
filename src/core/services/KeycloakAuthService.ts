import Keycloak, {
  KeycloakConfig,
  KeycloakLoginOptions,
  KeycloakTokenParsed,
} from "keycloak-js";
import AuthService, { User } from "./AuthService";
import { UserService } from "./UserService";

type KeycloakUserInfo = {
  email_verified: boolean;
  family_name: string; // "Doe"
  given_name: string; // "John"
  groups: string[]; // ["employee_loom", "integration_loom"]
  name: string; // "John Doe"
  preferred_username: string; // n"e_loom"
  sub: string; // "0e0c9159-5000-46cd-a70f-cac54f59d8d3"
};

let authClient: Keycloak | undefined;
let authClientInitialized: boolean = false;

const KeycloakAuthService: AuthService<
  NonNullable<typeof authClient>,
  KeycloakConfig,
  KeycloakLoginOptions,
  KeycloakTokenParsed
> = {
  refreshToken: () => {
    if (authClient) {
      authClient.updateToken(5); //it checks if token is expired or going to expire with in specified duration
      // then calls the updatetoken.
    }
  },

  init: (config?: KeycloakConfig): Keycloak => {
    if (authClientInitialized) return authClient as Keycloak;
    else {
        authClient = new Keycloak(config ?? '');
        // attach refresh when token expired
        authClient.onTokenExpired = KeycloakAuthService.refreshToken;
        // todo to check
        // attach logout when refresh failed
        authClient.onAuthRefreshError = KeycloakAuthService.logout;
        authClientInitialized = true;
        return authClient;
     
    }
  },

  isAuthenticated: (): boolean =>
    !!(authClientInitialized && authClient?.authenticated),

  logout: (redirectUri?: string): Promise<void> => {
    return authClient?.logout({ redirectUri }) || Promise.resolve();
  },

  login: (options?: KeycloakLoginOptions): Promise<void> => {
    return authClient?.login(options) || Promise.resolve();
  },

  changePassword: (): Promise<void> => {
    return (
      authClient?.login({ action: "UPDATE_PASSWORD" }) || Promise.resolve()
    );
  },

  getToken: (): string | undefined => {    
    return authClient?.token;
  },

  getTokenParsed: (): KeycloakTokenParsed | undefined => {
    return authClient?.tokenParsed;
  },

  loadUser: async (tenant: string): Promise<void> => {
    try {
      const userInfo: KeycloakUserInfo =
        (await authClient?.loadUserInfo()) as unknown as KeycloakUserInfo;
      const tokenParsed = KeycloakAuthService.getTokenParsed();
      console.log("toekn parsed", tokenParsed)
      const realmRoles = tokenParsed?.realm_access?.roles || [];
      /* todo retrieve tenant if selectedTenant is empty or tenant is wrong
             tenant come from application but default can be better to come from user info */
      const resourceRoles = tokenParsed?.resource_access?.[tenant]?.roles || [];

      const roles: string[] = realmRoles.concat(resourceRoles);

      const user: User = {
        name: userInfo.given_name,
        surname: userInfo.family_name,
        username: userInfo.preferred_username,
        groups: userInfo.groups,
        roles: roles,
        selectedTenant: tenant,
      };
      UserService.init(user);
    } catch (e) {
      console.error("authClient not initialized", e);
    }
  },

  setUser: (u: User) => UserService.init(u),

  isAuthClientInitialized: (): boolean => authClientInitialized,

  changeTenant: (tenant: string) => {
    // retrieve new roles and groups or directly new user,
    // if we no have Map with <tenant, roles[]> (or <product -> tenants[] -> roles[]>) inside user
    // for now we replicate the logic for calculate roles
    const tokenParsed = KeycloakAuthService.getTokenParsed();
    const realmRoles = tokenParsed?.realm_access?.roles || [];
    const resourceRoles = tokenParsed?.resource_access?.[tenant].roles || [];
    const roles: string[] = realmRoles.concat(resourceRoles);
    // todo add setUser if init do other stuff
    UserService.init({
      ...UserService.getUser(),
      selectedTenant: tenant,
      roles,
    });
  },

  getIdentityProvider: (): string | undefined =>
    KeycloakAuthService.getTokenParsed()?.external_identity_provider,
};

export default KeycloakAuthService;
