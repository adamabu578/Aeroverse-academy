import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Calendar, Award, ArrowRight, Lightbulb } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Accelerate your career with <span className="text-[#5A68B0]">Job-ready tech skills.</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 bg-[#ED1F24]/10 border-[#ED1F24]/30 hover:bg-[#ED1F24]/15 transition-colors">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-[#ED1F24]" />
                  <div>
                    <h3 className="font-semibold">5-Month Learning Phase</h3>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#5A68B0]/10 border-[#5A68B0]/30 hover:bg-[#5A68B0]/15 transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-[#5A68B0]" />
                  <div>
                    <h3 className="font-semibold">4-Month Guaranteed Internship</h3>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white border-2">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Begin your tech journey and expand your career opportunities in the tech space by learning tech skills
                  in demand.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>S1</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>S2</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>S3</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>S4</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-semibold">10,000+ Graduates and Counting</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white">Enroll Now</Button>
                  <Button
                    variant="outline"
                    className="border-[#ED1F24] text-[#ED1F24] hover:bg-[#ED1F24]/10 bg-transparent"
                  >
                    Take quiz <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-[#5A68B0]/10 border-[#5A68B0]/30">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-[#5A68B0]" />
                <div>
                  <h3 className="font-semibold">Globally recognized certification</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Accredited by AMERICAN COUNCIL OF TRAINING AND DEVELOPMENT FACTOR
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-[#ED1F24]/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#ED1F24]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#ED1F24]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Embedded Learning Platform</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-[#5A68B0]/5 via-[#ED1F24]/5 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4 hover:bg-[#5A68B0]/15">
              Testimonials and Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Stories, Real Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our graduates who have transformed their lives and launched
              successful tech careers with Aeroverse Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Somtochukwu moneme",
                text: "Thrilled to be swimming with the big fishes now. I dedicated my weekend to catching up with the SQL classes at Aeroverse Academy Data Analytics with Prince O, diving into the world of SQL and mastering the fundamentals of data manipulation.",
                verified: true,
              },
              {
                name: "Okpalaezo Joy",
                text: "It has been an amazing tech journey with one of the best tutor ever @aeroverseacademy. I was scared of so many things at first, but now I know I could even code but now so far so good. Thank you, Aeroverse Academy.",
                verified: true,
              },
              {
                name: "Techbaby",
                text: "As a transitioning medical student into tech I will be lying if I say my decision from @aeroverseacademy wasn't something that gave me joy",
                verified: true,
              },
              {
                name: "dedelapoo001",
                text: "It's not even a month since I never thought I'd be programming but now I'm programming like so down with python @aeroverseacademy as an SQL SWES. I had to let",
                verified: true,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 mb-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&query=user${index + 1}`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                        {testimonial.verified && (
                          /* Updated verification badge to blue primary */
                          <div className="w-4 h-4 bg-[#5A68B0] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video relative">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Students learning"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full w-16 h-16">
                  <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#5A68B0]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4 hover:bg-[#5A68B0]/15">Explore Our Courses</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Courses for you</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some courses from our schools that we offer. Enroll and kickstart your tech career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Become a Frontend Developer in 5 months",
                icon: "💻",
                color: "bg-blue-100",
              },
              {
                title: "Become a Backend Developer in 5 months",
                icon: "⚙️",
                color: "bg-purple-100",
              },
              {
                title: "Become a Product Manager in 5 months",
                icon: "📋",
                color: "bg-green-100",
              },
              {
                title: "Become a Product Designer in 5 months",
                icon: "🎨",
                color: "bg-pink-100",
              },
              {
                title: "Become a Data Scientist in 5 months",
                icon: "🔬",
                color: "bg-indigo-100",
              },
              {
                title: "Become a Data Analyst in 5 months",
                icon: "📊",
                color: "bg-cyan-100",
              },
              {
                title: "Become a Cybersecurity Expert in 5 months",
                icon: "🔒",
                color: "bg-red-100",
              },
              {
                title: "Become a Mobile Developer in 5 months",
                icon: "📱",
                color: "bg-orange-100",
              },
              {
                title: "Become a DevOps Engineer in 5 months",
                icon: "☁️",
                color: "bg-gray-100",
              },
              {
                title: "Become a Content Creator in 5 months",
                icon: "🎬",
                color: "bg-yellow-100",
              },
              {
                title: "Become an Automation Specialist in 5 months",
                icon: "🤖",
                color: "bg-teal-100",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 ${course.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                  >
                    {course.icon}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight group-hover:text-[#5A68B0] transition-colors">
                    {course.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learn by Doing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4 hover:bg-[#5A68B0]/15">How you will learn</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Learn by Doing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our 9-month program is designed to take you from novice to job-ready professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-pink-50 border-pink-200 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <CardContent className="p-0 pt-4">
                <h3 className="font-semibold text-lg mb-3">Virtual live class experience</h3>
                <p className="text-gray-600 text-sm">
                  Engage in interactive, real-time sessions with top professionals, ask questions, and gain industry
                  insights
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-orange-50 border-orange-200 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <CardContent className="p-0 pt-4">
                <h3 className="font-semibold text-lg mb-3">Expert mentorship</h3>
                <p className="text-gray-600 text-sm">
                  Learn from seasoned professionals who provide guidance, feedback, and career insights to accelerate
                  your growth
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-[#ED1F24]/5 border-[#ED1F24]/30 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ED1F24] text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <CardContent className="p-0 pt-4">
                <h3 className="font-semibold text-lg mb-3">Hands-on capstone projects</h3>
                <p className="text-gray-600 text-sm">
                  Apply your skills to real-world challenges, building a strong portfolio and gaining practical
                  experience
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200 relative md:col-span-1 lg:col-start-1">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <CardContent className="p-0 pt-4">
                <h3 className="font-semibold text-lg mb-3">AI-integrated dashboard</h3>
                <p className="text-gray-600 text-sm">
                  Get tailored learning insights, AI-powered feedback, and smart tracking to enhance your progress
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-[#5A68B0]/10 border-[#5A68B0]/30 relative md:col-span-1 lg:col-start-2">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#5A68B0] text-white rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <CardContent className="p-0 pt-4">
                <h3 className="font-semibold text-lg mb-3">Hands-on capstone projects</h3>
                <p className="text-gray-600 text-sm">
                  Apply your skills to real-world challenges, building a strong portfolio and gaining practical
                  experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where Our Learners Work Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Where our learners work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our graduates go on to join some of the most innovative teams in the tech industry—making real impact from
              day one
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto h-96">
            {/* Company logos arranged in a circular pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Center logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-yellow-800" />
                </div>

                {/* Surrounding company logos */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">M</span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">X</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">▲</span>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">●</span>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">♥</span>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">◆</span>
                </div>
                <div className="absolute top-8 right-12 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">○</span>
                </div>
                <div className="absolute bottom-8 right-12 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">◉</span>
                </div>
                <div className="absolute bottom-8 left-12 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">💬</span>
                </div>
                <div className="absolute top-8 left-12 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">🔥</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions (FAQ) 🤔</h2>
              <p className="text-gray-600">
                We know you might have some questions about Aeroverse Academy, our programs, and how we can help you
                build a successful tech career.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What makes Aeroverse Academy different from other tech training programs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Aeroverse Academy combines live interactive classes, expert mentorship, AI-powered learning insights,
                  and guaranteed internship opportunities. Our 9-month program is designed to take you from novice to
                  job-ready professional with hands-on projects and real-world experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Will there be a certification after completing the program?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, you'll receive a globally recognized certification accredited by the American Council of Training
                  and Development Factor upon successful completion of the program.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How many days a week are classes held?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Classes are typically held 3-4 times per week, with flexible scheduling options to accommodate working
                  professionals and students. We also provide recorded sessions for review.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Will there be internship opportunities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We guarantee a 4-month internship opportunity with our partner companies upon successful completion of
                  the 5-month learning phase. This is part of our commitment to ensuring you gain real-world experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do I need any prior experience to enroll?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No prior experience is required! Our program is designed to take complete beginners and guide them
                  through a structured learning path. We start with fundamentals and gradually build up to advanced
                  concepts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#5A68B0]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5A68B0] to-[#ED1F24] rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">Get in Touch with Aeroverse Academy</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions or need assistance? We're here to help! Whether you're looking for more details about
                    our programs, enrollment process, or career support, our team is ready to guide you.
                  </p>
                  <Button className="bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white">Contact Us</Button>
                </div>
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
              <p className="text-blue-100 text-xs">©2025 Aeroverse Academy. All rights reserved.</p>
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
