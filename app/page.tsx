import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Droplets, Sunrise, Waves, SailboatIcon as Yacht, Zap, Camera, Users, Sparkles } from "lucide-react"
import NeonTriangle from "@/components/neon-triangle"
import ScrollingBackground from "@/components/scrolling-background"

export default function WaterBarLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Scrolling Background */}
      <ScrollingBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        {/* Large Animated Neon Triangles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-32 -left-32 animate-pulse">
            <NeonTriangle size={400} />
          </div>
          <div className="absolute -bottom-40 -right-40 animate-pulse delay-1000">
            <NeonTriangle size={350} />
          </div>
          <div className="absolute top-1/3 -left-20 animate-pulse delay-500">
            <NeonTriangle size={300} />
          </div>
        </div>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-slate-900/40 to-blue-900/60 z-5" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col justify-center h-full">
          {/* On mobile, add extra margin-top to move logo higher */}
          <div className="mb-8 sm:mt-0 mt-[-25vh]">
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-3xl">
                <Image 
                  src="/waterbarlogonew.png" 
                  alt="The Water Bar Logo" 
                  width={1000} 
                  height={1000}
                  priority
                  className="w-full h-auto drop-shadow-2xl animate-pulse" 
                  style={{ animationDuration: '4s' }}
                  unoptimized
                />
                {/* Add a subtle glow effect behind the logo */}
                <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-3xl -z-10 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg shadow-lg shadow-cyan-500/25 border border-cyan-400/30"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Experience the Party
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400/50 text-amber-300 hover:bg-amber-400/10 px-8 py-4 text-lg"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Discover the Drinks
            </Button>
          </div>
        </div>
      </section>

      {/* Three Worlds Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Three Worlds of Wonder
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hydration as Celebration */}
            <Card className="bg-gradient-to-br from-blue-900/70 to-cyan-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/water-bar-hydration-bar-scene.png"
                  alt="Hydration Bar Scene"
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative -mt-12">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-4 border-slate-800">
                    <Waves className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">Hydration</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hydration as Celebration</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  From zero-proof cocktails to sacred Chaga, every sip nourishes.
                </p>
                <Button variant="outline" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10">
                  See the Menu
                </Button>
              </CardContent>
            </Card>

            {/* The Morning Party */}
            <Card className="bg-gradient-to-br from-amber-900/70 to-orange-900/50 border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/water-bar-stylized-group-dusk.png"
                  alt="Morning Party Scene"
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative -mt-12">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-4 border-slate-800">
                    <Sunrise className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/30">Morning Rave</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Morning Party</h3>
                <p className="text-amber-200 mb-6 leading-relaxed">
                  Dubai's first luxury morning rave. Clean, loud, alive.
                </p>
                <Button variant="outline" className="border-amber-400/50 text-amber-300 hover:bg-amber-400/10">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Events Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Wellness That Doesn't Preach */}
            <Card className="bg-gradient-to-br from-emerald-900/70 to-teal-900/50 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/water-bar-lounge-orange-wall.png"
                  alt="Wellness Lounge Scene"
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative -mt-12">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-4 border-slate-800">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">Wellness</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Wellness That Doesn't Preach</h3>
                <p className="text-emerald-200 mb-6 leading-relaxed">
                  Massage. Meditation. Muscle Recovery. But always fun first.
                </p>
                <Button variant="outline" className="border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10">
                  <Yacht className="w-4 h-4 mr-2" />
                  Book a Private Yacht
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Memory Capture Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            We Remember For You
          </h2>
          <Card className="bg-gradient-to-br from-purple-900/70 to-pink-900/50 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src="/water-bar-man-with-pouch.png"
                  alt="Memory Capture Example"
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                  className="opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent md:bg-gradient-to-t md:from-purple-900/50 md:to-transparent"></div>
              </div>
              <CardContent className="p-8 md:p-12 text-center md:text-left relative">
                <Camera className="w-16 h-16 mx-auto md:mx-0 text-purple-400 mb-4" />
                <p className="text-xl text-purple-200 leading-relaxed">
                  Your vibe. Your favorite drink. Your sunrise moment.
                </p>
                <p className="text-purple-300 mt-4 mb-6">Upload your photo, describe your morning, save your tape.</p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-lg shadow-purple-500/25"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Make a Memory
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Brand Partnership Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                Plug & Play for Brands
              </h2>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                We activate premium wellness brands through unforgettable real-world moments. Bar takeovers, curated
                mornings, beautiful drink storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Work With Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-400/50 text-amber-300 hover:bg-amber-400/10 px-6 py-3"
                >
                  Download Brand Deck
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
              <Image
                src="/water-bar-modern-hydration-interior.png"
                alt="Brand Activation Space"
                fill
                sizes="100%"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent flex items-end p-8">
                <p className="text-2xl font-bold text-white drop-shadow-lg">Premium Brand Activations</p>
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
