import {
  ClickAwayListener,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import React from "react";

interface SidebarItemSingleProps {
  label: string;
  icon?: React.ReactElement;
  // onClick:()=>void
  expanded?: boolean;
}

const SidebarItem = (props: SidebarItemSingleProps) => {
  const { label, icon, expanded } = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => (expanded ? !prevState : true));
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <ListItemButton
        disableRipple
        onClick={handleClick}
        //onClick={expanded ? handleClick : undefined}
      >
        <ListItemIcon>{icon}</ListItemIcon>
       
          <ListItemText primary={<Typography>{label}</Typography>} />
      </ListItemButton>
    </ClickAwayListener>
  );
};

export default SidebarItem;
