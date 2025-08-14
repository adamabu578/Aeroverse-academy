import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SharedHeader } from "@/components/shared-header"
import { CheckCircle, Clock, Users, Award, ArrowRight, BookOpen, Target, Star, Play, Download } from "lucide-react"

interface CoursePageTemplateProps {
  title: string
  description: string
  duration: string
  students: string
  icon: string
  color: string
  skills: string[]
  curriculum: {
    module: string
    topics: string[]
  }[]
  careerPaths: string[]
  prerequisites: string[]
}

export function CoursePageTemplate({
  title,
  description,
  duration,
  students,
  icon,
  color,
  skills,
  curriculum,
  careerPaths,
  prerequisites,
}: CoursePageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#5A68B0]/5 via-white to-[#ED1F24]/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#5A68B0] text-white px-4 py-2 text-sm font-medium">{duration} Program</Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.9 (2,340 reviews)</span>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] bg-clip-text text-transparent">
                  {title}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">{description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-[#5A68B0]/10 to-[#5A68B0]/5 border-[#5A68B0]/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#5A68B0] rounded-full">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{duration}</h3>
                      <p className="text-sm text-gray-600">Program Duration</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-[#ED1F24]/10 to-[#ED1F24]/5 border-[#ED1F24]/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#ED1F24] rounded-full">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{students}</h3>
                      <p className="text-sm text-gray-600">Students Enrolled</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  size="lg"
                  className="bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#ED1F24] text-[#ED1F24] hover:bg-[#ED1F24] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Curriculum
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className={`${color} rounded-3xl p-12 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-8xl mb-6">{icon}</div>
                <h3 className="font-bold text-xl mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Hands-on projects and real-world experience</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white border-2 hover:shadow-lg transition-all duration-300">
                  <Award className="w-8 h-8 text-[#5A68B0] mb-3" />
                  <h4 className="font-semibold text-sm">Certified</h4>
                  <p className="text-xs text-gray-600">Industry Recognition</p>
                </Card>
                <Card className="p-6 bg-white border-2 hover:shadow-lg transition-all duration-300">
                  <Target className="w-8 h-8 text-[#ED1F24] mb-3" />
                  <h4 className="font-semibold text-sm">Job Ready</h4>
                  <p className="text-xs text-gray-600">Career Support</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] px-4 py-2 mb-4">Skills & Technologies</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Master In-Demand Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build job-ready skills that top employers are actively seeking in today's competitive tech market.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-2 hover:border-[#5A68B0]/30"
              >
                <CardContent className="p-0">
                  <div className="p-3 bg-[#5A68B0]/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-[#5A68B0]" />
                  </div>
                  <p className="font-semibold text-sm">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-[#5A68B0]/5 via-white to-[#ED1F24]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#ED1F24]/10 text-[#ED1F24] px-4 py-2 mb-4">Curriculum</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive Learning Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully crafted curriculum designed to take you from beginner to industry professional.
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {curriculum.map((module, index) => (
              <Card
                key={index}
                className="p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-[#5A68B0]"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5A68B0] to-[#ED1F24] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-4 text-[#5A68B0]">{module.module}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <BookOpen className="w-5 h-5 text-[#5A68B0] flex-shrink-0" />
                            <span className="text-sm font-medium">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] px-4 py-2 mb-4">Career Opportunities</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Your Future Awaits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Graduates from this program typically pursue these exciting and high-paying career paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careerPaths.map((career, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-[#5A68B0]/30"
              >
                <CardContent className="p-0">
                  <div className="p-4 bg-gradient-to-br from-[#5A68B0] to-[#ED1F24] rounded-full w-fit mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{career}</h3>
                  <p className="text-sm text-gray-600">High-demand role</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#5A68B0]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 bg-white shadow-2xl border-2">
              <div className="text-center mb-12">
                <Badge className="bg-[#ED1F24]/10 text-[#ED1F24] px-4 py-2 mb-4">Getting Started</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prerequisites</h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know before starting your journey with us.
                </p>
              </div>

              <div className="grid gap-6 mb-12">
                {prerequisites.map((prerequisite, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#5A68B0]/5 to-transparent rounded-xl border border-[#5A68B0]/20"
                  >
                    <div className="p-2 bg-[#5A68B0] rounded-full">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">{prerequisite}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] hover:from-[#5A68B0]/90 hover:to-[#ED1F24]/90 text-white px-12 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Journey Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#5A68B0] to-[#5A68B0]/90 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold text-sm">A</span>
                </div>
                <span className="font-bold text-xl">Aeroverse Academy</span>
              </div>
              <p className="text-blue-100 text-sm">
                An organization that is focused on equipping African youths with the knowledge and needed skills in the
                tech space.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Community</li>
                <li className="hover:text-white cursor-pointer">Partnership</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="hover:text-white cursor-pointer">info@aeroverse.academy</li>
                <li className="hover:text-white cursor-pointer">+234 707 109 7262</li>
                <li className="hover:text-white cursor-pointer">+234 707 072 4266</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-400 pt-8 text-center text-sm text-blue-100">
            <p>© 2025 Aeroverse Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
