"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function SharedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const courses = [
    { name: "Frontend Development", slug: "frontend-development" },
    { name: "Backend Development", slug: "backend-development" },
    { name: "Product Management", slug: "product-management" },
    { name: "Product Design", slug: "product-design" },
    { name: "Data Science", slug: "data-science" },
    { name: "Data Analysis", slug: "data-analysis" },
    { name: "Cyber Security", slug: "cyber-security" },
    { name: "Mobile Development", slug: "mobile-development" },
    { name: "DevOps/Cloud Computing", slug: "devops-cloud-computing" },
    { name: "Content Creation", slug: "content-creation" },
    { name: "Automation", slug: "automation" },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#5A68B0] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-xl">Aeroverse Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer hover:text-[#5A68B0] transition-colors">
              <span>Courses</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {courses.map((course) => (
                <DropdownMenuItem key={course.slug} asChild>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="cursor-pointer hover:bg-[#5A68B0]/10 focus:bg-[#5A68B0]/10 w-full"
                  >
                    {course.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/about" className="cursor-pointer hover:text-[#5A68B0] transition-colors">
            About us
          </Link>
          <Link href="/contact" className="cursor-pointer hover:text-[#5A68B0] transition-colors">
            Contact us
          </Link>
          <Link href="/resources" className="cursor-pointer hover:text-[#5A68B0] transition-colors">
            Resources
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/apply">
            <Button className="bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white">Apply Now</Button>
          </Link>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {/* Courses Section */}
            <div className="space-y-2">
              <div className="font-semibold text-gray-900 px-2">Courses</div>
              <div className="pl-4 space-y-2">
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    className="block px-2 py-2 text-gray-600 hover:text-[#5A68B0] hover:bg-[#5A68B0]/10 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Navigation Links */}
            <Link
              href="/about"
              className="block px-2 py-2 text-gray-900 hover:text-[#5A68B0] hover:bg-[#5A68B0]/10 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="block px-2 py-2 text-gray-900 hover:text-[#5A68B0] hover:bg-[#5A68B0]/10 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              Contact us
            </Link>
            <Link
              href="/resources"
              className="block px-2 py-2 text-gray-900 hover:text-[#5A68B0] hover:bg-[#5A68B0]/10 rounded-lg transition-colors"
              onClick={closeMobileMenu}
            >
              Resources
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
