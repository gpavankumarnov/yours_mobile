import { useEffect, useState } from "react";
import { UserService } from "../services/UserService";


const useAuthorized = (roles:string[],groups:string[]) => {

  const checkAuthorization = (): boolean => {
    if (roles.length !== 0 && groups.length !== 0) {
      return (
        UserService.hasAnyGroup(groups) && UserService.hasAnyRole(roles)
      );
    } else if (roles.length === 0 && groups.length !== 0) {
      return UserService.hasAnyGroup(groups);
    } else if (groups.length === 0 && roles.length !== 0) {
      return UserService.hasAnyRole(roles);
    }
    return false;
  };

  const [isAuthorized, setIsAuthorized] = useState<boolean>(
    checkAuthorization()
  );

  //we have to run when user change, we check for roles and groups belong to
  useEffect(() => {
    setIsAuthorized(checkAuthorization());
  }, [roles, groups, UserService.getUser()]);

  return isAuthorized;
};

export default useAuthorized;
