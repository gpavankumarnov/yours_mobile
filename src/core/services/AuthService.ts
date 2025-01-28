export interface User {
    name: string
    surname: string
    username?: string
    roles: string[]
    groups?: string[]
    selectedTenant: string
  }
  


interface AuthService<TAuthClient,TProviderConfigOptions, TLoginOptions, TTokenParsed> {
    refreshToken: () => void
    init: (config?: TProviderConfigOptions) => TAuthClient
    isAuthenticated: () => boolean
    logout: (redirectUri?: string) => Promise<void>
    login: (options?: TLoginOptions) => Promise<void>
    changePassword: () => Promise<void>
    getToken: () => string | undefined
    getTokenParsed: () => TTokenParsed | undefined
    loadUser: (tenant: string) => Promise<void>
    setUser: (u: User) => void
    isAuthClientInitialized: () => boolean
    changeTenant: (tenant: string) => void
    getIdentityProvider: () => string | undefined
}

export default AuthService