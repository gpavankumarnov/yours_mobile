import { Box, Divider, List } from "@mui/material"
import { Fragment } from "react/jsx-runtime"
import SidebarItem from "./SidebarItem"
import { body } from './Sidebarbody.style'

export type SidebarItemProps = {
    label:string
    icon:React.ReactElement
    onClick:()=>void
}

export interface SidebarBodyProps {
    items: SidebarItemProps[][]
    isOpen: boolean
  }


const Sidebarbody = (props:SidebarBodyProps) => {
   const {items, isOpen} = props

    const getItem = (args:SidebarItemProps) => {
      let itemProps = args 
const label = args.label
    itemProps = {icon: args.icon, label,onClick:args.onClick}
return <SidebarItem {...itemProps} expanded={isOpen}/>
    }


  return (
    <Box sx={body}>
    {/* items = [[{},{}]] */}
        {items.map((list, index)=>{
            return (
                <Fragment key={index}>
                <Divider/>
                <List>{list.map(getItem)}</List>
                </Fragment>
            )
        })}
      
    </Box>
  )
}

export default Sidebarbody
