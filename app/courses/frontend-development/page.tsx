import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, Clock, Award, Briefcase, Brain, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FrontendDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Become a<br />
            <span className="text-[#5A68B0]">Frontend Developer</span> in 5 months learning and 4<br />
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
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Frontend developer working"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Developer in workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <Users className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <p className="font-semibold text-gray-900">Mentorship</p>
            <p className="text-sm text-gray-600">Expert guidance</p>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <p className="font-semibold text-gray-900">5 months</p>
            <p className="text-sm text-gray-600">Learning phase</p>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <p className="font-semibold text-gray-900">Certification</p>
            <p className="text-sm text-gray-600">Industry recognized</p>
          </div>
          <div className="text-center">
            <Briefcase className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <p className="font-semibold text-gray-900">Internship</p>
            <p className="text-sm text-gray-600">4 months guaranteed</p>
          </div>
          <div className="text-center">
            <Brain className="w-8 h-8 text-[#5A68B0] mx-auto mb-2" />
            <p className="font-semibold text-gray-900">AI dashboard</p>
            <p className="text-sm text-gray-600">Smart tracking</p>
          </div>
        </div>
      </section>

      {/* From Idea to Execution */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-orange-100 text-orange-800 mb-4">Why you'll love it</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">From idea to execution</h2>
            <p className="text-gray-600 mb-8">
              Our 9-month program is designed to take you from novice to job-ready professional.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Work with JavaScript, CSS and jQuery</p>
                  <p className="text-sm text-gray-600">
                    Have in-depth understanding of the entire web UI development process (design, development and
                    deployment)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Familiarize yourself with browser testing and debugging</p>
                  <p className="text-sm text-gray-600">
                    Be job ready for Frontend internships and Frontend entry roles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                <p className="font-semibold text-gray-900">Have proven work experience as a Front-end developer</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-1 flex-shrink-0" />
                <p className="font-semibold text-gray-900">Work full-time on real-life projects</p>
              </div>
            </div>
          </div>

          <div>
            <Badge className="bg-blue-100 text-blue-800 mb-4">Learn and practice with the best tools</Badge>
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 font-bold">JS</span>
                </div>
                <p className="font-semibold text-sm">JavaScript</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">GM</span>
                </div>
                <p className="font-semibold text-sm">Google Meet</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 font-bold">HTML</span>
                </div>
                <p className="font-semibold text-sm">HTML</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">CSS</span>
                </div>
                <p className="font-semibold text-sm">CSS</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-bold">N</span>
                </div>
                <p className="font-semibold text-sm">Notion</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-cyan-600 font-bold">R</span>
                </div>
                <p className="font-semibold text-sm">React JavaScript</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learn by Doing */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-800 mb-4">How you will learn</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn by Doing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master product design through practical applications and real-world insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <Card className="p-6 bg-pink-50 border-pink-200 hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              1
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Virtual live class experience</h3>
            <p className="text-sm text-gray-600">
              Engage in interactive, real-time sessions with top professionals, ask questions, and gain industry
              insights.
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              2
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Expert mentorship</h3>
            <p className="text-sm text-gray-600">
              Learn from seasoned professionals who provide guidance, feedback, and career insights to accelerate your
              growth.
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              3
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Hands-on capstone projects</h3>
            <p className="text-sm text-gray-600">
              Apply your skills to real-world challenges, building a strong portfolio and gaining practical experience.
            </p>
          </Card>

          {/* Step 4 */}
          <Card className="p-6 bg-green-50 border-green-200 hover:shadow-lg transition-shadow lg:col-span-1">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              4
            </div>
            <h3 className="font-bold text-gray-900 mb-3">AI-integrated dashboard</h3>
            <p className="text-sm text-gray-600">
              Get tailored learning insights, AI-powered feedback, and smart tracking to enhance your progress.
            </p>
          </Card>

          {/* Step 5 */}
          <Card className="p-6 bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow lg:col-span-2">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              5
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Certification on completion</h3>
            <p className="text-sm text-gray-600">
              Earn an industry-recognized certification that validates your expertise in product design, making you a
              competitive candidate for top positions.
            </p>
          </Card>
        </div>
      </section>

      {/* Global Recognition */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Accreditation</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accredited for excellence</h2>
            <p className="text-gray-600 mb-6">
              Aeroverse Academy is accredited by the Association for Career and Technical Development (ACTD), ensuring
              its programs meet global industry standards. This guarantees that students receive high-quality,
              industry-relevant education that is recognized by employers and professionals worldwide.
            </p>
            <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Apply now</Button>
          </div>
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-6">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="ACTD Accreditation Seal"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Course Curriculum */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Course Curriculum</h2>
          <p className="text-gray-600">
            36 weeks / 9 modules / 72 projects / 12 assignments / Professional certification
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="intro" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Introduction to Frontend Development
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                <ul className="space-y-2">
                  <li>• HTML5 fundamentals and semantic markup</li>
                  <li>• CSS styling and layouts</li>
                  <li>• JavaScript syntax and DOM interaction</li>
                  <li>• Responsive web design principles</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="advanced" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Advanced Frontend Concepts
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                <ul className="space-y-2">
                  <li>• React.js fundamentals and component architecture</li>
                  <li>• State management with Redux and Context API</li>
                  <li>• API integration and data fetching</li>
                  <li>• Performance optimization techniques</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="modern" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Modern Development Practices
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                <ul className="space-y-2">
                  <li>• Version control with Git and GitHub</li>
                  <li>• Testing frameworks and methodologies</li>
                  <li>• Build tools and deployment strategies</li>
                  <li>• Code quality and best practices</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="professional" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Professional Development
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                <ul className="space-y-2">
                  <li>• Portfolio development and presentation</li>
                  <li>• Interview preparation and technical challenges</li>
                  <li>• Industry networking and career guidance</li>
                  <li>• Freelancing and entrepreneurship basics</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8">
            <Button className="bg-[#ED1F24] hover:bg-[#D11A1F] text-white">Download Brochure</Button>
          </div>
        </div>
      </section>

      {/* Real Stories, Real Impact testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Testimonials and Success Stories</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Stories, Real Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our graduates who have transformed their lives and launched
              successful tech careers with Aeroverse Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">SO</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Somtochukwu moneme</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Thrilled to be swimming with the big fishes now. I dedicated my weekend to catching up with the SQL
                classes at Aeroverse Academy...
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">OJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Okpalaezu Joy</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                It has been an amazing tech journey with one of the best tutor ever @aeroverse. I was scared of so many
                things at first...
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">TB</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Techbaby</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                As a transitioning medical student into tech I will be lying if I say my decision from @aeroverse wasn't
                something that gave me joy.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold text-sm">DD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">dedelapoo001</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                It's not even a month since I never thought I'd be programming but now I'm so down with python
                @aeroverse...
              </p>
            </Card>
          </div>

          <div className="relative h-64 mt-12 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="Students learning together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Courses for you */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Explore Our Courses</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Courses for you</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some courses from our schools that we offer. Enroll and kickstart your tech career.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Become a Cybersecurity Expert in 5 months</h3>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Become a AI Automation Specialist in 4 months</h3>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">🎨</span>
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Become a Product Designer in 5 months</h3>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">📈</span>
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Become a Data Analyst in 5 months</h3>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-2xl">💻</span>
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Become a Front-End Developer in 5 months</h3>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-cyan-600 text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Become a Backend Developer in 5 months</h3>
          </Card>
        </div>
      </section>

      {/* Flexible Payment Options */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Payment Options.</h2>
            <h3 className="text-xl text-gray-700 mb-6">Choose what works for you.</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Aeroverse Academy, we believe that financial constraints shouldn't keep you from building a successful
              tech career. That's why we offer flexible payment plans to make quality education accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Full Payment Plan */}
            <Card className="p-8 border-2 border-gray-200 hover:border-[#5A68B0] transition-colors">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Payment plan</h3>
                <p className="text-gray-600 mb-6">One-time registration fee</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 line-through">₦6,000.00</p>
                  <p className="text-3xl font-bold text-gray-900">₦150,000.00</p>
                </div>

                <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white py-3">Choose Plan</Button>
              </div>
            </Card>

            {/* Monthly Payment Plan */}
            <Card className="p-8 border-2 border-[#5A68B0] hover:border-[#4A5BA0] transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#5A68B0] text-white">Popular</Badge>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Payment plan</h3>
                <p className="text-gray-600 mb-6">One-time registration fee</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 line-through">₦6,000.00</p>
                  <p className="text-3xl font-bold text-gray-900">₦30,000.00</p>
                  <p className="text-sm text-gray-600">per month for 5 months</p>
                </div>

                <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white py-3">Choose Plan</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQ) 🤔</h2>
            <p className="text-gray-600">
              We know you might have some questions about Aeroverse Academy, our programs, and how we can help you build
              a successful tech career.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="different" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                What makes Aeroverse Academy different from other tech training programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Aeroverse Academy offers a unique combination of expert mentorship, hands-on projects, guaranteed
                internships, and industry-recognized certifications. Our curriculum is designed by industry
                professionals and updated regularly to match current market demands.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="certification" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Will there be a certification after completing the program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes, you'll receive an industry-recognized certification from Aeroverse Academy, accredited by ACTD
                (Association for Career and Technical Development). This certification validates your skills and
                enhances your credibility with employers.
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
                Yes, we guarantee a 4-month internship program with our partner companies. This provides real-world
                experience and often leads to full-time job opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experience" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Do I need any prior experience to enroll?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                No prior experience is required. Our programs are designed to take you from complete beginner to
                job-ready professional. We provide all the foundational knowledge you need to succeed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#5A68B0] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Frontend Development Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of successful graduates and transform your career</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#5A68B0] hover:bg-gray-100">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#5A68B0] bg-transparent"
            >
              Download Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#5A68B0] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">Aeroverse Academy</span>
              </div>
              <p className="text-blue-100 mb-4">
                An organization that is focused on equipping African youths with the knowledge and needed skills in the
                tech space.
              </p>
              <p className="text-sm text-blue-200">© 2025 Aeroverse Academy. All rights reserved.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/partnership" className="hover:text-white transition-colors">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-blue-100">
                <li>info@aeroverse.africa</li>
                <li>+234 707 109 7262</li>
                <li>+234 707 072 4286</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
