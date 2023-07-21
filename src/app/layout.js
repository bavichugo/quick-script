import './globals.css'
import Navbar1 from '@/components/NavBar/NavBar1'

export const metadata = {
  title: 'Quick Script',
  description: 'Quick Script contains reusable code snippets for web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <Navbar1 />
        {children}
        {/* Content */}
        {/* Footer */}
      </body>
    </html>
  )
}
