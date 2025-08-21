"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code, Database, Shield, Palette, ChevronRight, GraduationCap } from "lucide-react"

const courses = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    icon: Code,
    duration: "12 weeks",
    price: "₦80,000",
    color: "bg-slate-800",
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Node.js, PostgreSQL, Docker, AWS",
    icon: Database,
    duration: "14 weeks",
    price: "₦95,000",
    color: "bg-gray-800",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Ethical Hacking, Network Security, OWASP",
    icon: Shield,
    duration: "16 weeks",
    price: "₦120,000",
    color: "bg-zinc-800",
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "Figma, User Research, Prototyping",
    icon: Palette,
    duration: "10 weeks",
    price: "₦75,000",
    color: "bg-stone-800",
  },
]

export default function CoursePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    courseId: "",
    experience: "",
    motivation: "",
    availability: "",
    hearAbout: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.courseId) {
      setError("Please select a course")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Save in localStorage
      localStorage.setItem("applicationData", JSON.stringify(formData))

      router.push("/success")
    } catch (err) {
      setError(`Failed to submit: ${err instanceof Error ? err.message : "Unknown error"}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedCourse = courses.find((course) => course.id === formData.courseId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5A68B0] via-[#4A5A9E] to-[#ED1F24] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ED1F24] rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5A68B0] rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
      </div>

      <div className="relative z-10 border-b border-white/20 bg-white/10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] shadow-lg transition-all duration-300">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-white mb-2 drop-shadow-lg">Course Application</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
            Take the first step towards mastering cutting-edge technologies. Complete your application below.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <Card className="shadow-2xl border-white/20 bg-white/95 backdrop-blur-md transition-all duration-500">
          <CardHeader className="text-center pb-6">
            <CardTitle className="font-serif text-2xl bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] bg-clip-text text-transparent">
              Application Form
            </CardTitle>
            <CardDescription>Please fill out all required fields to complete your course application</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Select Your Course *</Label>
                <RadioGroup
                  value={formData.courseId}
                  onValueChange={(value) => handleSelectChange("courseId", value)}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {courses.map((course) => {
                    const Icon = course.icon
                    return (
                      <div
                        key={course.id}
                        className={`flex items-center space-x-3 border border-gray-600 rounded-lg p-4 ${course.color} cursor-pointer`}
                      >
                        <RadioGroupItem value={course.id} id={course.id} className="border-white text-white" />
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="p-2 rounded-md bg-white/20 backdrop-blur-sm">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Label htmlFor={course.id} className="font-medium cursor-pointer text-white">
                              {course.title}
                            </Label>
                            <p className="text-sm text-white/90 mt-1">{course.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-white/80">
                              <span>{course.duration}</span>
                              <span className="font-bold text-white bg-white/20 px-2 py-1 rounded-full">
                                {course.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2 bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] bg-clip-text text-transparent">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="hover:border-[#5A68B0] focus:border-[#5A68B0] transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="hover:border-[#5A68B0] focus:border-[#5A68B0] transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="hover:border-[#5A68B0] focus:border-[#5A68B0] transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="hover:border-[#5A68B0] focus:border-[#5A68B0] transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="hover:border-[#5A68B0] focus:border-[#5A68B0] transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2 bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] bg-clip-text text-transparent">
                  Background & Motivation
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Experience Level</Label>
                  <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Complete Beginner</SelectItem>
                      <SelectItem value="some">Some Experience</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to take this course? *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and what you hope to achieve..."
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Time Availability</Label>
                  <Select onValueChange={(value) => handleSelectChange("availability", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="How many hours per week can you dedicate?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 hours/week</SelectItem>
                      <SelectItem value="10-15">10-15 hours/week</SelectItem>
                      <SelectItem value="15-20">15-20 hours/week</SelectItem>
                      <SelectItem value="20+">20+ hours/week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hearAbout">How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleSelectChange("hearAbout", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend/Colleague</SelectItem>
                      <SelectItem value="ad">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {error && (
                <div className="text-[#ED1F24] text-sm bg-[#ED1F24]/10 p-3 rounded-md border border-[#ED1F24]/20">
                  {error}
                </div>
              )}

              <div className="border-t pt-6">
                {selectedCourse && (
                  <div className="bg-gradient-to-r from-[#5A68B0]/10 to-[#ED1F24]/10 p-4 rounded-lg mb-4 border border-[#5A68B0]/20 hover:border-[#ED1F24]/30 transition-all duration-300">
                    <h4 className="font-semibold mb-2">Application Summary</h4>
                    <div className="flex justify-between items-center">
                      <span>Course: {selectedCourse.title}</span>
                      <span className="font-semibold text-[#ED1F24]">{selectedCourse.price}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Duration: {selectedCourse.duration}</div>
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] hover:from-[#ED1F24] hover:to-[#5A68B0] h-12 text-base text-white transition-all duration-500 hover:shadow-xl"
                >
                  {isSubmitting ? (
                    "Submitting Application..."
                  ) : (
                    <>
                      Submit Application
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
