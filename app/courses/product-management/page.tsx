import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Award, Briefcase, Brain, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Become a<br />
            <span className="text-[#5A68B0]">Product Manager</span> in 5 months learning and 4<br />
            months of guaranteed internship
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The management program is taught by prominent experts in the tech industry and created as an introductory
            and research phase approach, taking you through your career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white px-8 py-3">
              <Link href="/apply">Enroll Now</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#5A68B0] text-[#5A68B0] hover:bg-[#5A68B0] hover:text-white px-8 py-3 bg-transparent"
            >
              Take quiz →
            </Button>
          </div>
        </div>

        {/* Hero Images */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          <div className="relative">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Student working on laptop"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#5A68B0] rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#ED1F24] rounded-full"></div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ED1F24] rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#5A68B0] rounded-full"></div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <Users className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Mentorship</h3>
            <p className="text-sm text-gray-600">One-on-one</p>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">5 months</h3>
            <p className="text-sm text-gray-600">Intensive learning</p>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Certification</h3>
            <p className="text-sm text-gray-600">Globally recognized</p>
          </div>
          <div className="text-center">
            <Briefcase className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Internship</h3>
            <p className="text-sm text-gray-600">Professional experience</p>
          </div>
          <div className="text-center">
            <Brain className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">AI dashboard</h3>
            <p className="text-sm text-gray-600">Personalized learning</p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">What you'll learn</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From idea to execution</h2>
              <p className="text-gray-600 mb-8">
                Our 9-month program is designed to take you from novice to job-ready professional.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Understand the core principles of product management</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Develop and execute a product strategy</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Conduct market research and gather customer feedback</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Work cross-functionally with design, engineering, and marketing teams
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Analyze and measure product performance and iterate based on data-driven insights
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Create and prioritize a product roadmap</span>
                </div>
              </div>
            </div>

            <div>
              <Badge className="bg-pink-100 text-pink-800 mb-4">Learn and practice with the best tools</Badge>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">F</span>
                    </div>
                    <span className="font-medium">Figma</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-pink-600 font-bold">C</span>
                    </div>
                    <span className="font-medium">Click Up</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">G</span>
                    </div>
                    <span className="font-medium">Google Meet</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">J</span>
                    </div>
                    <span className="font-medium">Jira</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-bold">N</span>
                    </div>
                    <span className="font-medium">Notion</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">G</span>
                    </div>
                    <span className="font-medium">Google Docs</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn by Doing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 mb-4">How you will learn</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn by Doing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master product design through practical applications and real-world insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Virtual live class experience</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Engage in interactive, real-time sessions with top professionals, ask questions, and gain industry
                  insights throughout your course.
                </p>
                <p className="text-gray-600 text-sm">
                  This mimics the experience of in-person learning, ensuring that you feel connected, supported, and
                  engaged throughout your course.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Expert mentorship</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn from seasoned professionals who provide guidance, feedback, and career insights to accelerate
                  your growth.
                </p>
                <p className="text-gray-600 text-sm">
                  This provides industry insights and best practices to help you excel in the competitive design field.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Hands-on capstone projects</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Apply your skills to real-world challenges, building a strong portfolio and gaining practical
                  experience.
                </p>
                <p className="text-gray-600 text-sm">
                  Build a job-ready portfolio that showcases your ability to solve complex problems.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow lg:col-start-1">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-3">AI-integrated dashboard</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get tailored learning insights, AI-powered feedback, and smart tracking to enhance your progress.
                </p>
                <p className="text-gray-600 text-sm">
                  This intelligent system elevates your experience, improves continuously, and makes the most of your
                  learning journey.
                </p>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow lg:col-start-2">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  5
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Certification on completion</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Earn an industry-recognized certificate that validates your skills and positions you as part of your
                  chosen field.
                </p>
                <p className="text-gray-600 text-sm">
                  Apply your skills to real-world challenges, building a strong portfolio and gaining practical
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Course Curriculum section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Course Outline</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Course Curriculum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              15 units • 8 courses • 10 projects • 15 assessments • Professional certification
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="fundamentals" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Product Management Fundamentals
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Introduction to Product Management</li>
                    <li>• Product Strategy and Vision</li>
                    <li>• Market Research and Analysis</li>
                    <li>• User Personas and Journey Mapping</li>
                    <li>• Product Requirements and Specifications</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="development" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Product Development Process
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Agile and Scrum Methodologies</li>
                    <li>• Product Roadmap Planning</li>
                    <li>• Cross-functional Team Collaboration</li>
                    <li>• Feature Prioritization Frameworks</li>
                    <li>• Product Launch Strategies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="analytics" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Product Analytics and Growth
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Key Performance Indicators (KPIs)</li>
                    <li>• A/B Testing and Experimentation</li>
                    <li>• User Behavior Analysis</li>
                    <li>• Growth Hacking Techniques</li>
                    <li>• Data-Driven Decision Making</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="leadership" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Product Leadership
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stakeholder Management</li>
                    <li>• Product Team Leadership</li>
                    <li>• Strategic Planning and Execution</li>
                    <li>• Product Portfolio Management</li>
                    <li>• Career Development in Product Management</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Button asChild className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">
                <Link href="/apply">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Aeroverse Academy Certificate"
                  className="w-72 h-96 object-contain shadow-lg rounded-lg"
                />
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#ED1F24] rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#5A68B0] rounded-full"></div>
              </div>
            </div>
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Certification</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Globally recognized certification</h2>
              <p className="text-gray-600 mb-6">
                Upon completing the program, you'll receive an industry-recognized certificate from Aeroverse Academy,
                accredited by ACTD. This certification validates your expertise in product design and enhances your
                credibility with employers, giving you a competitive edge in the job market.
              </p>
              <Button asChild className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">
                <Link href="/apply">Apply now →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories testimonials section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Testimonials and Success Stories</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Stories, Real Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our graduates who have transformed their lives and launched
              successful tech careers with Aeroverse Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                name: "Somtochukwu moneme",
                text: "Thrilled to be swimming with the big fishes now. I dedicated my extended weekend to catching up with the SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and mastering the fundamentals of data manipulation.",
                verified: true,
              },
              {
                name: "Okpalaeze Joy",
                text: "It has been an amazing tech journey with one of the best tutor ever @aeroverse, I was scared of so many things at first, never knew I could even cope but now so far so good. Thank you, Aeroverse Academy.",
                verified: true,
              },
              {
                name: "Techbaby",
                text: "As a transitioning medical student into tech I will be lying if I say my decision from @aeroverse isn't something that gave me joy",
                verified: true,
              },
              {
                name: "dedeIapoo001",
                text: "It's not even a month since I never thought I'd be programming but here I am, so down with python @aeroverse as a SWES, I had to learn",
                verified: true,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#5A68B0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-blue-500">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Somtochukwu moneme",
                text: "Thrilled to be swimming with the big fishes now. I dedicated my extended weekend to catching up with the SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and mastering the fundamentals of data manipulation.",
                verified: true,
              },
              {
                name: "Okpalaeze Joy",
                text: "It has been an amazing tech journey with one of the best tutor ever @aeroverse, I was scared of so many things at first, never knew I could even cope but now so far so good. Thank you, Aeroverse Academy.",
                verified: true,
              },
              {
                name: "Techbaby",
                text: "As a transitioning medical student into tech I will be lying if I say my decision from @aeroverse isn't something that gave me joy",
                verified: true,
              },
              {
                name: "dedeIapoo001",
                text: "It's not even a month since I never thought I'd be programming but here I am, so down with python @aeroverse as a SWES, I had to learn",
                verified: true,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#5A68B0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-blue-500">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Students learning together"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Courses for you section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Explore Our Courses</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Courses for you</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some courses from our schools that we offer. Enroll and kickstart your tech career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                title: "Become a Cybersecurity Expert in 5 months",
                icon: "🔒",
                color: "from-orange-400 to-red-500",
              },
              {
                title: "Become a UI Automation Specialist in 5 months",
                icon: "🎨",
                color: "from-purple-400 to-pink-500",
              },
              {
                title: "Become a Product Designer in 5 months",
                icon: "🎯",
                color: "from-blue-400 to-cyan-500",
              },
              {
                title: "Become a Data Analyst in 5 months",
                icon: "📊",
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "Become a Front-End Developer in 5 months",
                icon: "💻",
                color: "from-red-400 to-pink-500",
              },
              {
                title: "Become a Backend Developer in 5 months",
                icon: "⚡",
                color: "from-blue-400 to-purple-500",
              },
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    {course.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4">{course.title}</h3>
                  <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Verified Course</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Payment Options section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Flexible Payment Options, Choose what works for you.
                </h2>
                <p className="text-gray-600">
                  At Aeroverse Academy, we believe that financial constraints shouldn't stop you from building a
                  successful tech career. That's why we offer affordable and flexible payment options, allowing you to
                  invest in your future without breaking the bank.
                </p>
              </div>
              <div className="flex justify-center">
                <Badge className="bg-green-100 text-green-800 px-4 py-2">Best Value</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Payment plan</h3>
                  <p className="text-gray-600 mb-6">One-time registration fee</p>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-gray-900">₦6,000.00</span>
                      <span className="text-gray-500 line-through">₦8,000.00</span>
                    </div>
                    <div className="text-3xl font-bold text-[#5A68B0]">₦150,000.00</div>
                  </div>
                  <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Enroll Now</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5A68B0] hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Payment plan</h3>
                  <p className="text-gray-600 mb-6">One-time registration fee</p>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-gray-900">₦6,000.00</span>
                      <span className="text-gray-500 line-through">₦8,000.00</span>
                    </div>
                    <div className="text-3xl font-bold text-[#5A68B0]">₦50,000.00</div>
                  </div>
                  <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Enroll Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQ) 🤔</h2>
              <p className="text-gray-600">
                We know you might have some questions about Aeroverse Academy, our programs, and how we can help you
                build a successful tech career.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="different" className="bg-gray-50 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  What makes Aeroverse Academy different from other tech training programs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Aeroverse Academy offers a unique combination of expert mentorship, hands-on projects, AI-integrated
                  learning dashboard, and guaranteed internship opportunities that set us apart from other programs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification" className="bg-gray-50 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  Will there be a certification after completing the program?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes, you'll receive an industry-recognized certificate from Aeroverse Academy, accredited by ACTD,
                  which validates your skills and enhances your credibility with employers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="schedule" className="bg-gray-50 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  How many days a week are classes held?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Classes are held 3-4 times per week with flexible scheduling options to accommodate working
                  professionals and students.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="internship" className="bg-gray-50 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  Will there be internship opportunities?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes, we guarantee a 4-month internship program with our partner companies to provide you with
                  real-world experience and industry connections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="experience" className="bg-gray-50 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  Do I need any prior experience to enroll?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  No prior experience is required. Our program is designed to take you from complete beginner to
                  job-ready professional in 9 months.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#5A68B0] to-[#4A5BA0] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to become a Product Manager?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive product management
            program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#5A68B0] hover:bg-gray-100">
              <Link href="/apply">Start Your Journey</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#5A68B0] bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5A68B0] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold">A</span>
                </div>
                <span className="text-xl font-bold">Aeroverse Academy</span>
              </div>
              <p className="text-blue-100 text-sm">
                An organization that is focused on equipping African youths with the knowledge and skills needed in the
                tech space.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>info@aeroverse.academy</li>
                <li>+234 707 109 7262</li>
                <li>+234 707 072 4286</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-sm text-blue-100">
            © 2025 Aeroverse Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
