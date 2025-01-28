import { createTheme } from "@mui/material/styles"; // Ensure MUI theme is available
import { TOPBAR_HEIGHT } from "../Topbar/constants";
import { SIDEBAR_WIDTH } from "./constants";

const theme = createTheme(); // Create or use your theme

export const drawerSx = {
  base: () => ({
    width: SIDEBAR_WIDTH.open,
    position: "fixed",
    top: TOPBAR_HEIGHT,
    left: 0,
    zIndex: 100,
    "& .MuiPaper-root": {
      top: TOPBAR_HEIGHT,
      height: `calc(100% - ${TOPBAR_HEIGHT})`,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
      }),
    },
  }),

  open: () => ({
    "& .MuiPaper-root": {
      width: SIDEBAR_WIDTH.open,
      overflowX: "hidden",
    },
  }),

  closed: () => ({
    width: SIDEBAR_WIDTH.closed,
    overflowX: "hidden",
    "& .MuiPaper-root": {
      width: SIDEBAR_WIDTH.closed,
      overflowX: "hidden",
    },
  }),
};
