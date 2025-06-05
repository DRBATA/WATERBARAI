"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Music, Sunrise, Zap, Droplets, Star, Heart, Users } from "lucide-react"
import { JoinCommunityButton } from "@/components/event-page-buttons"
import ScrollingBackground from "@/components/scrolling-background"
import NeonTriangle from "@/components/neon-triangle"

const allEvents = [
  {
    id: "sober-rave-xtatic-dance",
    title: "Sober Rave: Xtatic Dance Party",
    date: "2024-11-08",
    displayDate: "Friday, November 8th, 2024",
    time: "9:00 PM - 12:00 AM",
    location: "119 Spadina Avenue, Toronto",
    category: "Conscious Events",
    image: "/sober.webp",
    description:
      "Our groundbreaking premiere event that redefined conscious celebration in an unexpected venue. This first-of-its-kind sober rave transformed a premium fitness space into a cathedral of movement and mindful euphoria. Guests experienced the fusion of high-energy dance, artistic expression, and wellness commerce in a revolutionary format that set the foundation for our signature event series.",
    highlights: ["Curated DJ Experience", "Live Superhero Sketch Artist", "Wellness Vendor Market", "Alcohol-Free Euphoria"],
    price: "$25 CAD",
    spots: "Sold Out",
    categoryColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
  },
  {
    id: "secret-ocean-yacht",
    title: "Secret Ocean Yacht: Wellness Series",
    date: "2025-01-26",
    displayDate: "Jan 26 & Feb 23, 2025",
    time: "5:30 AM - 9:00 AM",
    location: "Secret Ocean Yacht, Dubai Creek Harbour",
    category: "Morning Parties",
    image: "/events/rooftop-dj-skyline.png",
    description:
      "The Secret Ocean Yacht at Dubai Creek Harbour is a floating sanctuary for curated wellness and social experiences, set against the iconic skyline. Our series features renowned artists Vic Halley (Jan 26) and Sober Boy Music (Feb 23), blending music with breathwork and meaningful conversation activations. Unlike traditional retreats, it features ambient lighting and a sensorial atmosphere that blends music with the rhythm of the sea—designed for intimate gatherings that offer a refined yet relaxed space for connection, reflection, and celebration in motion.",
    highlights: ["Vic Halley & Sober Boy Music", "Breathwork Sessions", "Functional Wellness Drinks", "Conversation Activations"],
    price: "AED 225",
    spots: "Limited Series",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  },
  {
    id: "ice-house-maison-perrier",
    title: "Chill & Thrill: Ice Bath x DJ Experience",
    date: "2025-05-18",
    displayDate: "Sunday, May 18th",
    time: "7:00 AM - 8:30 AM",
    location: "The Ice House, DIFC",
    category: "Wellness Workshops",
    image: "/icehouse.png",
    description:
      "We've partnered with The Ice House in DIFC to integrate cutting-edge cold exposure and recovery therapies into our wellness ecosystem. This exclusive morning event combines the physiological benefits of ice immersion with the sensory stimulation of curated beats by DJ LaCresPower. Sponsored by Maison Perrier, this pre-work ritual features private ice baths, infrared saunas, and premium refreshments—transforming recovery into a luxurious social experience for health-conscious professionals.",
    highlights: ["DJ LaCresPower Live Set", "Private Ice Bath Sessions", "Infrared Sauna Recovery", "Maison Perrier Refreshments"],
    price: "AED 155",
    spots: "Sold Out",
    categoryColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  },
  {
    id: "soulgreen-fitness-yoga",
    title: "Soulgreen: Sunrise Yoga & F45 Fusion",
    date: "2025-05-12",
    displayDate: "Monday, May 12th",
    time: "7:30 AM - 10:30 AM",
    location: "Soulgreen, Dubai Creek Harbour",
    category: "Social Fitness",
    image: "/soulgreen.png",
    description:
      "Bathed in early sunlight, Soulgreen's creek-front terrace turns a simple morning gathering into a breezy, feel-good celebration, with panoramic views that sparkle awake alongside your guests. Experience a perfect fusion of DRYP Yoga flow and F45 functional training, followed by Soulgreen's plant-forward menu in a relaxed, botanical setting—perfect for kick-starting the day with energy, wellness, and Dubai Creek Harbour's postcard backdrop.",
    highlights: ["DRYP Yoga with Coach Dias", "F45 Functional Training", "Plant-Forward Brunch", "Premium Rumi Yoga Mats"],
    price: "AED 195",
    spots: "8 spots left",
    categoryColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
  },
  // Past Events
  {
    id: "tea-ceremony-past",
    title: "Tea Ceremony: Hekate Cafe & Elixir Lounge",
    date: "2024-11-09",
    displayDate: "Saturday, November 9th, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "167 Avenue B, New York, NY 10009",
    category: "Conscious Events",
    image: "/tea-ceremony.webp",
    description:
      "Our first pre-Water Bar concept event, curating the transformative power of tea ceremonies in an intimate, community-focused boutique setting. We chose Hekate Café & Elixir Lounge for its intimate, witchy-meets-wellness vibe, complete with our signature hydration focus. This East Village gem provided the perfect mystical backdrop for meaningful connection and conscious celebration.",
    highlights: ["Traditional Tea Ceremony", "Complimentary Trip Elixir", "Charitable Donation", "Intimate Community Gathering"],
    price: "$25 Suggested Donation",
    spots: "Sold Out",
    categoryColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
  },
  {
    id: "fiena-womens-only",
    title: "Women's Sanctuary: FIENA x Water Bar",
    date: "2025-03-18",
    displayDate: "Monday, March 18th",
    time: "7:30 AM - 11:00 AM",
    location: "FIENA Dubai Private Club",
    category: "Morning Parties",
    image: "/womenonly.png",
    description:
      "FIENA Dubai is a private members' social club for women, known for curating empowering experiences and wellness activations. Our collaboration brings together Laayla Moon's powerful fusion of ecstatic dance, tantra, and kundalini bodywork, alongside DJ Miss Naiara Rich's global rhythms with soulful intent. This women-only sanctuary creates an intentional space blending immersive massage experiences, health-led activations, and meaningful moments of celebration—perfect for ambitious, like-minded women seeking connection and rejuvenation.",
    highlights: ["Laayla Moon Ecstatic Dance", "DJ Miss Naiara Rich", "Luxury Wellness Massages", "Women-Only Sanctuary"],
    price: "AED 275",
    spots: "Sold Out",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  },
  {
    id: "matcha-like-its-1999",
    title: "MatchaLikeIt's1999™: Y2K Matcha Experience",
    date: "2025-12-31",
    displayDate: "TBD",
    time: "11:00 AM - 3:00 PM",
    location: "Dubai Design District",
    category: "Conscious Events",
    image: "/mli99.png",
    description:
      "A groundbreaking fusion of nostalgic Y2K aesthetics, interactive digital experiences, and premium matcha mixology. Step into our immersive time capsule where house and tech music meets ceremonial grade matcha in a multi-sensory journey. Play our custom-designed 'Matcha Madness' game featuring Jake 'Sandstorm' Rodriguez and Zara 'Lightning' Al-Rashid while sipping on specialty mocktails like 'Matcha Sunrise '99' and 'Y2K Fizz'. Originally conceptualized for Kayan Festival, this evolved concept brings something truly innovative to UAE's wellness scene.",
    highlights: ["Interactive Matcha Video Game", "Y2K-Themed Mocktail Menu", "House & Tech Music", "Limited Edition Token NFTs"],
    price: "AED 199",
    spots: "Coming Soon",
    comingSoon: true,
    categoryColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
  }
]

const eventCategories = [
  {
    name: "Morning Parties",
    icon: <Music className="w-6 h-6" />,
    description: "Dubai's first luxury morning parties",
    color: "text-amber-300",
  },
  {
    name: "Wellness Workshops",
    icon: <Heart className="w-6 h-6" />,
    description: "Breathwork, meditation, and healing",
    color: "text-emerald-300",
  },
  {
    name: "Social Fitness",
    icon: <Zap className="w-6 h-6" />,
    description: "Community workouts and connection",
    color: "text-cyan-300",
  },
  {
    name: "Conscious Events",
    icon: <Users className="w-6 h-6" />,
    description: "Ecstatic raves, tea ceremonies, matcha parties",
    color: "text-purple-300",
  },
]

export default function EventsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Sort events by date (newest first)
  const sortedEvents = [...allEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Count events by category
  const getEventCountByCategory = (categoryName: string) => {
    return allEvents.filter((event) => event.category === categoryName).length
  }

  // Filter events based on selected categories
  const filteredEvents =
    selectedCategories.length === 0
      ? sortedEvents
      : sortedEvents.filter((event) => selectedCategories.includes(event.category))

  // Check if event is in the past
  const isEventPast = (eventDate: string) => {
    return new Date(eventDate) < new Date()
  }

  // Toggle category selection
  const toggleCategory = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((cat) => cat !== categoryName) : [...prev, categoryName],
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <ScrollingBackground />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden z-10">
        {/* Animated Neon Triangles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 animate-pulse delay-300">
            <NeonTriangle size={350} />
          </div>
          <div className="absolute -bottom-32 -right-32 animate-pulse delay-700">
            <NeonTriangle size={280} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/events/rooftop-social-gathering.png"
            alt="Water Bar Community Events"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                EVENTS
              </span>
              <div className="absolute inset-0 text-cyan-400 opacity-20 blur-sm">EVENTS</div>
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              {[Calendar, Sunrise, Music].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-8 h-8 text-cyan-400 animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Morning Parties, Wellness Workshops & Conscious Experiences
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Join Dubai's most vibrant wellness community. Every sunrise, a new adventure.
          </p>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Filter by Experience Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((category) => (
              <Card
                key={category.name}
                className={`cursor-pointer transition-all duration-300 group backdrop-blur-sm ${
                  selectedCategories.includes(category.name)
                    ? "bg-gradient-to-br from-cyan-600/50 to-blue-600/30 border-cyan-400/70 scale-105"
                    : "bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/30 hover:border-cyan-400/50"
                }`}
                onClick={() => toggleCategory(category.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`mb-4 ${category.color}`}>{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-blue-200 text-sm mb-3">{category.description}</p>
                  <Badge
                    className={
                      selectedCategories.includes(category.name)
                        ? "bg-cyan-400/30 text-cyan-200 border-cyan-300/50"
                        : "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
                    }
                  >
                    {selectedCategories.includes(category.name)
                      ? "Selected"
                      : `${getEventCountByCategory(category.name)} events`}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Clear Filters Button */}
          {selectedCategories.length > 0 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setSelectedCategories([])}
                className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10"
              >
                Clear Filters ({filteredEvents.length} events shown)
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {selectedCategories.length === 0 ? "All Events" : `${selectedCategories.join(" & ")} Events`}
          </h2>
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <Card
                key={event.id}
                className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-cols-2" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className={event.categoryColor}>{event.category}</Badge>
                      {'comingSoon' in event && event.comingSoon && (
                        <div className="mt-2">
                          <Badge className="bg-amber-500/40 text-amber-200 border-amber-400/50 animate-pulse">
                            Coming Soon
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge
                        className={
                          isEventPast(event.date)
                            ? "bg-gray-500/20 text-gray-300 border-gray-400/30"
                            : "bg-red-500/20 text-red-300 border-red-400/30"
                        }
                      >
                        {isEventPast(event.date) ? "Past Event" : event.spots}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className={`p-8 flex flex-col justify-between ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{event.title}</h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-blue-200">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{event.displayDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-200">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-200">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-blue-200 mb-6 leading-relaxed">{event.description}</p>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {event.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            <span className="text-blue-100 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking Section */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">{event.price}</span>
                        <span className="text-blue-300 text-sm ml-2">per person</span>
                      </div>
                      <Button
                        className={
                          isEventPast(event.date)
                            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                            : ('comingSoon' in event && event.comingSoon)
                              ? "bg-amber-600 text-white cursor-not-allowed"
                              : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                        }
                        disabled={isEventPast(event.date) || ('comingSoon' in event && event.comingSoon)}
                      >
                        {isEventPast(event.date)
                          ? "Sold Out"
                          : ('comingSoon' in event && event.comingSoon)
                            ? "Coming Soon"
                            : "Book Now"
                        }
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Join the Movement
              </h2>
              <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                More than events. We're building Dubai's most connected wellness community. Every gathering is a chance
                to grow, connect, and elevate together.
              </p>
              <div className="flex justify-start">
                <JoinCommunityButton />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/events/dj-mixing-session.png"
                    alt="DJ Session"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/events/reception-checkin.png"
                    alt="Event Check-in"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/events/outdoor-fitness-class.png"
                    alt="Fitness Class"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/events/wellness-workshop.png"
                    alt="Wellness Workshop"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  )
}
