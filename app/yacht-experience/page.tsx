"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, Sailboat, Sparkles, Sun, Wind, Music, ChevronRight, ChevronLeft, Droplets } from "lucide-react"
import ScrollingBackground from "@/components/scrolling-background" // Re-using for consistency
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const heroImages = [
  "/yacht-parties/morning-party-sunrise-dance.png",
  "/yacht-parties/dj-deck-dancing.jpeg",
  "/yacht-parties/ice-bath-social.jpeg",
  "/yacht-parties/group-meditation-skyline.jpeg",
  "/yacht-parties/drinks-toast-dj.jpeg",
]

const experienceSections = [
  {
    id: "sunrise",
    title: "Sunrise Serenity",
    ambiance: "Tranquil & Invigorating",
    description:
      "Begin your day embraced by the calm of the sea and the soft glow of sunrise. Our Sunrise Serenity experience is designed to awaken your senses and set a peaceful tone. Imagine gentle yoga flows on deck, guided meditation as the city stirs, and nourishing elixirs to greet the morning.",
    images: ["/yacht-parties/morning-party-sunrise-dance.png", "/yacht-parties/group-meditation-skyline.jpeg"],
    icon: <Sun className="w-12 h-12 text-amber-300" />,
    activities: [
      "Guided Sunrise Meditation",
      "Gentle Yoga & Stretching",
      "Freshly Pressed Juices & Elixirs",
      "Quiet Reflection Zones",
    ],
    bgColor: "bg-amber-900/10",
  },
  {
    id: "daytime",
    title: "Daytime Radiance",
    ambiance: "Vibrant & Rejuvenating",
    description:
      "Immerse yourself in a sun-drenched haven of wellness and joy. Our Daytime Radiance package offers a perfect blend of invigorating activities and luxurious relaxation. From revitalizing ice baths to bespoke massage treatments and our signature mocktail bar, every moment is curated for your pleasure.",
    images: [
      "/yacht-parties/ice-bath-social.jpeg",
      "/yacht-parties/wellness-treatment-eyemask.jpeg",
      "/yacht-parties/woman-ice-bath.jpeg",
    ],
    icon: <Wind className="w-12 h-12 text-cyan-300" />,
    activities: [
      "On-Deck Ice Baths & Saunas",
      "Bespoke Massage Therapy",
      "Gourmet Healthy Lunch",
      "Signature Mocktail Creations",
    ],
    bgColor: "bg-cyan-900/10",
  },
  {
    id: "sunset",
    title: "Sunset Celebrations",
    ambiance: "Chic & Energetic",
    description:
      "As the sun dips below the horizon, painting the sky in fiery hues, your Water Bar yacht transforms into an exclusive party lounge. Experience the magic of Dubai at dusk with curated DJ sets, sophisticated socializing, and an atmosphere of pure celebration.",
    images: ["/yacht-parties/dj-deck-dancing.jpeg", "/yacht-parties/drinks-toast-dj.jpeg"],
    icon: <Music className="w-12 h-12 text-purple-300" />,
    activities: [
      "Live DJ & Curated Playlists",
      "Sunset Toast with Premium Mocktails",
      "Chic Lounge & Dance Areas",
      "Spectacular City Light Views",
    ],
    bgColor: "bg-purple-900/10",
  },
]

export default function YachtExperiencePage() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
  const prevImage = () => setCurrentHeroImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-x-hidden">
      <ScrollingBackground />

      {/* Immersive Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center text-center overflow-hidden z-10">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src || "/placeholder.svg"}
            alt={`Water Bar Yacht Experience ${index + 1}`}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            priority={index === 0}
            className={cn(
              "transition-opacity duration-1000 ease-in-out",
              index === currentHeroImage ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>
        </div>
        <div className="relative z-10 p-4">
          <Sailboat className="w-20 h-20 md:w-24 md:h-24 mx-auto text-cyan-300 mb-4 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent block drop-shadow-2xl">
              The Water Bar Afloat
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Curated Yacht Experiences. Unforgettable Moments.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 text-lg shadow-xl shadow-amber-500/30 transform hover:scale-105 transition-transform"
            onClick={() => document.getElementById("design-voyage")?.scrollIntoView({ behavior: "smooth" })}
          >
            Design Your Voyage
          </Button>
        </div>
      </section>

      {/* Narrative Experience Sections */}
      {experienceSections.map((section, sectionIndex) => (
        <section key={section.id} className={cn("py-16 md:py-24 relative z-10 overflow-hidden", section.bgColor)}>
          <div className="absolute inset-0 opacity-5 patterns-bg"></div> {/* Optional subtle pattern */}
          <div className="container mx-auto px-4 relative">
            <div
              className={cn(
                "flex flex-col items-center gap-8 lg:gap-16",
                sectionIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              )}
            >
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-3">
                  {section.icon}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{section.title}</h2>
                    <p className="text-lg text-sky-300">{section.ambiance}</p>
                  </div>
                </div>
                <p className="text-md md:text-lg text-blue-100 mb-6 leading-relaxed">{section.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {section.activities.map((activity) => (
                    <div key={activity} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-blue-100">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                {section.images.map((imgSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={cn(
                      "relative rounded-lg overflow-hidden shadow-2xl aspect-video",
                      section.images.length > 1 && imgIndex === 0 ? "sm:aspect-[4/3]" : "sm:aspect-video",
                    )}
                  >
                    <Image
                      src={imgSrc || "/placeholder.svg"}
                      alt={`${section.title} - Image ${imgIndex + 1}`}
                      fill
                      sizes="100%"
                      style={{ objectFit: "cover" }}
                      className="transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bespoke Curation Section */}
      <section className="py-16 md:py-24 bg-slate-800/50 backdrop-blur-md z-10 relative">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto text-amber-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Every Voyage, Uniquely Yours
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Your vision is our blueprint. From the moment you step aboard, The Water Bar team ensures every detail is
            meticulously crafted. Choose your ambiance, select your wellness activities, curate your music, and design
            your perfect menu of zero-proof elixirs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto text-blue-200">
            {[
              "Music & DJs",
              "Wellness Activities",
              "Gourmet Mocktails",
              "Themed Decor",
              "Event Flow",
              "Guest Comfort",
            ].map((item) => (
              <div key={item} className="p-4 bg-blue-900/40 rounded-lg border border-cyan-700/30 text-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section (Simplified for this refactor, can reuse previous form) */}
      <section id="design-voyage" className="py-16 md:py-24 z-10 relative bg-gradient-to-b from-blue-950 to-slate-900">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-slate-800/70 border-cyan-500/40 backdrop-blur-lg p-6 md:p-10 shadow-2xl">
            <CardHeader className="text-center p-0 mb-6 md:mb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-3">
                Design Your Dream Yacht Experience
              </CardTitle>
              <CardDescription className="text-lg text-blue-100">
                Let's craft an unforgettable journey. Share your vision with us.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {/* Placeholder for the detailed form - can re-integrate the previous one */}
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-700/60 p-3 rounded-md text-white border-cyan-600/60"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-700/60 p-3 rounded-md text-white border-cyan-600/60"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="event-details" className="block text-sm font-medium text-blue-200 mb-1">
                    Tell us about your event
                  </label>
                  <textarea
                    id="event-details"
                    rows={4}
                    className="w-full bg-slate-700/60 p-3 rounded-md text-white border-cyan-600/60"
                    placeholder="Number of guests, preferred dates, type of experience..."
                  ></textarea>
                </div>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-4 text-lg shadow-xl"
                  >
                    Send Inquiry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

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
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Events
              </a>
              <a href="/drinks" className="hover:text-cyan-400 transition-colors">
                Drinks
              </a>
              <a href="/yacht-experience" className="hover:text-cyan-400 transition-colors">
                Yacht Experiences
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                Book Now
              </Button>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center text-blue-300">
            <p>&copy; 2025 The Water Bar. Sunrise wellness, reimagined.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Add this to your app/globals.css or a style tag if not using Tailwind for patterns
// For a subtle pattern background in sections:
// .patterns-bg {
//   background-image: radial-gradient(circle at center center, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 2px,transparent 2px,transparent 100%);
//   background-size: 20px 20px;
// }
