import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Award, Briefcase, Brain, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Become a</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#5A68B0]">Cybersecurity Engineer</span> in 5 months learning and 4 months of
            guaranteed internship
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            The cybersecurity program is taught by prominent experts in the tech industry and created as an introductory
            and research phase approach, taking you through your career journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white px-8 py-3 text-lg">
              <Link href="/apply">Enroll Now</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#5A68B0] text-[#5A68B0] hover:bg-[#5A68B0] hover:text-white px-8 py-3 text-lg bg-transparent"
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
              alt="Cybersecurity professional working"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#5A68B0] rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#ED1F24] rounded-full"></div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Cybersecurity team collaboration"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ED1F24] rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#5A68B0] rounded-full"></div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#5A68B0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-[#5A68B0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Mentorship</h3>
            <p className="text-sm text-gray-600">Personal guidance</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#5A68B0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-[#5A68B0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">5 months</h3>
            <p className="text-sm text-gray-600">Intensive learning</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#5A68B0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-[#5A68B0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Certification</h3>
            <p className="text-sm text-gray-600">Industry recognized</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#5A68B0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Briefcase className="w-6 h-6 text-[#5A68B0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Internship</h3>
            <p className="text-sm text-gray-600">Guaranteed placement</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#5A68B0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-[#5A68B0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">AI dashboard</h3>
            <p className="text-sm text-gray-600">Personalized learning</p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="bg-[#ED1F24]/10 text-[#ED1F24] mb-4">What you'll learn</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From idea to execution</h2>
              <p className="text-gray-600 mb-8">
                Our 9-month program is designed to take you from novice to job-ready professional.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Understand key cybersecurity concepts</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Identify and mitigate risks</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Implement security practices</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Use authentication mechanisms</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Be job ready for Cyber-security internships and Cyber-security entry roles
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5A68B0] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure digital communications</h4>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">Learn and practice with the best tools</Badge>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">OZ</span>
                    </div>
                    <span className="font-medium text-gray-900">OWASP Zap</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">OD</span>
                    </div>
                    <span className="font-medium text-gray-900">OWASP DVWA</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">GM</span>
                    </div>
                    <span className="font-medium text-gray-900">Google Meet</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">GF</span>
                    </div>
                    <span className="font-medium text-gray-900">Google Forms</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">N</span>
                    </div>
                    <span className="font-medium text-gray-900">Notion</span>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">GD</span>
                    </div>
                    <span className="font-medium text-gray-900">Google Docs</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn by Doing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">How you will learn</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn by Doing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master cybersecurity through practical applications and real-world insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <Card className="p-6 bg-pink-50 border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual live class experience</h3>
                <p className="text-gray-600 mb-4">
                  Engage in interactive, real-time sessions with top cybersecurity professionals, ask questions, and
                  gain industry insights.
                </p>
                <p className="text-sm text-gray-500">
                  This mirrors the experience of in-person learning, ensuring that you feel connected and engaged
                  throughout your course.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="p-6 bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert mentorship</h3>
                <p className="text-gray-600 mb-4">
                  Learn from seasoned cybersecurity professionals who provide guidance, feedback, and career insights to
                  accelerate your growth.
                </p>
                <p className="text-sm text-gray-500">
                  This provides industry insights and best practices to help you excel in the competitive cybersecurity
                  field.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="p-6 bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-on capstone projects</h3>
                <p className="text-gray-600 mb-4">
                  Apply your skills to real-world cybersecurity challenges, building a strong portfolio and gaining
                  practical experience.
                </p>
                <p className="text-sm text-gray-500">
                  Completing these projects helps you build job-ready portfolios that demonstrate your ability to solve
                  complex problems.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="p-6 bg-green-50 border-green-200 hover:shadow-lg transition-shadow lg:col-start-1">
              <CardContent className="p-0">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-integrated dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Get tailored learning insights, AI-powered feedback, and smart tracking to enhance your progress.
                </p>
                <p className="text-sm text-gray-500">
                  This intelligent system elevates your learning experience, improves continuously, and makes the most
                  of your learning journey.
                </p>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="p-6 bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow lg:col-start-2">
              <CardContent className="p-0">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certification on completion</h3>
                <p className="text-gray-600 mb-4">
                  Earn an industry-recognized certificate that validates your skills and enhances your career prospects.
                </p>
                <p className="text-sm text-gray-500">
                  Apply your skills to real-world cybersecurity challenges, building a strong portfolio and gaining
                  practical experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#ED1F24]/10 text-[#ED1F24] mb-4">Accreditation</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accredited for excellence</h2>
              <p className="text-gray-600 mb-6">
                Aeroverse Academy is proudly accredited by the Association for Career and Technical Development (ACTD),
                ensuring its programs meet global industry standards. This guarantees that students receive
                high-quality, industry-relevant education that is recognized by employers and professionals worldwide.
              </p>
              <Button asChild className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">
                <Link href="/apply">Apply now →</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="ACTD Accreditation Certificate"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5A68B0] rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#ED1F24] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=350"
                alt="Globally Recognized Certificate"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#ED1F24] rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#5A68B0] rounded-full"></div>
            </div>
            <div>
              <Badge className="bg-[#5A68B0]/10 text-[#5A68B0] mb-4">Certification</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Globally recognized certification</h2>
              <p className="text-gray-600 mb-6">
                Upon completing the program, you'll receive an industry-recognized certificate from Aeroverse Academy,
                accredited by ACTD. This certification validates your expertise in cybersecurity and enhances your
                credibility with employers, giving you a competitive edge in the job market.
              </p>
              <Button asChild className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">
                <Link href="/apply">Apply now →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#5A68B0] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cybersecurity Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have transformed their careers with our comprehensive cybersecurity program.
          </p>
          <Button asChild size="lg" className="bg-white text-[#5A68B0] hover:bg-gray-100">
            <Link href="/apply">Enroll Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5A68B0] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">Aeroverse Academy</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                An organization that is focused on equipping African youths with the knowledge and skills needed in the
                tech space.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/about" className="hover:opacity-100">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:opacity-100">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:opacity-100">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:opacity-100">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@aeroverseacademy.com</li>
                <li>+234 707 109 7262</li>
                <li>+234 707 072 4286</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
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
