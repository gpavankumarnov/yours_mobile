
import { getTenantContext } from '../../common/utils/utilities'
import Group from './Group'
import { User } from './UserService'

/**
 * mockUser is a fake user with all groups and roles that is used to simulate a real user during local and test run.
 * modify groups or roles to facilitate authentication check testing in a local runtime environment.
 */
const mockUser: User = {
  name: 'name_test',
  surname: 'surname_test',
  username: 'username_test',
  selectedTenant: getTenantContext(),
  groups: [`${Group.EMPLOYEE}_${getTenantContext()}`],
  roles: [
    // Permission.MIND_DASHBOARD_PAGE_VIEW,
    // Permission.MIND_PURCHASE_ORDER_VIEW,
    // Permission.MIND_PURCHASE_ORDER_EDIT,
    // Permission.MIND_INTEGRATION_CONFIG_READ,
    // Permission.MIND_PURCHASE_ORDER_DEPARTMENT_VIEW,
    // Permission.MIND_PURCHASE_ORDER_DEPARTMENT_EDIT,
    // Permission.MIND_TENANT_PARAMETERS_SETUP
    // Permission.MOP_SECRETS_READ,
    // Permission.MOP_SECRETS_WRITE,
  ]
  // groups: [],
  // roles: []
}
export default mockUser
