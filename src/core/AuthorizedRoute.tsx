import { ReactNode } from "react"
import PageError404 from "../common/components/page-error/PageError404"
import useAuthorized from "./hooks/useAuthorized"

interface AuthorizedRouteProps {
    roles:string[],
    groups:string[]
    children:ReactNode
}


const AuthorizedRoute = (props:AuthorizedRouteProps) => {

    const {roles, groups, children} = props

    const isAuthorized = useAuthorized(roles, groups)

  return isAuthorized ? children : <PageError404/>
}

export default AuthorizedRoute
