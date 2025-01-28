


export interface KeycloakConfig {
   enabled:string
   url:string
   realm:string
   client_id:string
}


// an object storing all the keycloak configs required  | realm, clientid, url
export const KEYCLOAK_CONFIGURATION:KeycloakConfig ={
    enabled: import.meta.env.VITE_KEYCLOAK_ENABLED,
    url:import.meta.env.VITE_KEYCLOAK_URL || "",
    realm: import.meta.env.VITE_KEYCLOAK_REALM || '',
  client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || ''
}


export const API_URL = import.meta.env.VITE_API_URL