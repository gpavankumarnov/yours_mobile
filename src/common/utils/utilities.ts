export const getTenantContext = (): string => {
    const pathParams: string[] = window.location.pathname.split('/')
    return pathParams.length >= 2 ? pathParams[0] || pathParams[1] : ''
  }