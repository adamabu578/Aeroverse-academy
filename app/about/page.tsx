import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#5A68B0] rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Aeroverse Academy - Empowering the Next Generation of Tech Talent
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are on a mission to bridge the tech skills gap in Africa through quality education, practical
                training, and real-world experience. Our programs are designed to equip you with job-ready skills that
                employers are looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#5A68B0] text-white mb-4">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our focus is on equipping African youth
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aeroverse Academy is an organization that is focused on equipping African youths with the knowledge and
                digital skills needed today. Our aim is to make tech knowledge, skills, and opportunities accessible to
                everyone regardless of age and location. We are looking forward to building a strong community of
                ready-to-work personnel and employable graduates around the world in the tech space.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Diverse team of professionals"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5A68B0] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#ED1F24] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTD Certification Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="ACTD Accredited Certificate"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <Badge className="bg-[#ED1F24] text-white mb-4">Accredited and Recognized Globally</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ACTD-Accredited Certification</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are fully accredited by ACTD (Association for Career & Technical Development), ensuring that our
                training meets global industry standards. Our certification is recognized by employers worldwide, giving
                you a competitive edge in the job market.
              </p>
              <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Apply now →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Learning Period */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#5A68B0] text-white mb-4">5+ Months of Virtual Live Classes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Extended Learning Period (5 Months) - Master Your Skills
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We don't just rush through the basics. Our 5-month training phase allows students to deeply understand
                their chosen field, explore advanced concepts, and build a strong foundation for their careers.
              </p>
              <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Apply now →</Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Student learning"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ED1F24] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Embedded Learning Platform */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="AI Learning Platform"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#5A68B0] rounded-full opacity-20"></div>
            </div>
            <div>
              <Badge className="bg-[#ED1F24] text-white mb-4">AI Embedded Learning platform</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Personalized AI-Embedded Learning Platform
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our platform is smart, adaptive, and designed for YOU. Our AI-powered learning dashboard gives each
                student a personalized learning path, real-time feedback, and content tailored to their pace and
                style—making learning more efficient and engaging.
              </p>
              <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Apply now →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Guaranteed */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#5A68B0] text-white mb-4">4+ Months of Virtual Live Classes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Internship Guaranteed (4 Months) - Gain Real-World Experience
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Learning is just the beginning! Our unique internship simulation prepares you for the workplace by
                letting you apply your skills in real-life tech projects. This hands-on experience builds your
                confidence and portfolio and increases your chances of getting hired.
              </p>
              <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Apply now →</Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Internship Experience"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ED1F24] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Payment Plans */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Flexible Payment"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#5A68B0] rounded-full opacity-20"></div>
            </div>
            <div>
              <Badge className="bg-[#ED1F24] text-white mb-4">5+ Months of Virtual Live Classes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Flexible Payment Plans 💰</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe finances shouldn't be a barrier to learning. That's why we offer affordable and flexible
                payment options, allowing you to invest in your future without breaking the bank.
              </p>
              <Button className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">Apply now →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#5A68B0] to-[#4A5BA0] rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Accelerate your career with Job-ready tech skills.</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have found amazing career opportunities in the tech space by learning tech
            skills in demand.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-white rounded-full border-2 border-[#5A68B0]"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-[#5A68B0]"></div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-[#5A68B0]"></div>
                  <div className="w-10 h-10 bg-gray-400 rounded-full border-2 border-[#5A68B0]"></div>
                </div>
              </div>
              <p className="text-2xl font-bold">5,000+</p>
              <p className="opacity-90">Graduates and Counting</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4 space-x-2">
                <div className="w-8 h-6 bg-green-500 rounded"></div>
                <div className="w-8 h-6 bg-red-500 rounded"></div>
                <div className="w-8 h-6 bg-yellow-500 rounded"></div>
                <div className="w-8 h-6 bg-blue-500 rounded"></div>
              </div>
              <p className="text-2xl font-bold">15+</p>
              <p className="opacity-90">Countries across Africa and beyond</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12" />
              </div>
              <p className="text-2xl font-bold">Globally recognized</p>
              <p className="opacity-90">certification</p>
              <div className="mt-2">
                <Badge className="bg-white text-[#5A68B0]">
                  Accredited by AMERICAN COUNCIL OF TRAINING AND DEVELOPMENT (ACTD)
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#5A68B0] hover:bg-gray-100">
              <Link href="/apply">Enroll Now</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#5A68B0] bg-transparent"
            >
              Take quiz →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQ) 🤔</h2>
            <p className="text-lg text-gray-600">
              We know you might have some questions about Aeroverse Academy, our programs, and how we help you build a
              successful tech career.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#5A68B0]">
                What makes Aeroverse Academy different from other tech training programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Aeroverse Academy offers a unique combination of 5-month intensive learning, guaranteed 4-month
                internship, AI-powered personalized learning platform, and ACTD accreditation. Our focus on practical,
                job-ready skills and real-world experience sets us apart.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#5A68B0]">
                Will there be a certification after completing the program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes! You'll receive a globally recognized certification accredited by ACTD (Association for Career &
                Technical Development), which is valued by employers worldwide and gives you a competitive edge in the
                job market.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#5A68B0]">
                How many days a week are classes held?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Our virtual live classes are held 3-4 times per week, with additional self-paced learning through our
                AI-integrated platform. This flexible schedule allows you to balance learning with other commitments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#5A68B0]">
                Will there be internship opportunities?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                We guarantee a 4-month internship simulation where you'll work on real-world projects, build your
                portfolio, and gain practical experience that employers value.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#5A68B0]">
                Do I need any prior experience to enroll?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                No prior experience is required! Our programs are designed to take you from complete beginner to
                job-ready professional. We start with the fundamentals and gradually build up your skills.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#ED1F24] text-white mb-4">Testimonials and Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Stories, Real Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our graduates who have transformed their lives and launched
              successful tech careers with Aeroverse Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Somtochukwu moneme</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thrilled to be swimming with the big fishes now. I dedicated my extended weekend to catching up with the
                SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and
                mastering the fundamentals of data manipulation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Okpalaeze Joy</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                It has been an amazing tech journey with one of the best tutor ever @aeroverse. I was scared of so many
                things at first, but now I know I could even cope but now so far so good. Thank you, Aeroverse Academy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Techbaby</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                As a transitioning medical student into tech I will be lying if I say my decision from @aeroverse isn't
                something that gave me joy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">dedeIapoo001</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                It's not even a month since I never thought I'd be programming but here I am. The talk of learning is so
                down with @aeroverse as a SWES. I had to learn.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Somtochukwu moneme</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thrilled to be swimming with the big fishes now. I dedicated my extended weekend to catching up with the
                SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and
                mastering the fundamentals of data manipulation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Okpalaeze Joy</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                It has been an amazing tech journey with one of the best tutor ever @aeroverse. I was scared of so many
                things at first, but now I know I could even cope but now so far so good. Thank you, Aeroverse Academy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Techbaby</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                As a transitioning medical student into tech I will be lying if I say my decision from @aeroverse isn't
                something that gave me joy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">dedeIapoo001</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                It's not even a month since I never thought I'd be programming but here I am. The talk of learning is so
                down with @aeroverse as a SWES. I had to learn.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Students in learning environment"
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch with Aeroverse Academy</h2>
          <p className="text-lg text-gray-600 mb-8">Ready to start your tech journey? Contact us today!</p>
          <Button asChild className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white px-8 py-3">
            <Link href="/apply">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5A68B0] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">Aeroverse Academy</span>
              </div>
              <p className="text-sm opacity-90 mb-4">
                An organization that is focused on equipping African youths with the knowledge and digital skills needed
                in the tech space.
              </p>
              <p className="text-sm opacity-75">©2025 Aeroverse Academy. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-90">
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
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>info@aeroverse.academy</li>
                <li>+234 707 109 7262</li>
                <li>+234 707 072 4286</li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">© 2025 Aeroverse Academy. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
