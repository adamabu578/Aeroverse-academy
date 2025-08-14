"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields")
      setIsLoading(false)
      return
    }

    try {
      // Simulate login process
      console.log("Login submitted:", formData)

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Login error:", error)
      alert("Login failed. Please try again.")
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

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "Being someone with the passion to learn design, I found it hard to multitask between my day job and
                  my passion for learning. Coupled with this, the fear of learning alone without mentorship made me
                  doubt my ability to learn ui/ux. However, thanks to Aeroverse Academy and their mentorship programs, I
                  have been able to learn what I desired to learn in a convenient space at my own pace. Thanks Aeroverse
                  Academy"
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#5A68B0] to-[#ED1F24] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Samuel Ogunshina</p>
                    <p className="text-sm text-gray-600">UI/UX Design Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Login Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-serif font-medium text-gray-900 mb-4 leading-relaxed tracking-wide">
                Welcome back, Login to your dashboard.
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="janemary@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 border-gray-300 focus:border-[#5A68B0] focus:ring-[#5A68B0]"
                />
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

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white font-medium text-base disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>

              {/* Links */}
              <div className="space-y-4 text-center">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <Link href="/apply" className="text-[#5A68B0] hover:underline font-medium">
                    Register
                  </Link>
                </p>
                <p className="text-gray-600 text-sm">
                  Forgot Password?{" "}
                  <Link href="/recover" className="text-[#5A68B0] hover:underline font-medium">
                    Recover
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
