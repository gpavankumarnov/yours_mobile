import { ReactNode } from 'react'

import {
  Home,
  IntegrationInstructionsOutlined,
  Person,
  ShoppingBag,
  ShoppingCart
} from '@mui/icons-material'
import Group from '../../../core/services/Group'
import Permission from '../../../core/services/Permission'


export type MenuItemPath = {
  path: string
  role: Permission
}

export type MenuItem = {
  labelKey: string
  icon: ReactNode
  paths: MenuItemPath[]
  groups: Group[]
}

export const menuItems: MenuItem[][] = [
  [
    {
      labelKey: 'Home',
      icon: <Home />,
      groups: [Group.EMPLOYEE],
      paths: [{ path: '/home', role: Permission.MOBILE_DASHBOARD_PAGE_VIEW }]
    },
    {
      labelKey: 'Orders',
      icon: <ShoppingBag />,
      groups: [Group.EMPLOYEE],
      paths: [
        { path: '/purchase-orders', role: Permission.MOBILE_DASHBOARD_PAGE_VIEW },
        { path: '/purchase-order/', role: Permission.MOBILE_DASHBOARD_PAGE_EDIT }
      ]
    }
  ],
  [
    {
      labelKey: 'Shoppingcart',
      icon:<ShoppingCart />,
      groups: [Group.EMPLOYEE],
      paths: [{ path: '/cart', role: Permission.MOBILE_DASHBOARD_PAGE_VIEW }]
    },
    {
      labelKey: 'Account',
      icon: <Person />,
      groups: [Group.EMPLOYEE],
      paths: [{ path: '/account', role: Permission.MOBILE_DASHBOARD_PAGE_VIEW }]
    }
  ],
  [
    {
      labelKey: 'integrations',
      icon: <IntegrationInstructionsOutlined />,
      groups: [Group.EMPLOYEE],
      paths: [{ path: '/integrations', role: Permission.MOBILE_DASHBOARD_PAGE_VIEW }]
    }
  ],
]
