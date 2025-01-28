export interface User {
  name: string;
  surname: string;
  username?: string;
  roles: string[];
  groups?: string[];
  selectedTenant: string;
}

let user: User = {
  name: "",
  surname: "",
  username: "",
  roles: [],
  groups: [],
  selectedTenant: "",
};

//freeze deep objects.
//recursive way
function deepFreeze<T>(obj: T): T {
  const propNames = Object.getOwnPropertyNames(obj) as (keyof T)[];
  propNames.forEach((name) => {
    const prop = obj[name];

    if (typeof prop === "object" && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

//Methods to update the above object.

export const UserService = {
    init:(u:User):void=> {
        user = u
        deepFreeze(user)
    },
  getUsername: (): string | undefined => user?.username,
  getFirstName: (): string => user?.name,
  getLastName: (): string | undefined => user?.surname,
  getFullName: (): string | undefined =>
    user ? `${user.name} ${user.surname}` : "",
  getSelectedTenant: (): string => (user ? user.selectedTenant : ""),
  getUser: (): User => user,
  changeSelectedTenant: (newTenant: string): string => {
    user = { ...user, selectedTenant: newTenant };
    deepFreeze(user);
    return newTenant;
  },
  hasRole: (role: string) => (user ? user.roles.includes(role) : false),
  hasAnyRole: (roles: string[]) => {
    return roles.some((role) => UserService.hasRole(role));
  },
  hasGroup: (group: string) => user.groups?.includes(group),
  hasAnyGroup: (groups: string[]) => {
    return groups.some((group) => UserService.hasGroup(group));
  },
};
