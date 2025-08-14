import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Palette,
  Users,
  BarChart3,
  Shield,
  Code,
  Server,
  Smartphone,
  Cloud,
  Bot,
  Database,
  PenTool,
  Trophy,
  GraduationCap,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const programs = [
    {
      title: "Product Design",
      description:
        "Master user experience design through real-world projects and case studies. Learn the tools, frameworks, and design mindset used by today's best designers and start creating experiences users love.",
      icon: Palette,
      slug: "product-design",
    },
    {
      title: "Product Management",
      description:
        "Build strong foundations in product strategy, user research, roadmapping, and stakeholder management through real-world projects and case studies from Spotify, Paystack, and Amazon. Lead teams. Own impact. Drive products that matter.",
      icon: Users,
      slug: "product-management",
    },
    {
      title: "Data Analytics",
      description:
        "Learn Excel, SQL, Power BI, and storytelling with data using real data from companies like Google, Audit and Netflix. Master the tools that drive smart business decisions.",
      icon: BarChart3,
      slug: "data-analysis",
    },
    {
      title: "Cybersecurity",
      description:
        "Build strong foundations in product strategy, user research, roadmapping, and stakeholder management. Learn to lead teams and manage digital products from ideation to execution.",
      icon: Shield,
      slug: "cyber-security",
    },
    {
      title: "Frontend Development",
      description:
        "Master modern web development by working on projects inspired by YouTube, Canva, and Figma. Code what users see and love Smart business decisions.",
      icon: Code,
      slug: "frontend-development",
    },
    {
      title: "Backend Development",
      description:
        "Build strong foundations in product strategy, user research, roadmapping, and stakeholder management. Learn to lead teams and manage digital products from ideation to execution.",
      icon: Server,
      slug: "backend-development",
    },
    {
      title: "Mobile Development",
      description:
        "Build strong foundations in product strategy, user research, roadmapping, and stakeholder management. Learn to lead teams and manage digital products from ideation to execution.",
      icon: Smartphone,
      slug: "mobile-development",
    },
    {
      title: "DevOps/Cloud Computing",
      description:
        "Build strong foundations in product strategy, user research, roadmapping, and stakeholder management. Learn to lead teams and manage digital products from ideation to execution.",
      icon: Cloud,
      slug: "devops-cloud-computing",
    },
    {
      title: "AI Automation",
      description:
        "Build strong foundations in product strategy, user research, roadmapping, and stakeholder management. Learn to lead teams and manage digital products from ideation to execution.",
      icon: Bot,
      slug: "automation",
    },
    {
      title: "Data Science",
      description:
        "Predict the future with data. Learn Python, machine learning, and advanced analytics through real case studies from Tesla, Flutterwave, and Amazon. Solve problems. Drive innovation. Think deeper.",
      icon: Database,
      slug: "data-science",
    },
    {
      title: "Content Creation",
      description:
        "Build strong foundations in product strategy, user research, roadmapping, and stakeholder management. Learn to lead teams and manage digital products from ideation to execution.",
      icon: PenTool,
      slug: "content-creation",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <SharedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Built for Africans. Taught by Africans. <span className="text-[#5A68B0]">Empowering Africa.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are raising a new wave of African tech talent, one skill, one class, one success story at a time.
                Learn high-demand skills like <span className="font-semibold text-[#5A68B0]">Data Analysis</span>,{" "}
                <span className="font-semibold text-[#5A68B0]">Data Science</span>,{" "}
                <span className="font-semibold text-[#5A68B0]">Cybersecurity</span>,{" "}
                <span className="font-semibold text-[#5A68B0]">Product Design</span>,{" "}
                <span className="font-semibold text-[#5A68B0]">Software Development (Frontend & Backend)</span> and more
                through mentor-led, internship-backed programs.
              </p>
            </div>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="African tech professional"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ED1F24] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#5A68B0] rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Where African Talent Meets Global Tech
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Aeroverse Academy, we're not just building skills we're building futures. We are an EdTech platform
              focused on giving Africans real access to high-demand tech education, hands-on experience, and
              career-aligned mentorship.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Students collaborating on tech projects"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Programs we offer:</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#5A68B0] to-[#4A5BA0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                    </div>

                    <Link href={`/courses/${program.slug}`}>
                      <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                        Enroll Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Aeroverse Academy Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Aeroverse Academy for Your Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Investing in your education is one of the most impactful decisions you can make for your career
              advancement and financial independence. At Aeroverse Academy, we provide not only the resources but also
              the guidance and support you need to thrive in your chosen field.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Globally Recognized Certificate</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our certificates are recognized globally and worldwide. Our programs are accredited by the American
                    Council of Training and Development (ACTD), ensuring our programs meet global industry standards.
                    This guarantees that students receive high-quality, industry-relevant education that is respected in
                    the U.S., Canada, the U.K., Europe, and beyond Africa.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Guaranteed Internship After Learning</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We don't just teach you skills, we connect you to real-world experience. Complete your program
                    successfully, and we guarantee you'll be matched with trusted companies across Africa and beyond.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Becoming an Innovator (Future Ready)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We don't just teach you to follow; we prepare you to lead. Our programs equip you with the mindset,
                    skills, and tools to create solutions, drive change, and build the future. Join a network. Join a
                    community of future founders shaping Africa's digital future.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Now Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apply Now, Our representative will reach out to you
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Begin your tech journey and expand your career opportunities in the tech space by learning from skills in
              demand.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
                Join our whatsapp community
              </Button>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="e.g John Doe" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input placeholder="e.g johnsmith@gmail.com" type="email" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input placeholder="e.g 080-0000-000" type="tel" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((program) => (
                          <SelectItem key={program.slug} value={program.slug}>
                            {program.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-[#5A68B0] hover:bg-[#4A5BA0] text-white h-12 text-lg font-semibold">
                    Submit
                  </Button>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="text-[#5A68B0] border-[#5A68B0] hover:bg-[#5A68B0] hover:text-white bg-transparent"
                    >
                      Visit Website Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Stories Testimonials Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#5A68B0] font-semibold mb-2">Testimonials and Success Stories</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Real Stories, Real Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from our graduates who have transformed their lives and launched
              successful tech careers with Aeroverse Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Somtochukwu moneme",
                text: "Thrilled to be swimming with the big fishes now. I dedicated my extended weekend to catching up with the SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and mastering the fundamentals of data manipulation.",
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
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Somtochukwu moneme",
                text: "Thrilled to be swimming with the big fishes now. I dedicated my extended weekend to catching up with the SQL classes at Aeroverse Academy Data Analytics with Prince O., diving into the world of SQL and mastering the fundamentals of data manipulation.",
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
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="relative max-w-2xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Students working together"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Our Learners Work Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Where our learners work</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Our graduates go on to join some of the most innovative teams in the tech industry—making real impact from
            day one
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center">
              {[
                { name: "Company 1", color: "bg-blue-500" },
                { name: "Company 2", color: "bg-green-500" },
                { name: "Company 3", color: "bg-purple-500" },
                { name: "Company 4", color: "bg-red-500" },
                { name: "Company 5", color: "bg-yellow-500" },
                { name: "Company 6", color: "bg-indigo-500" },
                { name: "Company 7", color: "bg-pink-500" },
                { name: "Company 8", color: "bg-teal-500" },
                { name: "Company 9", color: "bg-orange-500" },
                { name: "Company 10", color: "bg-cyan-500" },
                { name: "Company 11", color: "bg-lime-500" },
                { name: "Company 12", color: "bg-rose-500" },
              ].map((company, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 ${company.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-sm">{company.name.charAt(0)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[#5A68B0] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Start Your Tech Journey?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join thousands of Africans who have transformed their careers with Aeroverse Academy. Contact us today to
              begin your journey to becoming a tech professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-white text-[#5A68B0] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Apply Now
                </Button>
              </Link>
              <div className="text-white">
                <p className="font-semibold">Email: info@aeroverseacademy.com</p>
                <p className="font-semibold">Phone: +234 707 109 7262</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A5BA0] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#5A68B0] font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold">Aeroverse Academy</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                An organization that is focused on equipping African youths with the knowledge and skills needed in the
                tech space.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-blue-100 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors">
                  Community
                </Link>
                <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors">
                  Partnership
                </Link>
                <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2 text-sm">
                <p className="text-blue-100">info@aeroverseacademy.com</p>
                <p className="text-blue-100">+234 707 109 7262</p>
                <p className="text-blue-100">+234 707 072 4286</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400 mt-8 pt-8 text-center">
            <p className="text-blue-100 text-sm">© 2025 Aeroverse Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
