import './globals.css'
import Navbar1 from '@/components/NavBar/NavBar1'
import Footer1 from '@/components/Footer/Footer1'

export const metadata = {
  title: 'Quick Script',
  description: 'Quick Script contains reusable code snippets for web development.',
}

export default function RootLayout({ children }) {
  return (
    <html className="bg-black" lang="en">
      <body className="flex flex-col min-h-screen">
        <div className=''>
          <Navbar1 />
          <main className='bg-black container mx-auto'>
            {children}
          </main>
        </div>

        <Footer1 />
      </body>
    </html>
  )
}
