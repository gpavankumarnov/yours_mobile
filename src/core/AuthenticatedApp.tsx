import { Route, Routes } from "react-router";
import productLogo from '../assets/logo.svg';
import PageError404 from "../common/components/page-error/PageError404";
import PageTemplate from "../common/components/Template/PageTemplate";
import useSidebarItems from "../common/hooks/useSidebarItems";
import Homepage from "../feature/dashboard/pages/Home/Homepage";
import AccessoriesComp from "../feature/dashboard/pages/OneStepService/Accessories/AccessoriesComp";
import ServiceComp from "../feature/dashboard/pages/OneStepService/ServiceComp/ServiceComp";
import KeycloakAuthService from "./services/KeycloakAuthService";
import { UserService } from "./services/UserService";


  /** 
this file contains 
1. routes, each route is protected via wrapper component
2. that accepts roles, groups.
3. if anyone of specified role or group exist in userData then only
4. allow user to access protected routes.
*/

const AuthenticatedApp = () => {

  const items = useSidebarItems()

  return (
    <PageTemplate
    sidebarProps={{ items}}
    topbarProps={{
      logo: productLogo,
      onLogoClick: () => console.log('Logo clicked'),
      ...{
        title: UserService.getUsername() ?? '',
        onLogout: () => {
          KeycloakAuthService.logout();
        },
        logoutLabel: 'logout',
      },
    }}
  >
    
    <Routes>
      <Route
        path="/home"
        element={
          // <AuthRoute roles={[Permission.MOBILE_DASHBOARD_PAGE_VIEW]}>
            <Homepage />
          // </AuthRoute>
        }
      />
      <Route
        path="/service"
        element={
          // <AuthRoute roles={[Permission.MOBILE_DASHBOARD_PAGE_VIEW]}>
            <ServiceComp/>
          // </AuthRoute>
        }
      />
 <Route
        path="/accessories"
        element={
          // <AuthRoute roles={[Permission.MOBILE_DASHBOARD_PAGE_VIEW]}>
            <AccessoriesComp />
          // </AuthRoute>
        }
      />
      
      {/*  <Route
       path="/:tenantName/contact"
       element={}
      /> */}
      <Route path="*" element={<PageError404 />} />
    </Routes>
    {/* </Topbar> */}
    </PageTemplate>
  );
};

export default AuthenticatedApp;
