"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Droplets, SailboatIcon, Camera, Users, Instagram, Sparkles } from "lucide-react"

interface NavigationButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function NavigationButton({
  href,
  children,
  variant = "default",
  size = "default",
  icon,
  className,
  external = false
}: NavigationButtonProps) {
  const handleClick = () => {
    if (external) {
      window.open(href, "_blank");
    } else {
      window.location.href = href;
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
}

// Pre-configured buttons for home page
export function ExperiencePartyButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="/events"
      size="lg"
      className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg shadow-lg shadow-cyan-500/25 border border-cyan-400/30 ${props.className || ''}`}
      icon={<Sparkles className="w-5 h-5" />}
    >
      Experience the Party
    </NavigationButton>
  );
}

export function DiscoverDrinksButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="/drinks"
      variant="outline"
      size="lg"
      className={`border-amber-400/50 text-amber-300 hover:bg-amber-400/10 px-8 py-4 text-lg ${props.className || ''}`}
      icon={<Droplets className="w-5 h-5" />}
    >
      Discover the Drinks
    </NavigationButton>
  );
}

export function DrinkMenuButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="/drinks"
      variant="outline"
      className={`border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 ${props.className || ''}`}
    >
      See the Menu
    </NavigationButton>
  );
}

export function EventsCalendarButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="/events"
      variant="outline"
      className={`border-amber-400/50 text-amber-300 hover:bg-amber-400/10 ${props.className || ''}`}
      icon={<Calendar className="w-4 h-4" />}
    >
      View Events Calendar
    </NavigationButton>
  );
}

export function YachtExperiencesButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="/yacht-experience"
      variant="outline"
      className={`border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 ${props.className || ''}`}
      icon={<SailboatIcon className="w-4 h-4" />}
    >
      Yacht Experiences
    </NavigationButton>
  );
}

export function ShareMemoryButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="https://www.instagram.com/thewaterbarae/"
      external={true}
      size="lg"
      className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-lg shadow-purple-500/25 ${props.className || ''}`}
      icon={<Camera className="w-5 h-5" />}
    >
      Share Your Memory
    </NavigationButton>
  );
}

export function PartnerWithUsButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="/sponser-activation"
      size="lg"
      className={`bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 ${props.className || ''}`}
      icon={<Users className="w-5 h-5" />}
    >
      Partner With Us
    </NavigationButton>
  );
}

export function FollowUsButton(props: { className?: string }) {
  return (
    <NavigationButton
      href="https://www.instagram.com/thewaterbarae/"
      external={true}
      size="lg"
      variant="outline"
      className={`border-amber-400/50 text-amber-300 hover:bg-amber-400/10 px-6 py-3 ${props.className || ''}`}
      icon={<Instagram className="w-5 h-5" />}
    >
      Follow Us
    </NavigationButton>
  );
}
