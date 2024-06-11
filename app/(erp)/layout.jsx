'use client'

import NavBar from "@components/Nav"
import { GlobalStateProvider } from "@context/GlobalStateContext"

const Layout = ({children}) => {

    return (
      <html lang="en">
        <body>
          <GlobalStateProvider>
            <NavBar />
            {children}
          </GlobalStateProvider>
        </body>
      </html>
    )
  }

  export default Layout


//className="h-screen bg-gradient-to-b from-gray-200 to-gray-400"