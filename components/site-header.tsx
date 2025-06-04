"use client"

import Link from "next/link"
import { Droplets } from "lucide-react"

export function SiteHeader() {

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
              <Link href="/" className="relative group">
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
            
            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-6">
              {
                [
                { href: "/", label: "Home" },
                { href: "/drinks", label: "Drinks" },
                { href: "/events", label: "Events" },
                { href: "/yacht-experience", label: "Yacht Experiences" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors hover:text-cyan-400 ${link.href === "/" ? "text-cyan-400" : "text-slate-300"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile menu icon - just visual for now */}
            <button className="md:hidden text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
