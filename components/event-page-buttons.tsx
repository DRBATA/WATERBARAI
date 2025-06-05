"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"

export function ViewFullCalendarButton() {
  const handleClick = () => {
    // Scroll to the top of the events section since we're already on the events page
    document.getElementById("events-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      size="lg"
      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg shadow-lg shadow-cyan-500/25"
      onClick={handleClick}
    >
      <Calendar className="w-5 h-5 mr-2" />
      View Full Calendar
    </Button>
  );
}

export function JoinCommunityButton() {
  const handleClick = () => {
    window.open("https://www.instagram.com/thewaterbarae/", "_blank");
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-8 py-4 text-lg"
      onClick={handleClick}
    >
      <Users className="w-5 h-5 mr-2" />
      Join Community
    </Button>
  );
}
