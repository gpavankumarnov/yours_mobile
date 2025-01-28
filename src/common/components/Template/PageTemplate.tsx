import { Box } from "@mui/material";
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";
import Topbar, { TopbarProps } from "../Topbar/Topbar";
import { MainWrapper, pageWrapper } from "./PageTemplate.style";

export interface PageTemplateProps {
  topbarProps: TopbarProps;
  sidebarProps: SidebarProps;
  children: React.ReactNode;
}

  /** 
this file contains 
1. page template is like a wrapper component and parent of all React components.
2. that holds header, sidebar because these are shown in each page.
   like how we pass the redux store as parent of all react components.
3. As its a wrapper component, it needs 
   - props of header like logo, title, and other user details
   - props of sidebar
*/


const PageTemplate = ({
  topbarProps,
  sidebarProps,
  children,
}: PageTemplateProps) => {
  return (
    <Box sx={MainWrapper}>
      <Topbar {...topbarProps} />
      <Box sx={pageWrapper} className="box">
        <Sidebar {...sidebarProps} />

        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default PageTemplate;
