import { Box, Paper } from "@mui/material"
import UserInfo, { UserInfoProps } from "../UserInfo/UserInfo"
import { topbarPaperSx, topbarWrapperSx } from "./Topbar.style"

export type TopbarProps = {
    logo?:string
    onLogoClick?:()=>void
}  & UserInfoProps




const Topbar = (props:TopbarProps) => {
const {logo, onLogoClick, onLogout} = props

  return (
    <Paper square variant="outlined" sx={topbarPaperSx}>
      <Box sx={topbarWrapperSx}>
      <Box role="button" component="img" src={logo} alt='logo' onClick={onLogoClick} sx={{width:'100px'}} />
      <UserInfo title="logout" onLogout={onLogout} />
      </Box>
    </Paper>
  )
}

export default Topbar
