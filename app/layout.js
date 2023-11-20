import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import "./globals.css"



export const metadata = {
  title: "David's Portfolio",
  description: 'Here you will find everything you need to know about me.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth ' >
      <body className={`inter.className font-style custom-sm-bg sm:bg-cover overflow-x-hidden`}>
        <Navbar />

        {children}
        <Footer />
      </body>

    </html>
  )
}
