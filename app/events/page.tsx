import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Music, Sunrise, Zap, Droplets, Star, Heart } from "lucide-react"
import ScrollingBackground from "@/components/scrolling-background"
import NeonTriangle from "@/components/neon-triangle"

const upcomingEvents = [
  {
    id: "sunrise-rave-marina",
    title: "Sunrise Rave: Marina Edition",
    date: "Saturday, June 7th",
    time: "5:30 AM - 9:00 AM",
    location: "Dubai Marina Rooftop",
    category: "Morning Rave",
    image: "/events/rooftop-dj-skyline.png",
    description:
      "Start your weekend with Dubai's most exclusive morning party. Live DJ sets, wellness drinks, and the most spectacular sunrise views in the city.",
    highlights: ["Live DJ Performance", "Sunrise Yoga Flow", "Premium Mocktails", "City Skyline Views"],
    price: "AED 150",
    spots: "12 spots left",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  },
  {
    id: "wellness-workshop-breathwork",
    title: "Breathwork & Sound Healing",
    date: "Wednesday, June 11th",
    time: "7:00 AM - 8:30 AM",
    location: "The Water Bar Studio",
    category: "Wellness Workshop",
    image: "/events/wellness-workshop.png",
    description:
      "Transform your morning with guided breathwork and sound healing. A powerful combination to reset your nervous system and elevate your day.",
    highlights: ["Guided Breathwork", "Sound Bath Experience", "Sacred Chaga Ceremony", "Community Connection"],
    price: "AED 95",
    spots: "8 spots left",
    categoryColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  },
  {
    id: "rooftop-social-fitness",
    title: "Social Fitness & Brunch",
    date: "Sunday, June 15th",
    time: "8:00 AM - 11:00 AM",
    location: "DIFC Rooftop Terrace",
    category: "Social Wellness",
    image: "/events/outdoor-fitness-class.png",
    description:
      "Community workout followed by our signature wellness brunch. Make new connections while strengthening your body and mind.",
    highlights: ["Group HIIT Session", "Wellness Brunch", "Networking Time", "Matcha Latte Bar"],
    price: "AED 185",
    spots: "5 spots left",
    categoryColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
  },
]

const eventCategories = [
  {
    name: "Morning Raves",
    icon: <Music className="w-6 h-6" />,
    description: "Dubai's first luxury morning parties",
    color: "text-amber-300",
    count: "3 upcoming",
  },
  {
    name: "Wellness Workshops",
    icon: <Heart className="w-6 h-6" />,
    description: "Breathwork, meditation, and healing",
    color: "text-emerald-300",
    count: "5 upcoming",
  },
  {
    name: "Social Fitness",
    icon: <Zap className="w-6 h-6" />,
    description: "Community workouts and connection",
    color: "text-cyan-300",
    count: "4 upcoming",
  },
  {
    name: "Private Events",
    icon: <Users className="w-6 h-6" />,
    description: "Bespoke experiences for your group",
    color: "text-purple-300",
    count: "Book now",
  },
]

export default function EventsPage() {
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
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                EVENTS CALENDAR
              </span>
              <div className="absolute inset-0 text-cyan-400 opacity-20 blur-sm">EVENTS CALENDAR</div>
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
            Morning Raves, Wellness Workshops & Social Experiences
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Join Dubai's most vibrant wellness community. Every sunrise, a new adventure.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((category) => (
              <Card
                key={category.name}
                className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className={`mb-4 ${category.color}`}>{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-blue-200 text-sm mb-3">{category.description}</p>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">{category.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
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
                      fill
                      sizes="100%"
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className={event.categoryColor}>{event.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-red-500/20 text-red-300 border-red-400/30">{event.spots}</Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className={`p-8 flex flex-col justify-between ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{event.title}</h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-blue-200">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{event.date}</span>
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
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3">
                        Book Now
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg shadow-lg shadow-cyan-500/25"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  View Full Calendar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-8 py-4 text-lg"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/events/dj-mixing-session.png"
                    alt="DJ Session"
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/events/reception-checkin.png"
                    alt="Event Check-in"
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/events/outdoor-fitness-class.png"
                    alt="Fitness Class"
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/events/wellness-workshop.png"
                    alt="Wellness Workshop"
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
