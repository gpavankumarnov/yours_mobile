import { ChevronRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { SidebarStatuses } from "./constants";
import * as styles from './SidebarFooter.style';
import { footer, handler } from "./SidebarFooter.style";

export type SidebarFooterProps = {
  onIconClick: () => void;
  status:string
};

const SidebarFooter = ({ onIconClick, status }: SidebarFooterProps) => {
  return (
    <Box sx={footer}>
      <Box sx={handler}>
        <IconButton onClick={onIconClick} aria-label="expand/collapse"
        sx={[styles.handlerIcon.base, styles.handlerIcon[status]]}
        >
          <ChevronRight titleAccess={status === SidebarStatuses.OPEN ? 'collapse' : 'expand'} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SidebarFooter;
