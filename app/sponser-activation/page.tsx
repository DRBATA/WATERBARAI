"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Instagram,
  Newspaper,
  Users,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  Camera,
  Heart,
  Zap,
} from "lucide-react"
import ScrollingBackground from "@/components/scrolling-background"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const heroImages = [
  "/yacht-parties/morning-party-sunrise-dance.png",
  "/yacht-parties/dj-deck-dancing.jpeg",
  "/yacht-parties/ice-bath-social.jpeg",
  "/yacht-parties/group-meditation-skyline.jpeg",
  "/yacht-parties/drinks-toast-dj.jpeg",
]

const partnershipCategories = [
  {
    id: "brand-activations",
    title: "Brand Activations",
    tagline: "Authentic Integration, Premium Reach",
    description:
      "We don't just place your products - we weave them into transformative experiences. From Majlis Ale tastings at sunrise parties to Chaga sleep labs paired with yacht massages, every activation feels natural and elevates the consumer journey.",
    images: ["/drinks/majlis-ale.png", "/MajlisActivation.png"],
    icon: <Sparkles className="w-12 h-12 text-amber-300" />,
    examples: [
      "Majlis Ale - Premium tastings at morning parties",
      "Innermost Electrolytes - Integrated into fitness experiences",
      "Veda Tea - Conscious conversations & elixir lounges",
      "New Mind Chaga - Sleep labs with yacht wellness",
    ],
    bgColor: "bg-amber-900/10",
  },
  {
    id: "strategic-partnerships",
    title: "Strategic Partnerships",
    tagline: "Collaborative Ecosystem Building",
    description:
      "We partner with Dubai's premium wellness providers to create comprehensive experiences. From Rumi Yoga mats to Secret Ocean yachts, our network amplifies reach and creates authentic touchpoints for conscious consumers.",
    images: ["/secretocean.png", "/yacht-parties/group-meditation-skyline.jpeg"],
    icon: <Users className="w-12 h-12 text-cyan-300" />,
    examples: [
      "Rumi Yoga - Exclusive yoga mat partnerships",
      "Secret Ocean Yachts - Premium venue collaborations",
      "Ice House DIFC - Recovery experience integration",
      "F45 Functional Fitness - Community wellness events",
    ],
    bgColor: "bg-cyan-900/10",
  },
  {
    id: "media-recognition",
    title: "Media & Recognition",
    tagline: "Industry-Leading Innovation",
    description:
      "Featured in Khaleej Times as upcoming yacht party pioneers and highlighted in Timeout Dubai's 'Things to Do This Weekend'. With 30,000+ Instagram views and global recognition from Maison Perrier, we're not just following trends - we're creating them.",
    images: ["/khaleej1.png", "/timeoutdubaithingstodo.png"],
    icon: <Award className="w-12 h-12 text-purple-300" />,
    examples: [
      "Khaleej Times - Featured as upcoming yacht party pioneers",
      "Timeout Dubai - Selected for 'Things to Do This Weekend'",
      "First Morning Parties - Created new UAE wellness segment",
      "Maison Perrier - Global brand tagging & recognition",
    ],
    bgColor: "bg-purple-900/10",
  },
]

const sponsorshipHighlights = [
  {
    brand: "Maison Perrier",
    campaign: "Perrier Chic Campaign",
    result: "Global brand tagging & recognition",
    image: "/perrier.png",
    badge: "Global Partnership",
  },
  {
    brand: "DrinkDry",
    campaign: "First Partnership",
    result: "Pioneer collaboration in UAE",
    image: "/drinks/wellness-products.png",
    badge: "Industry First",
  },
  {
    brand: "New Mind Chaga",
    campaign: "Sleep Lab Innovation",
    result: "Yacht wellness integration",
    image: "/drinks/chaga-infographic.png",
    badge: "Wellness Innovation",
  },
  {
    brand: "Prana Spring",
    campaign: "Premium Gifting",
    result: "Elevated guest experience",
    image: "/prana.png",
    badge: "Luxury Partnership",
  },
]

export default function SponsorActivationPage() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-x-hidden">
      <ScrollingBackground />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center text-center overflow-hidden z-10">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src || "/placeholder.svg"}
            alt={`Water Bar Brand Activation ${index + 1}`}
            fill
            className={cn(
              "transition-opacity duration-1000 ease-in-out object-cover",
              index === currentHeroImage ? "opacity-100" : "opacity-0",
            )}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-black/50 to-transparent"></div>
        <div className="relative z-10 p-4">
          <Target className="w-20 h-20 md:w-24 md:h-24 mx-auto text-cyan-300 mb-4 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent block drop-shadow-2xl">
              Sponsor & Activation Hub
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed">
            Premium Brand Partnerships. Authentic Wellness Activations.
          </p>
          <p className="text-md md:text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            30,000+ engaged wellness consumers. Industry-first collaborations. Media recognition.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 text-lg shadow-xl shadow-amber-500/30 transform hover:scale-105 transition-transform"
            onClick={() => document.getElementById("partnership-opportunities")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Partner With Us
          </Button>
        </div>
      </section>

      {/* Partnership Categories */}
      {partnershipCategories.map((category, categoryIndex) => (
        <section key={category.id} className={cn("py-16 md:py-24 relative z-10 overflow-hidden", category.bgColor)}>
          <div className="container mx-auto px-4 relative">
            <div
              className={cn(
                "flex flex-col items-center gap-8 lg:gap-16",
                categoryIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              )}
            >
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-3">
                  {category.icon}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                    <p className="text-lg text-sky-300">{category.tagline}</p>
                  </div>
                </div>
                <p className="text-md md:text-lg text-blue-100 mb-6 leading-relaxed">{category.description}</p>
                <div className="grid grid-cols-1 gap-y-3 mb-8">
                  {category.examples.map((example) => (
                    <div key={example} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-blue-100">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                {category.images.map((imgSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={cn(
                      "relative rounded-lg overflow-hidden shadow-2xl aspect-video",
                      category.images.length > 1 && imgIndex === 0 ? "sm:aspect-[4/3]" : "sm:aspect-video",
                    )}
                  >
                    <Image
                      src={imgSrc || "/placeholder.svg"}
                      alt={`${category.title} - Image ${imgIndex + 1}`}
                      fill
                      className="transform hover:scale-105 transition-transform duration-500 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Sponsorship Success Stories */}
      <section className="py-16 md:py-24 bg-slate-800/50 backdrop-blur-md z-10 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TrendingUp className="w-16 h-16 mx-auto text-amber-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Partnership Success Stories
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From industry-first collaborations to global brand recognition, our partnerships create authentic value
              for premium wellness brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipHighlights.map((highlight) => (
              <Card
                key={highlight.brand}
                className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.brand}
                    fill
                    className="group-hover:scale-105 transition-transform duration-500 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/30">{highlight.badge}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{highlight.brand}</h3>
                  <p className="text-cyan-300 text-sm mb-3">{highlight.campaign}</p>
                  <p className="text-blue-200 text-sm">{highlight.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Brands */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 mx-auto text-purple-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What We Offer Premium Brands
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Authentic integration into Dubai's most discerning wellness community through experiential marketing that
              actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Instagram className="w-8 h-8 text-pink-400" />,
                title: "30,000+ Premium Audience",
                description:
                  "Engaged wellness consumers with high disposable income and authentic interest in premium products.",
              },
              {
                icon: <Camera className="w-8 h-8 text-cyan-400" />,
                title: "Content Creation & Amplification",
                description:
                  "Professional photo booths, branded content, and organic social media amplification across our network.",
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-400" />,
                title: "Experiential Integration",
                description:
                  "Your products become part of transformative experiences - not just placed, but meaningfully integrated.",
              },
              {
                icon: <Users className="w-8 h-8 text-emerald-400" />,
                title: "Community Access",
                description:
                  "Direct access to Dubai's most connected wellness community through authentic touchpoints.",
              },
              {
                icon: <Newspaper className="w-8 h-8 text-blue-400" />,
                title: "Media Recognition",
                description:
                  "Featured coverage and industry recognition that elevates your brand's wellness credentials.",
              },
              {
                icon: <Target className="w-8 h-8 text-purple-400" />,
                title: "Bespoke Activations",
                description: "Custom-designed experiences that align with your brand values and wellness positioning.",
              },
            ].map((offering) => (
              <Card
                key={offering.title}
                className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{offering.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{offering.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Contact Section */}
      <section
        id="partnership-opportunities"
        className="py-16 md:py-24 z-10 relative bg-gradient-to-b from-blue-950 to-slate-900"
      >
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-slate-800/70 border-cyan-500/40 backdrop-blur-lg p-6 md:p-10 shadow-2xl">
            <CardHeader className="text-center p-0 mb-6 md:mb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to Partner With Dubai's Premier Wellness Community?
              </CardTitle>
              <CardDescription className="text-lg text-blue-100">
                Get in touch via Instagram to discuss bespoke brand activations, DJ partnerships, and unique wellness
                collaborations.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 text-center">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-lg border border-purple-500/30">
                  <Instagram className="w-12 h-12 mx-auto text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Brand Partnerships</h3>
                  <p className="text-purple-200 mb-4">Luxury wellness activations and authentic product integration</p>
                  <Button
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                    onClick={() => window.open("https://www.instagram.com/thewaterbarae/", "_blank")}
                  >
                    DM for Partnerships
                  </Button>
                </div>
                <div className="p-6 bg-gradient-to-br from-cyan-900/50 to-blue-900/30 rounded-lg border border-cyan-500/30">
                  <Users className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">DJ & Talent Booking</h3>
                  <p className="text-cyan-200 mb-4">Curated morning party DJs and wellness experience creators</p>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    onClick={() => window.open("https://www.instagram.com/thewaterbarae/", "_blank")}
                  >
                    Book Talent
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-blue-200 mb-6">
                  <strong>30,000+ engaged followers</strong> • <strong>Industry-first collaborations</strong> •{" "}
                  <strong>Media recognition</strong>
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-4 text-lg shadow-xl"
                  onClick={() => window.open("https://www.instagram.com/thewaterbarae/", "_blank")}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @thewaterbarae
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
