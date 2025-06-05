"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Droplets,
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Dumbbell,
  Sun,
  Brain,
  Coffee,
  CheckCircle,
  Info,
  Receipt,
  Zap,
} from "lucide-react"
import ScrollingBackground from "@/components/scrolling-background"
import NeonTriangle from "@/components/neon-triangle"

// Wellness situations and their recommendations
const wellnessSituations = [
  {
    id: "heavy-workout",
    title: "Heavy Workout Recovery",
    icon: <Dumbbell className="w-6 h-6" />,
    description: "Post-workout recovery and muscle rebuilding",
    color: "from-red-500 to-orange-500",
    borderColor: "border-red-500/30",
    recommendations: {
      primary: ["chaga-new-mind"],
      secondary: ["copper-bottle"],
      tips: [
        "Aim for 4 Chaga/New Mind per week for adaptogens and rebuilding amino acids/peptides",
        "Ensure extra protein in diet (8ml fluid per gram of protein) to avoid puffiness",
        "Use reusable copper water bottles for all-day fluid rehydration",
        "Consider adding protein supplements to your diet (not sold here)",
      ],
    },
  },
  {
    id: "heat-exposure",
    title: "Sitting in Heat / Dehydration",
    icon: <Sun className="w-6 h-6" />,
    description: "Combat heat stress and replace lost electrolytes",
    color: "from-amber-500 to-yellow-500",
    borderColor: "border-amber-500/30",
    recommendations: {
      primary: ["innermost-electrolytes", "chaga-new-mind", "prana-spring-bottle"],
      secondary: ["perrier-magnetic"],
      tips: [
        "1-3 sachets of Innermost (200mg sodium) to replace hypotonic sweat loss",
        "3 Chaga/New Mind weekly for cardiovascular rebuilding (just one today)",
        "Prana Spring bottles can have electrolytes mixed in - buy Innermost sachets separately",
        "Add Perrier Magnetic with 2.4g sugar (1-2 bottles) to aid absorption",
        "For optimal rehydration, aim for a sodium:potassium ratio of 3:1 normally",
        "If heavily sweating, shift to a 1:2 ratio (more sodium) to prevent electrolyte imbalance",
        "Supplement with bananas and greens to truly rehydrate inside cells",
      ],
    },
  },
  {
    id: "general-wellness",
    title: "General Wellness & Focus",
    icon: <Brain className="w-6 h-6" />,
    description: "Balance and mental clarity for daily performance",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    recommendations: {
      primary: ["chaga-new-mind", "prana-spring-bottle", "innermost-electrolytes"],
      secondary: ["perrier-magnetic"],
      tips: [
        "Chaga x New Mind for balance and rebuilding",
        "Prana Spring bottle with Innermost sachet for optimal mineral balance",
        "Add Perrier Magnetic for a little carb and mineral boost",
        "Perfect for maintaining daily wellness and mental clarity",
      ],
    },
  },
  {
    id: "gut-health",
    title: "Gut Health",
    icon: <Coffee className="w-6 h-6" />,
    description: "Digestive health and microbiome support",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-500/30",
    recommendations: {
      primary: ["kombucha-selection"],
      secondary: ["copper-bottle"],
      tips: [
        "Premium Kombucha Selection for gut health and natural probiotics",
        "Support digestive health with fermented beverages rich in beneficial bacteria",
        "Copper bottles provide all-day hydration with free water refills",
        "Prestigious take-home copper bottles for ongoing wellness",
      ],
    },
  },
]

// All available drinks with detailed info
const allDrinks = {
  "chaga-new-mind": {
    name: "Sacred Chaga Brew (New Mind)",
    image: "/drinks/chaga-infographic.png",
    price: 45,
    category: "Adaptogen",
    benefits: ["Immune Support", "Mental Clarity", "Stress Relief", "Cardiovascular Health"],
    description: "Wild-harvested Chaga mushrooms with bioactive compounds for immune support and mental clarity.",
    dosage: "1 daily, aim for 4/week for optimal benefits",
  },
  "innermost-electrolytes": {
    name: "Innermost Electrolyte Sachets",
    image: "/drinks/wellness-products.png",
    price: 13,
    category: "Hydration",
    benefits: ["Electrolyte Balance", "Sweat Replacement", "Rapid Hydration", "Heat Recovery"],
    description:
      "200mg sodium sachets designed to replace hypotonic sweat loss. Mix with Prana Spring bottles or water.",
    dosage: "1-3 sachets per day during heat exposure",
  },
  "prana-spring-bottle": {
    name: "Prana Spring Water Bottle",
    image: "/drinks/prana.png",
    price: 35,
    category: "Hydration",
    benefits: ["Premium Water", "Mineral Rich", "pH Balance", "Electrolyte Compatible"],
    description: "Premium spring water bottles that can have electrolytes mixed in. Buy Innermost sachets separately.",
    dosage: "1-3 bottles as needed",
  },
  "perrier-magnetic": {
    name: "Perrier Magnetic (2.4g Sugar)",
    image: "/neon-blue-cocktail.png",
    price: 25,
    category: "Non-Alcoholic",
    benefits: ["Absorption Aid", "Natural Carbonation", "Sugar Enhancement", "Digestive Support"],
    description: "Perrier with precisely 2.4g sugar to enhance nutrient absorption.",
    dosage: "1-2 bottles to aid absorption",
  },
  "perrier-chic": {
    name: "Perrier Chic",
    image: "/neon-blue-cocktail.png",
    price: 25,
    category: "Non-Alcoholic",
    benefits: ["Premium Experience", "Natural Carbonation", "Sophisticated Flavor", "Zero Sugar"],
    description: "Elegant, zero-sugar sparkling water with a sophisticated profile.",
    dosage: "As desired",
  },
  "copper-bottle": {
    name: "Reusable Copper Water Bottle",
    image: "/drinks/copper.png",
    price: 120,
    category: "Equipment",
    benefits: ["All-Day Hydration", "Antimicrobial", "Copper Benefits", "Sustainable"],
    description:
      "Prestigious copper bottle for all-day hydration with free water refills at all Water Bar events. Water only - no electrolytes.",
    dosage: "Use throughout the day",
  },
  "corona-zero": {
    name: "Corona 0% Alcohol-Free",
    image: "/drinks/majlis-ale.png",
    price: 35,
    category: "Non-Alcoholic",
    benefits: ["Calm Flavor", "Social Confidence", "No Alcohol", "Sophisticated"],
    description: "Crisp, clean taste without alcohol for a calmer drinking experience.",
    dosage: "As desired",
  },
  "majlis-ale": {
    name: "Majlis Ale Premium",
    image: "/drinks/majlis-ale.png",
    price: 42,
    category: "Non-Alcoholic",
    benefits: ["Complex Flavors", "Craft Quality", "Alcohol-Free", "Premium Experience"],
    description: "Premium non-alcoholic ale with complex malt flavors and sophisticated finish.",
    dosage: "As desired",
  },
  "matcha-drink": {
    name: "Ceremonial Matcha Drink",
    image: "/drinks/matcha-latte.png",
    price: 42,
    category: "Focus",
    benefits: ["Sustained Energy", "Mental Focus", "L-Theanine", "Antioxidants"],
    description: "Ceremonial-grade matcha for calm, focused energy without jitters.",
    dosage: "1-2 daily for optimal focus",
  },
  "ceremonial-tea": {
    name: "Sacred Ceremonial Tea",
    image: "/drinks/chaga-infographic.png",
    price: 38,
    category: "Calm",
    benefits: ["Relaxation", "Mindfulness", "Antioxidants", "Ritual"],
    description: "Traditional ceremonial tea blend for mindful moments and relaxation.",
    dosage: "As part of mindful practice",
  },
  "kombucha-selection": {
    name: "Premium Kombucha Selection",
    image: "/drinks/kombucha-selection.png",
    price: 28,
    category: "Gut Health",
    benefits: ["Gut Health", "Probiotics", "Digestive Support", "Natural Energy"],
    description: "Curated selection of premium kombucha for gut health and natural energy.",
    dosage: "1-2 bottles daily",
  },
  "wellness-shots": {
    name: "Functional Wellness Shots",
    image: "/drinks/wellness-products.png",
    price: 22,
    category: "General Wellness",
    benefits: ["Concentrated Nutrients", "Immune Boost", "Quick Absorption", "Targeted Benefits"],
    description: "Concentrated wellness shots with specific functional benefits - immunity, energy, focus.",
    dosage: "1 shot as needed",
  },
}

export default function InteractiveDrinksMenu() {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null)
  const [cart, setCart] = useState<Record<string, number>>({})
  const [showEducation, setShowEducation] = useState<string | null>(null)
  const [showAllDrinks, setShowAllDrinks] = useState(true)

  const addToCart = (drinkId: string) => {
    setCart((prev) => ({
      ...prev,
      [drinkId]: (prev[drinkId] || 0) + 1,
    }))
  }

  const removeFromCart = (drinkId: string) => {
    setCart((prev) => ({
      ...prev,
      [drinkId]: Math.max(0, (prev[drinkId] || 0) - 1),
    }))
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [drinkId, quantity]) => {
      return total + (allDrinks[drinkId as keyof typeof allDrinks]?.price || 0) * quantity
    }, 0)
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  const currentSituation = selectedSituation ? wellnessSituations.find((s) => s.id === selectedSituation) : null

  // Get non-alcoholic beverages
  const nonAlcoholicDrinks = Object.entries(allDrinks).filter(([_, drink]) => drink.category === "Non-Alcoholic")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <ScrollingBackground />

      {/* Promotional Discount Banner */}
      <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap">
          <Zap className="w-5 h-5 mr-2 animate-pulse text-yellow-300" />
          <p className="text-center font-medium">
            <span className="font-bold">HURRY!</span> ENTER CODE <span className="font-bold">THEWATERBAR</span> for DISCOUNT on{' '}
            <a href="https://www.newmind.ae/collections/single-products/chaga" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-200">PRODUCTS</a>
            {' '}&{' '}
            <a href="https://www.newmind.ae/collections/bundles" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-200">BUNDLES</a>
            {' '}FOR CHAGA SUBSCRIPTIONS or ONE OFF PURCHASES
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 animate-pulse delay-300">
            <NeonTriangle size={300} />
          </div>
          <div className="absolute -bottom-32 -left-32 animate-pulse delay-700">
            <NeonTriangle size={250} />
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src="/drinks/water-bar-truck.png"
            alt="The Water Bar Interactive Menu"
            fill
            className="opacity-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              INTERACTIVE MENU
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed">
            Personalized Wellness Recommendations
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Tell us what you need, get expert recommendations, and order directly at this event
          </p>

          {/* Cart Summary */}
          {getCartItemCount() > 0 && (
            <div className="fixed top-4 right-4 z-50">
              <Card className="bg-gradient-to-br from-cyan-600/90 to-blue-600/80 border-cyan-400/50 backdrop-blur-md">
                <CardContent className="p-4 flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">
                    {getCartItemCount()} items • AED {getCartTotal()}
                  </span>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Hydration Philosophy Section */}
      <section className="py-16 px-4 relative z-10 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border border-cyan-500/30 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              The Science of Hydration, Reimagined
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-blue-100 mb-4">
                This isn't just a drinks menu—it's a personalized wellness consultation. We've created the most
                sophisticated hydration experience by combining cutting-edge science with practical recommendations
                tailored to your body's actual needs.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Precision Hydration
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Our system provides exact sodium:potassium ratios, adapts to your activity level, and recommends
                    specific product combinations based on your body's current state—whether recovering from exercise,
                    combating heat, or optimizing daily wellness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Functional Benefits
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Beyond basic hydration, our drinks deliver targeted functional benefits—from immune support and
                    mental clarity to gut health and recovery. Each product is carefully selected for maximum
                    bioavailability and effectiveness.
                  </p>
                </div>
              </div>
              <p className="text-blue-100 mt-4">
                Select your current situation below to receive expert recommendations, or browse our full collection of
                functional drinks to create your perfect hydration strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Situation Selector */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What's Your Wellness Goal Today?
          </h2>
          <p className="text-lg text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Select your situation to get personalized drink recommendations with expert wellness tips
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessSituations.map((situation) => (
              <Card
                key={situation.id}
                className={`cursor-pointer transition-all duration-300 group backdrop-blur-sm ${
                  selectedSituation === situation.id
                    ? `bg-gradient-to-br ${situation.color}/30 ${situation.borderColor} scale-105 shadow-xl`
                    : "bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/30 hover:border-cyan-400/50"
                }`}
                onClick={() => setSelectedSituation(selectedSituation === situation.id ? null : situation.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-cyan-300">{situation.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{situation.title}</h3>
                  <p className="text-slate-900 font-medium text-sm mb-3">{situation.description}</p>
                  <Badge
                    className={
                      selectedSituation === situation.id
                        ? "bg-cyan-400/30 text-cyan-200 border-cyan-300/50"
                        : "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
                    }
                  >
                    {selectedSituation === situation.id ? "Selected" : "Select"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Browse All Drinks Button */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-8 py-4"
              onClick={() => setShowAllDrinks(!showAllDrinks)}
            >
              <Zap className="w-5 h-5 mr-2" />
              {showAllDrinks ? "Hide" : "Browse"} All Non-Alcoholic Beverages
            </Button>
          </div>
        </div>
      </section>

      {/* Non-Alcoholic Beverages Section */}
      {showAllDrinks && (
        <section className="py-16 px-4 relative z-10 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Non-Alcoholic Beverages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonAlcoholicDrinks.map(([drinkId, drink]) => {
                const quantity = cart[drinkId] || 0

                return (
                  <Card
                    key={drinkId}
                    className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={drink.image || "/placeholder.svg"}
                        alt={drink.name}
                        fill
                        className="group-hover:scale-105 transition-transform duration-500 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                          {drink.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">
                          AED {drink.price}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{drink.name}</h3>
                      <p className="text-blue-200 text-sm mb-4 leading-relaxed">{drink.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {drink.benefits.slice(0, 4).map((benefit) => (
                          <div key={benefit} className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400 flex-shrink-0" />
                            <span className="text-blue-100 text-xs">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-xs text-cyan-300 mb-4 bg-cyan-900/30 rounded p-2">
                        <strong>Dosage:</strong> {drink.dosage}
                      </div>

                      <div className="flex items-center justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10"
                          onClick={() => setShowEducation(showEducation === drinkId ? null : drinkId)}
                        >
                          <Info className="w-4 h-4 mr-1" />
                          Learn More
                        </Button>

                        <div className="flex items-center gap-2">
                          {quantity > 0 && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-8 h-8 p-0 border-red-400/50 text-red-300 hover:bg-red-400/10"
                                onClick={() => removeFromCart(drinkId)}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="text-white font-semibold w-8 text-center">{quantity}</span>
                            </>
                          )}
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                            onClick={() => addToCart(drinkId)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Education Dropdown */}
                      {showEducation === drinkId && (
                        <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-cyan-500/30">
                          <h4 className="text-cyan-300 font-semibold mb-2">Benefits & Science</h4>
                          <div className="space-y-2">
                            {drink.benefits.map((benefit) => (
                              <div key={benefit} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                <span className="text-blue-200 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Personalized Recommendations */}
      {currentSituation && (
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <Card
              className={`bg-gradient-to-br ${currentSituation.color}/20 ${currentSituation.borderColor} backdrop-blur-sm mb-8`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  {currentSituation.icon}
                  Recommendations for {currentSituation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Wellness Tips
                    </h4>
                    <ul className="space-y-3">
                      {currentSituation.recommendations.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-900 font-medium">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-4">Recommended Products</h4>
                    <div className="space-y-2">
                      {[...currentSituation.recommendations.primary, ...currentSituation.recommendations.secondary].map(
                        (drinkId) => {
                          const drink = allDrinks[drinkId as keyof typeof allDrinks]
                          if (!drink) return null
                          return (
                            <div
                              key={drinkId}
                              className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3"
                            >
                              <span className="text-white font-medium">{drink.name}</span>
                              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">
                                AED {drink.price}
                              </Badge>
                            </div>
                          )
                        },
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Drinks Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...currentSituation.recommendations.primary, ...currentSituation.recommendations.secondary].map(
                (drinkId) => {
                  const drink = allDrinks[drinkId as keyof typeof allDrinks]
                  if (!drink) return null

                  const isInCart = cart[drinkId] > 0
                  const quantity = cart[drinkId] || 0

                  return (
                    <Card
                      key={drinkId}
                      className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
                    >
                      <div className="relative h-48">
                        <Image
                          src={drink.image || "/placeholder.svg"}
                          alt={drink.name}
                          fill
                          className="group-hover:scale-105 transition-transform duration-500 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">{drink.category}</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">
                            AED {drink.price}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{drink.name}</h3>
                        <p className="text-blue-200 text-sm mb-4 leading-relaxed">{drink.description}</p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {drink.benefits.slice(0, 4).map((benefit) => (
                            <div key={benefit} className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-amber-400 flex-shrink-0" />
                              <span className="text-blue-100 text-xs">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="text-xs text-cyan-300 mb-4 bg-cyan-900/30 rounded p-2">
                          <strong>Dosage:</strong> {drink.dosage}
                        </div>

                        <div className="flex items-center justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10"
                            onClick={() => setShowEducation(showEducation === drinkId ? null : drinkId)}
                          >
                            <Info className="w-4 h-4 mr-1" />
                            Learn More
                          </Button>

                          <div className="flex items-center gap-2">
                            {quantity > 0 && (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="w-8 h-8 p-0 border-red-400/50 text-red-300 hover:bg-red-400/10"
                                  onClick={() => removeFromCart(drinkId)}
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="text-white font-semibold w-8 text-center">{quantity}</span>
                              </>
                            )}
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                              onClick={() => addToCart(drinkId)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Education Dropdown */}
                        {showEducation === drinkId && (
                          <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-cyan-500/30">
                            <h4 className="text-cyan-300 font-semibold mb-2">Benefits & Science</h4>
                            <div className="space-y-2">
                              {drink.benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                                  <span className="text-blue-200 text-sm">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                },
              )}
            </div>
          </div>
        </section>
      )}

      {/* Cart Summary & Checkout */}
      {getCartItemCount() > 0 && (
        <section className="py-16 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/40 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-cyan-400" />
                  Your Wellness Selection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {Object.entries(cart)
                    .filter(([_, quantity]) => quantity > 0)
                    .map(([drinkId, quantity]) => {
                      const drink = allDrinks[drinkId as keyof typeof allDrinks]
                      if (!drink) return null

                      return (
                        <div key={drinkId} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-4">
                          <div>
                            <h4 className="text-white font-semibold">{drink.name}</h4>
                            <p className="text-blue-200 text-sm">
                              {drink.category} • {drink.dosage}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-cyan-300 font-semibold">
                              {quantity} × AED {drink.price} = AED {quantity * drink.price}
                            </span>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-8 h-8 p-0 border-red-400/50 text-red-300 hover:bg-red-400/10"
                                onClick={() => removeFromCart(drinkId)}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                className="w-8 h-8 p-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                                onClick={() => addToCart(drinkId)}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                </div>

                <div className="border-t border-cyan-500/30 pt-4">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xl font-bold text-white">Total: AED {getCartTotal()}</span>
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-lg px-4 py-2">
                      {getCartItemCount()} items
                    </Badge>
                  </div>

                  <div className="text-center">
                    <p className="text-blue-200 mb-4">
                      Show this selection to our bartender for payment and preparation
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg shadow-xl"
                      >
                        <Receipt className="w-5 h-5 mr-2" />
                        Show to Bartender
                      </Button>
                      <div className="bg-slate-800/70 rounded-lg px-4 py-2 flex items-center">
                        <span className="text-amber-300 text-sm">Home delivery coming soon!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}


    </div>
  )
}
