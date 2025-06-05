"use client"

import { Button } from "@/components/ui/button"

interface YachtButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollToDesignVoyageButton({ children, className }: YachtButtonProps) {
  const handleScroll = () => {
    document.getElementById("design-voyage")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      size="lg"
      className={`bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 text-lg shadow-xl shadow-amber-500/30 transform hover:scale-105 transition-transform ${className || ''}`}
      onClick={handleScroll}
    >
      {children}
    </Button>
  );
}

export function InstagramFollowButton({ children, className }: YachtButtonProps) {
  const handleOpenInstagram = () => {
    window.open("https://www.instagram.com/thewaterbarae/", "_blank");
  };

  return (
    <Button
      className={`bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white mt-4 shadow-lg ${className || ''}`}
      onClick={handleOpenInstagram}
    >
      {children}
    </Button>
  );
}
