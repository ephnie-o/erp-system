import '@styles/globals.css'

export const metadata = {
    title: 'ERP System',
    description: 'ERP system for pharmacy'
}


const RootLayout = ({children}) => {

  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}

export default RootLayout