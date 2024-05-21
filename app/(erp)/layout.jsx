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


//className="h-screen bg-gradient-to-b from-gray-200 to-gray-400"