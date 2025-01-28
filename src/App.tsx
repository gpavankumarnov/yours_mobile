import { KEYCLOAK_CONFIGURATION } from "./constants"
import AuthenticatedApp from "./core/AuthenticatedApp"
import useKeycloakAuth from "./core/hooks/useKeycloakAuth"
import mockUser from "./core/services/MockUser"

  /** 
this file contains 
1. handling authentication logic inside a custom hook.
2. if authenticated navigate to application else show loading text.

all the authentication logic should be kept in some new component.
custom hook to check whether user is authenticated or not. 
*/
 
function App() {

 
  const isAuthenticated = useKeycloakAuth({
    config:{
      url:KEYCLOAK_CONFIGURATION.url,
      realm:KEYCLOAK_CONFIGURATION.realm,
      clientId:KEYCLOAK_CONFIGURATION.client_id
    },
    initOptions: {
      onLoad: 'login-required', // this is allow users to login page on app load.
      checkLoginIframe: false   // this is to track users from logging out from other tabs/browsers
    },
    enabled:KEYCLOAK_CONFIGURATION.enabled === "true", //for toggling between dev or production
   mockedUser:mockUser
  })
   
  return isAuthenticated  ? <AuthenticatedApp/> : 'loading'
}

export default App
