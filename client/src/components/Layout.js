import React from 'react'
import { Helmet } from "react-helmet";

const Layout = ({title,children}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main>
        {children}
      </main>
    </div>
    
  )
}

export default Layout
