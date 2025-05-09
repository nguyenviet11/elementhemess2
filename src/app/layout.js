import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elegant Themes – The Most Popular WordPress Themes In The World',
  description: 'WordPress Themes with Visual Drag & Drop Technology that empower a community of 974,872 customers. Home of Divi, the ultimate Visual Page Builder and Theme.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
