import { PersonOutlineOutlined } from '@mui/icons-material'
import { Box, IconButton } from "@mui/material"
import { useState } from "react"
import UserInfoList from "./UserInfoList"
export type UserInfoProps = {
    title:string
    onLogout:()=>void
    logoutLabel?:string
}




const UserInfo = (props:UserInfoProps) => {
  const {title} = props


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = ()=>{
    setAnchorEl(null)
  }
  
  return (
    <Box id="user">
      <IconButton
      onClick={handleClick}
      size="small"
      aria-controls={open ? 'account-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      color='default'
      title={title}
      >
      <PersonOutlineOutlined fontSize='large' />
      </IconButton>
      <UserInfoList {...props} anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  )
}

export default UserInfo
