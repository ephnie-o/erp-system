import '@styles/globals.css'

export const metadata = {
    title: 'Gold Erp',
    description: 'ERP system for companies'
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