import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router"
import Group from "../../core/services/Group"
import { UserService } from "../../core/services/UserService"
import { MenuItem, MenuItemPath, menuItems } from "../components/Sidebar/ItemsData"
import { SidebarItemProps } from "../components/Sidebar/Sidebarbody"
import { getTenantContext } from "../utils/utilities"


export default function useSidebarItems(): SidebarItemProps[][] {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { pathname } = useLocation()

   const employeeGroupForCompare = `${Group.EMPLOYEE}_${getTenantContext()}`


  const isEmployee = (roles: string[]): boolean => {
  
    const isJustEmployee = UserService.hasGroup(employeeGroupForCompare)
    return isJustEmployee || UserService.hasAnyRole(roles) || false
  }
//roles: Permission[]
  const checkGroupsAndRoles = (groups: Group[]) => {
    if (groups.length === 1 && groups.includes(Group.EMPLOYEE)) {      
      return groups.includes(Group.EMPLOYEE) 
    }

    return false
  }

  const isPathSelected = (itemPath: MenuItemPath[]) => {
    return itemPath.some((p) => pathname.toLowerCase().includes(`/${getTenantContext()}${p.path}`))
  }

  const handleClickItem = (itemPath: MenuItemPath[]) => {
    const urlPath = itemPath.filter((p) => isEmployee([p.role])).map(({ path }) => path)[0]
    navigate(`/${getTenantContext()}${urlPath}`)
  }

  const muxItems: SidebarItemProps[][] =
    getTenantContext() === '' ? [[]] : menuItems.map((i) => mapToSidebarItemProps(i))

  function mapToSidebarItemProps(items: MenuItem[]) {
    
    return items
      .filter((item) =>
        checkGroupsAndRoles(
          item.groups,
          item.paths?.map(({ role }) => role)
        )
      )
      .map(
        (item) =>
          ({
            label: t(item.labelKey),
            isSelected: isPathSelected(item.paths),
            icon: item.icon,
            onClick: () => handleClickItem(item.paths)
          }) as SidebarItemProps
      )
  }

  return muxItems
}
