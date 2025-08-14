"use client"
import { SharedHeader } from "@/components/shared-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Mail, Users } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SharedHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-4">
              Account Successfully Created!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to Aeroverse Academy! Your journey to becoming a tech professional starts now.
            </p>
          </div>

          {/* Success Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What's Next Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#5A68B0] rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What's Next?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#5A68B0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access your personalized dashboard</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#5A68B0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complete your profile setup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#5A68B0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Browse available courses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#5A68B0] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Connect with your mentor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#ED1F24] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Support</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ED1F24] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Join our WhatsApp community</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ED1F24] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Schedule a call with our team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ED1F24] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access our help center</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ED1F24] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Connect with fellow students</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Email Verification Notice */}
          <Card className="border-0 shadow-lg bg-blue-50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Check Your Email</h4>
                  <p className="text-gray-600 text-sm">
                    We've sent a verification email to your inbox. Please verify your email address to complete your
                    account setup and access all features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <Link href="/dashboard">
              <Button className="bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white px-8 py-3 text-lg font-medium">
                Go to Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <div>
              <Link href="/login" className="text-[#5A68B0] hover:underline font-medium">
                Or sign in to your account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
