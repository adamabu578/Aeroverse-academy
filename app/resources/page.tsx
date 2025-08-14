import { SharedHeader } from "@/components/shared-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, Calendar } from "lucide-react"

export default function ResourcesPage() {
  const articles = [
    {
      id: 1,
      title: "Aeroverse Academy witnesses over 20,000 applications for Women In Tech Scholarship in just 7 days",
      description:
        "Aeroverse Academy's Women in Tech Scholarship received over 20,000 applications in a week, highlighting the growing interest in tech education for women.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "3 MIN READ",
      date: "JUNE 2024",
      category: "NEWS",
    },
    {
      id: 2,
      title: "Aeroverse Academy achieves full accreditation from American Council for Development and Training",
      description:
        "Aeroverse Academy has been fully accredited by the American Council for Development and Training, marking a milestone in tech education.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "4 MIN READ",
      date: "DECEMBER 15 2024",
      category: "NEWS",
    },
    {
      id: 3,
      title: "Aeroverse Academy achieves ACDT accreditation, pioneering world-class tech education in Africa",
      description:
        "Aeroverse Academy's ACDT accreditation sets a new standard for tech education across the continent.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 MIN READ",
      date: "DECEMBER 2024",
      category: "NEWS",
    },
    {
      id: 4,
      title: "Aeroverse Academy gains Accreditation from the American Council of Training and Development (ACTD)",
      description:
        "Aeroverse Academy is now accredited by ACTD, furthering its mission to deliver quality tech education.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "4 MIN READ",
      date: "DECEMBER 15 2024",
      category: "NEWS",
    },
    {
      id: 5,
      title: "Edtech firm organises bootcamp to empower Africa's Innovators",
      description:
        "A groundbreaking bootcamp and edtech firm aims to empower the next generation of African innovators.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "3 MIN READ",
      date: "JUNE 2023",
      category: "NEWS",
    },
    {
      id: 6,
      title: "Empowering African Youth: The Tech Education Revolution",
      description: "Exploring the impact of tech education initiatives on empowering African youth.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "4 MIN READ",
      date: "2024",
      category: "NEWS",
    },
    {
      id: 7,
      title: "Tech for Africa Bootcamp 4th Edition: Empowering the Next Generation of African Tech Leaders",
      description:
        "The 4th edition of the Tech for Africa Bootcamp focuses on empowering future tech leaders across the continent.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 MIN READ",
      date: "SEPTEMBER 5, 2024",
      category: "NEWS",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Users className="w-16 h-16 text-[#5A68B0]" />
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#ED1F24] rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ED1F24] rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ED1F24] rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Student Showcase & Insights</h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore real projects and fresh perspectives from our tech talent—dive into portfolios and blogs that
            reflect their journey, skills, and growth.
          </p>

          <Button
            size="lg"
            className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Blog
          </Button>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest articles</h2>
            <p className="text-gray-600 text-lg">See what's trending in our world of learning and building.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-[#5A68B0] font-semibold">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#5A68B0] transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{article.description}</p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button
                      variant="ghost"
                      className="text-[#5A68B0] hover:text-[#4A5BA0] hover:bg-[#5A68B0]/10 p-0 h-auto font-semibold"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#5A68B0] to-[#4A5BA0] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold">Aeroverse Academy</span>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                An organization that is focused on equipping African youths with the knowledge and skills needed in the
                tech space.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">@</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <a href="mailto:info@aeroverse.academy" className="hover:text-white transition-colors">
                    info@aeroverse.academy
                  </a>
                </li>
                <li>
                  <a href="tel:+2347071097262" className="hover:text-white transition-colors">
                    +234 707 109 7262
                  </a>
                </li>
                <li>
                  <a href="tel:+2347070724286" className="hover:text-white transition-colors">
                    +234 707 072 4286
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-blue-100">
            <p>&copy; 2025 Aeroverse Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
