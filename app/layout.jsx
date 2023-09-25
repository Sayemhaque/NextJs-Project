import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next js 13 social Media App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-cols-5`}>
        <div className='col-span-1 bg-green-300 h-screen'>
        <Sidebar/>
        </div>
       <div className='col-span-4 bg-red-100'>
       {children}
       </div>
        </body>
    </html>
  )
} 
