import { ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { UserInfoProps } from "./UserInfo";

const UserInfoList = (props:UserInfoProps & {anchorEl: HTMLElement| null; handleClose: () => void}) => {
    const {title, handleClose, anchorEl} = props
    const open = Boolean(anchorEl)
  return (
    <Menu
    open={open}
     id='user-account-menu'
     onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 5,
          sx: {
            overflow: 'visible'
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
      <ListItemText>
      <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
    </ListItemText>
      </MenuItem>
    </Menu>
  )
}

export default UserInfoList
