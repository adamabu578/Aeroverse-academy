"use client"

import { CheckCircle, Mail, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SubmissionSuccessPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2348123456789" // Replace with actual WhatsApp business number
    const message = "Hi! I just submitted my course application and would like to proceed with payment."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5A68B0] via-[#4a5a9e] to-[#ED1F24] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
        <CardContent className="p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h1>

          <p className="text-gray-600 mb-8">
            Thank you for your interest in our tech courses. Your application has been received and is being processed.
          </p>

          {/* Next Steps */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Mail className="w-5 h-5 text-[#5A68B0]" />
              <span className="text-sm text-gray-700">Check your email for confirmation</span>
            </div>

            <div
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center space-x-3 p-4 bg-red-50 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#ED1F24]" />
              <span className="text-sm text-gray-700">Check WhatsApp for payment details</span>
            </div>
          </div>

          {/* Payment Notice */}
          <div className="bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] text-white p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Next Step: Payment</h3>
            <p className="text-sm">
              You will receive payment instructions via email and WhatsApp within the next few minutes.
            </p>
          </div>

          <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact us on WhatsApp
          </Button>

          {/* Action Button */}
          <Button
            onClick={() => (window.location.href = "/course")}
            className="w-full bg-gradient-to-r from-[#5A68B0] to-[#ED1F24] hover:from-[#4a5a9e] hover:to-[#d11b20] text-white"
          >
            Back to Courses
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          {/* Contact Info */}
          <p className="text-xs text-gray-500 mt-6">Need help? Contact us at support@teched.com</p>
        </CardContent>
      </Card>
    </div>
  )
}
