import { SxProps } from "@mui/material";
import { TOPBAR_HEIGHT } from "./constants";

    export const topbarPaperSx = {
        width:'100%',
        position:'fixed',
        top:0,
        left:0,
        height:TOPBAR_HEIGHT,
        zIndex:'101'
    }

    
export const topbarWrapperSx: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px 0 12px',
    height: TOPBAR_HEIGHT,
    position:'sticky'
  }