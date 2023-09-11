import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter, Rubik } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: "it's about me, myself & I",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
