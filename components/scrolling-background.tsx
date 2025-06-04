"use client"

import { useEffect, useState } from "react"

export default function ScrollingBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [shuffledImages, setShuffledImages] = useState([])
  
  // Updated array with your new images
  const backgroundImages = [
    "/water-bar-concept-hero.png",
    "/water-bar-man-with-pouch.png",
    "/water-bar-stylized-group-dusk.png",
    "/water-bar-neon-ui-fountain.png",
    "/water-bar-lantern-hallway.png",
    "/water-bar-arabic-neon-fountain.png",
    "/water-bar-hydration-bar-scene.png",
    "/water-bar-neon-sign-icons.png",
    "/water-bar-modern-hydration-interior.png",
    "/water-bar-lounge-orange-wall.png",
    // Keeping some of the previous placeholders for variety
    "/luxury-yacht-marina-sunrise.png",
    "/sunrise-dance-party.png",
    "/tropical-neon-cocktail-bar.png",
    "/luxury-spa-blue-water.png",
    "/dubai-marina-golden-hour.png",
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    // Shuffle the array for more variety on each load (optional)
    // Doing this in useEffect ensures it only happens client-side
    setShuffledImages([...backgroundImages].sort(() => Math.random() - 0.5))
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {/* Scrolling Image Strip 1 - Moving Right */}
      <div
        className="absolute top-0 left-0 w-[300%] h-1/3 flex opacity-15"
        style={{
          transform: `translateX(${-scrollY * 0.15}px)`,
        }}
      >
        {shuffledImages.length > 0 && [...shuffledImages, ...shuffledImages.slice(0, 6)].map(
          (
            src,
            index, // Ensure enough images for wide strips
          ) => (
            <div
              key={`strip1-${index}`}
              className="flex-shrink-0 w-[16.666%] h-full bg-cover bg-center" // Adjusted width for 6 images per viewport width
              style={{
                backgroundImage: `url(${src})`,
                filter: "blur(1px) brightness(0.7)",
              }}
            />
          ),
        )}
      </div>

      {/* Scrolling Image Strip 2 - Moving Left */}
      <div
        className="absolute top-1/3 left-0 w-[300%] h-1/3 flex opacity-10"
        style={{
          transform: `translateX(${scrollY * 0.08}px)`,
        }}
      >
        {shuffledImages.length > 0 && [...shuffledImages.slice().reverse(), ...shuffledImages.slice(0, 6).reverse()].map((src, index) => (
          <div
            key={`strip2-${index}`}
            className="flex-shrink-0 w-[16.666%] h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              filter: "blur(2px) brightness(0.5)",
            }}
          />
        ))}
      </div>

      {/* Scrolling Image Strip 3 - Moving Right Slower */}
      <div
        className="absolute bottom-0 left-0 w-[300%] h-1/3 flex opacity-20"
        style={{
          transform: `translateX(${-scrollY * 0.1}px)`,
        }}
      >
        {shuffledImages.length > 0 && [...shuffledImages, ...shuffledImages.slice(0, 6)].map((src, index) => (
          <div
            key={`strip3-${index}`}
            className="flex-shrink-0 w-[16.666%] h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              filter: "blur(1.5px) brightness(0.6)",
            }}
          />
        ))}
      </div>

      {/* Animated Video-like Overlays */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full animate-pulse blur-xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full animate-pulse delay-1000 blur-xl" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full animate-pulse delay-500 blur-xl" />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/80" />
    </div>
  )
}
