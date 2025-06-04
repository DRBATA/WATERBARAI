import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Leaf, Sparkles, Droplets, Heart, Waves, Star } from "lucide-react"
import ScrollingBackground from "@/components/scrolling-background"
import NeonTriangle from "@/components/neon-triangle"

const drinkCategories = [
  {
    id: "wellness-elixirs",
    name: "Wellness Elixirs & Adaptogens",
    icon: <Zap className="w-8 h-8 text-cyan-300" />,
    description: "Harness the power of nature with our potent, health-boosting concoctions.",
    bgGradient: "from-cyan-900/70 to-blue-900/50",
    borderColor: "border-cyan-500/30",
    items: [
      {
        name: "Sacred Chaga Brew",
        image: "/drinks/chaga-infographic.png",
        tagline: "Ancient Wisdom, Modern Vitality",
        details:
          "A deeply nourishing brew made from wild-harvested Chaga mushrooms, rich in beta-glucans and antioxidants. Enhanced with our proprietary bioactive compound blend for immune support and mental clarity.",
        benefits: ["Immune Support", "Mental Clarity", "Antioxidant Rich", "Stress Relief"],
        price: "AED 45",
      },
      {
        name: "Ceremonial Matcha Latte",
        image: "/drinks/matcha-latte.png",
        tagline: "Focused Energy, Elevated Mind",
        details:
          "Premium ceremonial-grade matcha whisked to perfection with oat milk and a hint of vanilla. L-theanine provides calm, focused energy without the jitters of coffee.",
        benefits: ["Sustained Energy", "Mental Focus", "Antioxidant Rich", "Metabolism Boost"],
        price: "AED 42",
      },
    ],
  },
  {
    id: "premium-mocktails",
    name: "Premium Zero-Proof Cocktails",
    icon: <Sparkles className="w-8 h-8 text-amber-300" />,
    description: "Sophisticated libations without the alcohol. All the complexity, none of the compromise.",
    bgGradient: "from-amber-900/70 to-orange-900/50",
    borderColor: "border-amber-500/30",
    items: [
      {
        name: "Majlis Original",
        image: "/drinks/majlis-ale.png",
        tagline: "Refined. Sophisticated. Alcohol-Free.",
        details:
          "A premium non-alcoholic ale crafted with traditional brewing methods. Complex malt flavors with a crisp, clean finish that rivals any craft beer.",
        benefits: ["Zero Alcohol", "Complex Flavors", "Social Confidence", "Craft Quality"],
        price: "AED 42",
      },
      {
        name: "Neon Nights Mocktail",
        image: "/neon-blue-cocktail.png",
        tagline: "Electric Energy, Zero Proof",
        details:
          "Blue spirulina, coconut water, lime, and adaptogenic herbs create this Instagram-worthy elixir. Naturally energizing without the crash.",
        benefits: ["Natural Energy", "Electrolyte Rich", "Photogenic", "Sustained Focus"],
        price: "AED 48",
      },
    ],
  },
  {
    id: "functional-beverages",
    name: "Functional Wellness Drinks",
    icon: <Heart className="w-8 h-8 text-emerald-300" />,
    description: "Every sip serves a purpose. Hydration meets intention.",
    bgGradient: "from-emerald-900/70 to-teal-900/50",
    borderColor: "border-emerald-500/30",
    items: [
      {
        name: "Innermost Wellness Collection",
        image: "/drinks/wellness-products.png",
        tagline: "Functional Nutrition, Elevated",
        details:
          "Curated selection of premium functional beverages including kombucha, adaptogenic waters, and nootropic blends. Each bottle designed for specific wellness goals.",
        benefits: ["Gut Health", "Cognitive Function", "Stress Management", "Recovery Support"],
        price: "AED 35-55",
      },
      {
        name: "Hydration Station Selection",
        image: "/drinks/kombucha-selection.png",
        tagline: "Pure. Clean. Purposeful.",
        details:
          "Premium selection of enhanced waters, electrolyte blends, and probiotic drinks. From alkaline spring water to fermented wellness shots.",
        benefits: ["Optimal Hydration", "Probiotic Support", "pH Balance", "Mineral Rich"],
        price: "AED 25-40",
      },
    ],
  },
]

export default function DrinksMenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <ScrollingBackground />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden z-10">
        {/* Animated Neon Triangles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 animate-pulse delay-300">
            <NeonTriangle size={300} />
          </div>
          <div className="absolute -bottom-32 -left-32 animate-pulse delay-700">
            <NeonTriangle size={250} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/drinks/water-bar-truck.png"
            alt="The Water Bar Mobile Setup"
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                DRINKS MENU
              </span>
              <div className="absolute inset-0 text-cyan-400 opacity-20 blur-sm">DRINKS MENU</div>
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              {[Droplets, Leaf, Sparkles].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-8 h-8 text-cyan-400 animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Wellness Elixirs, Zero-Proof Cocktails & Functional Beverages
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Every drink tells a story. Every sip serves a purpose. Welcome to hydration, reimagined.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      {drinkCategories.map((category, categoryIndex) => (
        <section key={category.id} className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-4 mb-4">
                {category.icon}
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {category.name}
                </h2>
              </div>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">{category.description}</p>
            </div>

            {/* Category Items */}
            <div className="grid lg:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={item.name}
                  className={`bg-gradient-to-br ${category.bgGradient} ${category.borderColor} hover:border-opacity-70 transition-all duration-300 group backdrop-blur-sm overflow-hidden`}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="100%"
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">{item.price}</Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-cyan-300 italic mb-4">{item.tagline}</p>
                        <p className="text-blue-200 text-sm leading-relaxed mb-6">{item.details}</p>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                          {item.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                              <span className="text-blue-100 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="w-full border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10"
                        >
                          Add to Order
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Craft Your Perfect Order
          </h2>
          <p className="text-xl text-purple-200 mb-8 leading-relaxed">
            Mix and match from our curated selection. Create your own wellness journey, one sip at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg shadow-lg shadow-cyan-500/25"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Order for Pickup
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-8 py-4 text-lg"
            >
              <Waves className="w-5 h-5 mr-2" />
              Book a Tasting
            </Button>
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
