import PageError, { PageErrorFallback } from "./PageError"

export type Page404Props = {
  fallbackProps?: PageErrorFallback
}

const PageError404 = ({ fallbackProps }:Page404Props) => {
  return (
   <PageError
   title="title"
   subtitle="subtitle"
   fallbackProps={fallbackProps}
   />
    
  )
}

export default PageError404
