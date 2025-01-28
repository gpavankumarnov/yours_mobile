import { ClickAwayListener, Drawer } from "@mui/material";
import { useState } from "react";
import { SidebarStatuses } from "./constants";
import * as styles from './Sidebar.style';
import Sidebarbody from "./Sidebarbody";
import SidebarFooter from "./SidebarFooter";

export type SidebarItemProps = {
  label: string;
  icon: React.ReactElement;
  isSelected?: boolean;
} & {
  onClick: () => void;
  subitems?: never;
};

export interface SidebarProps {
  items: SidebarItemProps[][];
}

const Sidebar = (props:SidebarProps) => {

    const {items} = props
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const statusSxName = isSidebarOpen ? SidebarStatuses.OPEN : SidebarStatuses.CLOSED
  const handleDrawerToggle = ()=>{
    setIsSidebarOpen((prevState)=>!prevState)
  }

  const handleClickAway = () => setIsSidebarOpen(false);
  

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Drawer
      id="drawer"
        variant="permanent"
        sx={[styles.drawerSx.base, styles.drawerSx[statusSxName]] }
        open={isSidebarOpen}
        data-testid="side-bar-drawer"
        slotProps={{
          backdrop: {
            onClick: () => {
              setIsSidebarOpen(false);
            },
          },
        }}
      >
        <Sidebarbody items={items} isOpen={isSidebarOpen} />
        <SidebarFooter onIconClick={handleDrawerToggle} status={statusSxName}/>
      </Drawer>
    </ClickAwayListener>
  );
};

export default Sidebar;
