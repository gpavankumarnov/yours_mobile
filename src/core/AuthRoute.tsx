import { ReactNode } from "react"
import { getTenantContext } from "../common/utils/utilities"
import AuthorizedRoute from "./AuthorizedRoute"
import Group from "./services/Group"
import Permission from "./services/Permission"

 /** 
this file contains 
1. wrapper component for validating passed roles, groups matches with userData roles, groups
2. if matches allow user otherwise 404 pageError.
*/




const AuthRoute = ({roles, children}:{roles:Permission[], children: ReactNode}) => {


    const groups = `${Group.EMPLOYEE}_${getTenantContext()}`
    
  //- **Route Protection**: The AuthRoute component protects routes based on user roles and permissions. If a user lacks the necessary permission to access a route, they are either redirected or presented with a relevant error message.
  
  return (
    <AuthorizedRoute
    roles={roles}
    groups={[groups]}
    >
      {children}
    </AuthorizedRoute>
  )
}

export default AuthRoute
