import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { Droplets } from 'lucide-react'
import { BookNowButton } from '@/components/book-now-button'

export const metadata: Metadata = {
  title: 'The Water Bar',
  description: 'Sunrise Wellness, Sober Celebration, and Sensory Joy',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 font-sans antialiased">
        <SiteHeader />
        {children}
        <footer className="py-12 px-4 border-t border-cyan-500/20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <Droplets className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  THE WATER BAR
                </span>
              </div>
              <nav className="flex flex-wrap justify-center gap-6 text-blue-200">
                <a href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
                <a href="/events" className="hover:text-cyan-400 transition-colors">
                  Events
                </a>
                <a href="/drinks" className="hover:text-cyan-400 transition-colors">
                  Drinks
                </a>
                <a href="/yacht-experience" className="hover:text-cyan-400 transition-colors">
                  Yacht Experiences
                </a>
                <a href="/sponser-activation" className="hover:text-cyan-400 transition-colors">
                  Partners
                </a>
                <a href="https://www.instagram.com/thewaterbarae/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
                <BookNowButton />
              </nav>
            </div>
            <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center text-blue-300">
              <p>&copy; {new Date().getFullYear()} The Water Bar. Sunrise wellness, reimagined.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
