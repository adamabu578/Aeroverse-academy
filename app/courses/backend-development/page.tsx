"use client"

import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Clock, Award, Briefcase, Monitor, Code, Database, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function BackendDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Become a<br />
            <span className="text-[#5A68B0]">Backend Developer</span> in 5 months learning and 4<br />
            months of guaranteed internship
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The Development program is taught by prominent experts in the tech industry and created as an introductory
            and research phase approach, taking you through your career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white px-8 py-3">Enroll Now</Button>
            <Button
              variant="outline"
              className="border-[#5A68B0] text-[#5A68B0] hover:bg-[#5A68B0] hover:text-white px-8 py-3 bg-transparent"
            >
              Take quiz →
            </Button>
          </div>

          {/* Hero Images */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Backend developer working"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Team working on backend project"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#5A68B0]" />
              <span className="text-gray-700 font-medium">Mentorship</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#5A68B0]" />
              <span className="text-gray-700 font-medium">5 months</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#5A68B0]" />
              <span className="text-gray-700 font-medium">Certification</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#5A68B0]" />
              <span className="text-gray-700 font-medium">Internship</span>
            </div>
            <div className="flex items-center gap-3">
              <Monitor className="w-6 h-6 text-[#5A68B0]" />
              <span className="text-gray-700 font-medium">AI dashboard</span>
            </div>
          </div>
        </div>
      </section>

      {/* From Idea to Execution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">What you'll learn</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From idea to execution</h2>
              <p className="text-gray-600 mb-8">
                Our 9-month program is designed to take you from novice to job-ready professional.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#5A68B0] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Work with JavaScript, CSS and jQuery</h3>
                    <p className="text-gray-600 text-sm">
                      Have in-depth understanding of the entire web UI development process (design, development and
                      deployment).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#5A68B0] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Familiarize yourself with browser testing and debugging
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Be job ready for Frontend internships and Frontend entry level roles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#5A68B0] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Have proven work experience as a Front-end developer
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#5A68B0] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Work full-time on real-life projects</h3>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge className="bg-[#ED1F24]/10 text-[#ED1F24] mb-4">Learn and practice with the best tools</Badge>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <Server className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-medium">Node.js</span>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Monitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">Google Meet</span>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                      <Zap className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-medium">Postman</span>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Code className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium">Express</span>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Database className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">Notion</span>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Code className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium">Express</span>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-medium">Thunderclient</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn by Doing */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">How you will learn</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn by Doing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master product design through practical applications and real-world insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-pink-50 border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Virtual live class experience</h3>
                <p className="text-gray-600 text-sm">
                  Engage in interactive, real-time sessions with top professionals, ask questions, and gain industry
                  insights.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Expert mentorship</h3>
                <p className="text-gray-600 text-sm">
                  Learn from seasoned professionals who provide guidance, feedback, and career insights to accelerate
                  your growth.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Hands-on capstone projects</h3>
                <p className="text-gray-600 text-sm">
                  Apply your skills to real-world challenges, building a strong portfolio and gaining practical
                  experience.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">AI-integrated dashboard</h3>
                <p className="text-gray-600 text-sm">
                  Get tailored learning insights, AI-powered feedback, and smart tracking to enhance your progress.
                </p>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow lg:col-span-2">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  5
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Certification on completion</h3>
                <p className="text-gray-600 text-sm">
                  Earn an industry-recognized certification that validates your expertise and enhances your credibility
                  with employers, giving you a competitive edge in the job market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Course Curriculum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Course Curriculum</h2>
            <p className="text-gray-600">
              12 units • 3 courses • 10 projects • 12 assessments • Professional certification
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="intro" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  Introduction to Backend Development
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Backend architecture fundamentals</li>
                    <li>Server-side programming concepts</li>
                    <li>Version control with Git</li>
                    <li>Backend API design principles</li>
                    <li>Database design and management</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="core" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  Core Backend Technologies
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Node.js and Express.js framework</li>
                    <li>RESTful API development</li>
                    <li>Database integration (SQL and NoSQL)</li>
                    <li>Authentication and authorization</li>
                    <li>Error handling and logging</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advanced" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  Advanced Backend Concepts
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Microservices architecture</li>
                    <li>API security best practices</li>
                    <li>Performance optimization</li>
                    <li>Caching strategies</li>
                    <li>Testing and debugging</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="production" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  Production and Deployment
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Cloud deployment strategies</li>
                    <li>DevOps fundamentals</li>
                    <li>Monitoring and maintenance</li>
                    <li>Scalability planning</li>
                    <li>Production troubleshooting</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Download Brochure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories, Real Impact testimonials */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">Testimonials and Success Stories</Badge>
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
                text: "Thrilled to be swimming with the big fishes now. I dedicated my weekend to catching up with the SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and mastering the fundamentals of data manipulation.",
                verified: true,
              },
              {
                name: "Okpalaeze Joy",
                text: "It has been an amazing tech journey with one of the best tutor ever @aeroverseacademy. I was scared of so many things at first, never knew I could even cope but now so far so good. Thank you, Aeroverse Academy.",
                verified: true,
              },
              {
                name: "Techbaby",
                text: "As a transitioning medical student into tech I will be lying if I say my decision from @aeroverseacademy isn't something that gave me joy",
                verified: true,
              },
              {
                name: "dedeIapoo001",
                text: "It's not even a month since I never thought I'd be programming but here I am, so down with python @aeroverseacademy as a SWES, I had to learn",
                verified: true,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#5A68B0] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
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
                text: "Thrilled to be swimming with the big fishes now. I dedicated my weekend to catching up with the SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and mastering the fundamentals of data manipulation.",
                verified: true,
              },
              {
                name: "Okpalaeze Joy",
                text: "It has been an amazing tech journey with one of the best tutor ever @aeroverseacademy. I was scared of so many things at first, never knew I could even cope but now so far so good. Thank you, Aeroverse Academy.",
                verified: true,
              },
              {
                name: "Techbaby",
                text: "As a transitioning medical student into tech I will be lying if I say my decision from @aeroverseacademy isn't something that gave me joy",
                verified: true,
              },
              {
                name: "dedeIapoo001",
                text: "It's not even a month since I never thought I'd be programming but here I am, so down with python @aeroverseacademy as a SWES, I had to learn",
                verified: true,
              },
            ].map((testimonial, index) => (
              <Card key={index + 4} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#5A68B0] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-8">
              <img
                src="/placeholder.svg?height=256&width=800"
                alt="Students working together"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses for you */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">Explore Our Courses</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Courses for you</h2>
            <p className="text-gray-600">
              Here are some courses from our schools that we offer. Enroll and kickstart your tech career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Become a Cybersecurity Expert in 5 months",
                icon: "🔒",
                color: "bg-orange-100 text-orange-600",
              },
              {
                title: "Become a AI Automation Specialist in 6 months",
                icon: "🤖",
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "Become a Product Designer in 5 months",
                icon: "🎨",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Become a Data Analyst in 5 months",
                icon: "📊",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                title: "Become a Front-End Developer in 5 months",
                icon: "💻",
                color: "bg-red-100 text-red-600",
              },
              {
                title: "Become a Backend Developer in 5 months",
                icon: "⚙️",
                color: "bg-green-100 text-green-600",
              },
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${course.color} rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    {course.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4">{course.title}</h3>
                  <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Payment Options */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Payment Options,
              <br />
              Choose what works for you.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Aeroverse Academy, we believe that financial constraints shouldn't stop you from building a successful
              tech career. That's why we offer flexible payment options to make quality education accessible for
              everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-green-100 text-green-600 mb-4">Best Value</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Payment plan</h3>
                  <p className="text-gray-600 text-sm">One-time registration fee</p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">₦6,000.00</div>
                  <div className="text-sm text-gray-500 line-through mb-2">₦200,000.00</div>
                  <div className="text-2xl font-bold text-[#5A68B0]">₦150,000.00</div>
                </div>

                <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white py-3">Enroll Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Payment plan</h3>
                  <p className="text-gray-600 text-sm">One-time registration fee</p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">₦6,000.00</div>
                  <div className="text-sm text-gray-500 line-through mb-2">₦60,000.00</div>
                  <div className="text-2xl font-bold text-[#5A68B0]">₦50,000.00</div>
                </div>

                <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white py-3">Enroll Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked
              <br />
              Questions (FAQ) 🤔
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We know you might have some questions about Aeroverse Academy, our programs, and how we can help you build
              a successful tech career.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="different" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  What makes Aeroverse Academy different from other tech training programs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Aeroverse Academy offers a unique combination of expert mentorship, hands-on projects, AI-integrated
                  learning dashboard, and guaranteed internship opportunities. Our curriculum is designed by industry
                  experts and constantly updated to meet current market demands.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  Will there be a certification after completing the program?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Yes, upon successful completion of the program, you'll receive an industry-recognized certificate from
                  Aeroverse Academy, accredited by ACTD (Association for Career and Technical Development).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="schedule" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  How many days a week are classes held?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Classes are held 3-4 times per week, with flexible scheduling options including evening and weekend
                  sessions to accommodate working professionals and students.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="internship" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  Will there be internship opportunities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Yes, we guarantee a 4-month internship program with our partner companies after completing the 5-month
                  learning phase. This provides real-world experience and potential job opportunities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="experience" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  Do I need any prior experience to enroll?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  No prior experience is required. Our program is designed to take you from complete beginner to
                  job-ready professional. We start with fundamentals and gradually build up to advanced concepts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Aeroverse Academy Certificate"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#ED1F24]/10 text-[#ED1F24] mb-4">Certification</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Globally recognized certification</h2>
              <p className="text-gray-600 mb-6">
                Upon completing the program, you'll receive an industry-recognized certificate from Aeroverse Academy,
                accredited by ACTD. This certification validates your expertise in backend design and enhances your
                credibility with employers, giving you a competitive edge in the job market.
              </p>
              <Button className="bg-[#ED1F24] hover:bg-[#D11F24] text-white">Apply now →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">Accreditation</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accredited for excellence</h2>
              <p className="text-gray-600 mb-6">
                Aeroverse Academy is proudly accredited by the Association for Career and Technical Development (ACTD),
                ensuring its programs meet global industry standards. This guarantees that students receive
                high-quality, industry-relevant education that is recognized by employers and professionals worldwide.
              </p>
              <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Apply now →</Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="ACTD Accreditation Certificate"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#5A68B0] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Backend Development Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of students who have transformed their careers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#5A68B0] hover:bg-gray-100 px-8 py-3">Enroll Now</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#5A68B0] px-8 py-3 bg-transparent"
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
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold text-sm">A</span>
                </div>
                <span className="font-bold text-lg">Aeroverse Academy</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                An organization that is focused on equipping African youths with the knowledge and skills needed in the
                tech space.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/about" className="hover:opacity-100">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-100">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-100">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-100">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@aeroverseacademy.com</li>
                <li>+234 707 109 7262</li>
                <li>+234 707 072 4286</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2025 Aeroverse Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
