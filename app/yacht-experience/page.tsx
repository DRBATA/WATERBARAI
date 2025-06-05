"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, Sailboat, Sparkles, Sun, Wind, Music, ChevronRight, ChevronLeft, Droplets } from "lucide-react"
import { ScrollToDesignVoyageButton, InstagramFollowButton } from "@/components/yacht-experience-buttons"
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

      {/* Coming Next Season Notification */}
      <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Sun className="w-5 h-5 mr-2 animate-pulse" />
          <p className="text-center font-medium">
            <span className="font-bold">Coming Next Season:</span> Yacht experiences will be available when temperatures cool down. Contact us for future bookings!
          </p>
        </div>
      </div>

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
          <ScrollToDesignVoyageButton>
            Design Your Voyage
          </ScrollToDesignVoyageButton>
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
                Let's craft an unforgettable journey. Plan ahead for next season when temperatures cool down.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {/* Placeholder for the detailed form - can re-integrate the previous one */}
              <div className="relative space-y-6">
                {/* Semi-transparent overlay with coming soon message */}
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-md">
                  <Sun className="w-12 h-12 text-amber-500 mb-3 animate-pulse" />
                  <h3 className="text-xl font-bold text-white mb-1">Coming Next Season</h3>
                  <p className="text-blue-200 text-center max-w-md px-6">Booking for yacht experiences will reopen when temperatures cool down.</p>
                  <InstagramFollowButton>
                    Follow for Updates
                  </InstagramFollowButton>
                </div>
                
                {/* Visually disabled form in the background */}
                <form className="space-y-6 opacity-50">
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
                        disabled
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
                        disabled
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
                      disabled
                    ></textarea>
                  </div>
                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-4 text-lg shadow-xl"
                      disabled
                    >
                      Send Inquiry
                    </Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


    </div>
  )
}

// Add this to your app/globals.css or a style tag if not using Tailwind for patterns
// For a subtle pattern background in sections:
// .patterns-bg {
//   background-image: radial-gradient(circle at center center, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 2px,transparent 2px,transparent 100%);
//   background-size: 20px 20px;
// }
