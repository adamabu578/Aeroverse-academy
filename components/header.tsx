"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { useState } from "react"
import { ProgrammesDropdown } from "./programmes-dropdown"

export function Header() {
  const [showProgrammesDropdown, setShowProgrammesDropdown] = useState(false)

  return (
    <header className="bg-primary text-white border-b border-primary-foreground/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">aeroverse academy</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setShowProgrammesDropdown(true)}
              onMouseLeave={() => setShowProgrammesDropdown(false)}
            >
              <div className="flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 cursor-pointer">
                <span>PROGRAMMES</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              {showProgrammesDropdown && <ProgrammesDropdown />}
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 cursor-pointer">
              <span>COMMUNITY</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 cursor-pointer">
              <span>ABOUT AEROVERSE</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex text-white hover:bg-white/10">
              LOG IN
            </Button>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white">
              GET STARTED
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
