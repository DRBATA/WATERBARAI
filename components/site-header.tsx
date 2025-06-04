"use client"

import Link from "next/link"
import { Droplets, X } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("/")
  
  // Update current path on initial client render
  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])
  
  // Close mobile menu when resizing to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])
  
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/drinks", label: "Drinks" },
    { href: "/events", label: "Events" },
    { href: "/yacht-experience", label: "Yacht Experiences" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative">
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-cyan-700/20 to-blue-900/30 blur-xl"></div>
        
        {/* Glass effect overlay */}
        <div className="relative bg-slate-900/70 backdrop-blur-md border-b border-cyan-500/20">
          <div className="container flex h-16 items-center justify-between px-4">
            {/* Logo area */}
            <div className="flex items-center gap-2">
              <Link href="/" className="relative group" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  {/* Water droplet icon with glow effect */}
                  <div className="relative">
                    <Droplets className="h-6 w-6 text-cyan-400" />
                    <div className="absolute inset-0 text-cyan-400 opacity-50 blur-sm">
                      <Droplets className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Text logo with glow effect */}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent font-bold text-xl">
                    THE WATER BAR
                  </span>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute -inset-1 rounded-full bg-cyan-400/20 scale-0 transition-all duration-300 group-hover:scale-100 blur-md"></div>
              </Link>
            </div>
            
            {/* Desktop navigation links */}
            <nav className="hidden md:flex items-center gap-6">
              {
                navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors hover:text-cyan-400 ${link.href === currentPath ? "text-cyan-400" : "text-slate-300"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile menu toggle button - separated hamburger and close buttons for better touch handling */}
            {mobileMenuOpen ? (
              <button 
                className="md:hidden relative z-50 text-cyan-400 focus:outline-none p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            ) : (
              <button 
                className="md:hidden relative z-50 text-cyan-400 focus:outline-none p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile navigation menu - slides in from top with overlay scrim for additional touch target to close */}
        <div className={`fixed inset-0 pt-16 z-40 md:hidden ${mobileMenuOpen ? "" : "pointer-events-none"}`}>
          {/* Backdrop overlay - clicking anywhere closes the menu */}
          <div 
            className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Menu content */}
          <div className={`bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 h-full overflow-y-auto transform transition-transform duration-300 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="container px-4 py-8">
              <nav className="flex flex-col items-center gap-6">
                {
                  navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg transition-colors hover:text-cyan-400 ${link.href === currentPath ? "text-cyan-400" : "text-slate-200"}`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Extra CTA in mobile menu */}
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-md shadow-lg shadow-cyan-500/25"
                >
                  Book Now
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
