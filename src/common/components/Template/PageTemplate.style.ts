import { TOPBAR_HEIGHT } from "../Topbar/constants";

export const pageWrapper = () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    // height: `calc(100vh - ${TOPBAR_HEIGHT})`,
    overflow: 'hidden',
    paddingTop: TOPBAR_HEIGHT,
    backgroundColor: 'white'
  })


  export const MainWrapper = {
    height:'100%',
    display:'flex',
    alignItems:'center',
    
  }