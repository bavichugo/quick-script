import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quick Script',
  description: 'Quick Script contains reusable code snippets for web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        {children}
        {/* Content */}
        {/* Footer */}
      </body>
    </html>
  )
}
