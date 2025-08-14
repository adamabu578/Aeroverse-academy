"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, HelpCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ApplyPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.password) {
      alert("Please fill in all fields")
      setIsLoading(false)
      return
    }

    try {
      // Simulate registration process
      console.log("Form submitted:", formData)

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      router.push("/success")
    } catch (error) {
      console.error("Registration error:", error)
      alert("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Testimonial */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-[#5A68B0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl">Aeroverse Academy</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-serif font-medium text-gray-900 mb-8 leading-relaxed tracking-wide">
              Start your registration process here. Fill in your basic details to create your account.
            </h2>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "I always had a knack for designs but I needed the right platform to put me through and teach me
                  properly. I found that with Aeroverse Academy. At Aeroverse Academy, the tutors are very kind to
                  retake a class for you when you don't understand a thing. If you are looking for a place where you
                  need an efficient and reliable tutoring then Aeroverse Academy is the right place for you."
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#5A68B0] to-[#ED1F24] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Samuel Ogunshina</p>
                    <p className="text-sm text-gray-600">Product Design Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Registration Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-serif font-medium text-gray-900 mb-4 leading-relaxed tracking-wide">
                Start your registration process here. Fill in your basic details to create your account.
              </h1>
              <p className="text-gray-600">
                Already a student?{" "}
                <Link href="/login" className="text-[#5A68B0] hover:underline font-medium">
                  Log in here
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full name
                </Label>
                <div className="relative">
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Jane Mary"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="h-12 pr-10 border-gray-300 focus:border-[#5A68B0] focus:ring-[#5A68B0]"
                  />
                  <HelpCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g janemary@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 pr-10 border-gray-300 focus:border-[#5A68B0] focus:ring-[#5A68B0]"
                  />
                  <HelpCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone number
                </Label>
                <div className="flex space-x-2">
                  <Select defaultValue="NG">
                    <SelectTrigger className="w-28 h-12 border-gray-300 focus:border-[#5A68B0] focus:ring-[#5A68B0] flex-shrink-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NG">🇳🇬 NG</SelectItem>
                      <SelectItem value="US">🇺🇸 US</SelectItem>
                      <SelectItem value="UK">🇬🇧 UK</SelectItem>
                      <SelectItem value="CA">🇨🇦 CA</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex-1 relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+2349 0000 0000"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className="h-12 pr-10 border-gray-300 focus:border-[#5A68B0] focus:ring-[#5A68B0]"
                    />
                    <HelpCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-12 pr-10 border-gray-300 focus:border-[#5A68B0] focus:ring-[#5A68B0]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white font-medium text-base disabled:opacity-50"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>

              {/* Survey Link */}
              <div className="text-center pt-4">
                <p className="text-gray-600 text-sm">
                  Not sure which course suits you? Take our quick survey for a personalized recommendation.{" "}
                  <Link href="/survey" className="text-[#5A68B0] hover:underline font-medium">
                    Take Survey Now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
          <div className="w-6 h-6 flex items-center justify-center">💬</div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
            1
          </div>
        </div>
      </div>
    </div>
  )
}
