"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState } from "react"

const slides = [
  {
    title: "Transform Your Future Today",
    subtitle:
      "Join thousands of learners across Africa gaining the skills and resources to accelerate your career growth.",
    buttonText: "GET STARTED",
    image: "/assets/guy.jpg",
    background: "from-primary to-primary/80",
  },
  {
    title: "Build Your AI-Ready Future",
    subtitle: "Equip yourself with relevant AI skills redefining the future of work.",
    buttonText: "Browse Tech Programs",
    image: "/assets/ai.jpg",
    background: "from-purple-900 via-purple-700 to-purple-600",
    hasVideo: true,
  },
  {
    title: "Master Data Science & Analytics",
    subtitle: "Unlock insights from data and drive business decisions with cutting-edge analytics skills.",
    buttonText: "Explore Data Programs",
    image: "/assets/data science.jpg",
    background: "from-blue-900 via-blue-700 to-blue-600",
  },
  {
    title: "Launch Your Tech Career",
    subtitle: "From coding bootcamps to advanced software engineering - start your journey in tech today.",
    buttonText: "View Career Paths",
    image: "/assets/biometric.jpg",
    background: "from-green-900 via-green-700 to-green-600",
  },
  {
    title: "Join Africa's Tech Revolution",
    subtitle: "Be part of the growing community of African innovators shaping the future of technology.",
    buttonText: "Join Community",
    image: "/assets/ai.jpg",
    background: "from-orange-900 via-orange-700 to-orange-600",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <section
      className={`relative bg-gradient-to-r ${slide.background} text-white overflow-hidden transition-all duration-500`}
    >
      <div className="absolute inset-0">
        <img
          src={slide.image || "/placeholder.svg"}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {slide.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  {index === 1 && slide.title.includes("Transform") ? <br /> : " "}
                  {index === 2 && slide.title.includes("Build") ? <br /> : ""}
                  {index === 3 && slide.title.includes("Master") ? <br /> : ""}
                  {index === 4 && slide.title.includes("Launch") ? <br /> : ""}
                  {index === 5 && slide.title.includes("Join") ? <br /> : ""}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-lg">{slide.subtitle}</p>
            <Button
              size="lg"
              className={`${currentSlide === 1 ? "bg-green-500 hover:bg-green-600" : "bg-accent hover:bg-accent/90"} text-white font-semibold px-8 py-3`}
            >
              {slide.buttonText}
            </Button>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src={slide.image || "/placeholder.svg"}
                alt="Hero content"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {slide.hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-red-500 hover:bg-red-600 rounded-full p-4 shadow-lg transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-16">
          <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
