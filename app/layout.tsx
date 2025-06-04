import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'

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
        <footer className="mt-auto py-6 bg-slate-900/80 backdrop-blur-sm border-t border-cyan-500/20">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">©</span> {new Date().getFullYear()} The Water Bar. Sunrise wellness, reimagined.
            </div>
            <nav className="flex items-center gap-4">
              <a href="/events" className="hover:text-cyan-400 transition-colors">Events</a>
              <a href="/drinks" className="hover:text-cyan-400 transition-colors">Drinks</a>
              <a href="/yacht-experience" className="hover:text-cyan-400 transition-colors">Yacht Experiences</a>
              <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  )
}
