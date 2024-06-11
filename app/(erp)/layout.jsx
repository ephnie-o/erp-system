'use client'

import NavBar from "@components/Nav"

const Layout = ({children}) => {

    return (
      <html lang="en">
        <body>
            <NavBar />
            {children}
        </body>
      </html>
    )
  }

  export default Layout
