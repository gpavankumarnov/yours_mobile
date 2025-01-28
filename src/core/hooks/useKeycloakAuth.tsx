import { KeycloakConfig, KeycloakInitOptions } from "keycloak-js";
import { useEffect, useState } from "react";
import apiClient from "../../feature/dashboard/Services/axiosInstance";
import KeycloakAuthService from "../services/KeycloakAuthService";
import { User } from "../services/UserService";



interface useKeycloakAuthProps {
  config: KeycloakConfig;
  initOptions: KeycloakInitOptions;
  enabled?: boolean;
  selectedTenant?: string;
  mockedUser?: User;
}

const useKeycloakAuth = (props: useKeycloakAuthProps): boolean => {
  
  const { config, initOptions, enabled, selectedTenant, mockedUser } = props;
  const [authenticated, setAuthenticated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!authenticated && isMounted) {
      if (enabled) {
        const authClient = KeycloakAuthService.init(config); //create keycloak instance
        authClient.init(initOptions).then((isAuth) => {  //initialize instance with set of paramtete
          if (isAuth) {
            const token = KeycloakAuthService.getToken();
            // Dynamically set the Authorization header for all Axios requests
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
            KeycloakAuthService.loadUser(selectedTenant ?? "").then(() =>
              setAuthenticated(true)
            );
          } else setAuthenticated(false);
        });
        // user mock when auth is disabled for dev purpose
      } else {
        if (mockedUser) {
          KeycloakAuthService.setUser(mockedUser); // Ensure mockedUser is not undefined
          setAuthenticated(true);
        } else {
          console.error("Mocked user is undefined!");
        }
      }
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

  return authenticated;
};

export default useKeycloakAuth;
