"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function BookNowButton() {
  return (
    <Button
      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
      onClick={() => window.open("https://www.instagram.com/thewaterbarae/", "_blank")}
    >
      <Instagram className="w-4 h-4 mr-2" />
      Book Now
    </Button>
  )
}
