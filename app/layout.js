import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "David's Portfolio",
  description: 'Here you will find everything you need to know about me.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

      <body className='bg-zinc-700'>
        <Navbar />

        {children}
        <Footer />
      </body>

    </html>
  )
}
