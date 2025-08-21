"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, CheckCircle, User, Mail, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const courseData = {
  "graphic-design": {
    title: "Graphic Design Mastery",
    price: 299,
    duration: "12 weeks",
  },
  "content-creation": {
    title: "Content Creation Excellence",
    price: 249,
    duration: "10 weeks",
  },
  "data-engineering": {
    title: "Data Engineering Bootcamp",
    price: 499,
    duration: "16 weeks",
  },
  "virtual-assistant": {
    title: "Virtual Assistant Professional",
    price: 199,
    duration: "8 weeks",
  },
}

export default function PaymentPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [applicationData, setApplicationData] = useState<any>(null)
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    paymentMethod: "card",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const course = courseData[params.id as keyof typeof courseData]

  useEffect(() => {
    const storedData = localStorage.getItem("applicationData")
    if (storedData) {
      setApplicationData(JSON.parse(storedData))
    }
  }, [])

  if (!course || !applicationData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-4">No application data found.</p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Store enrollment data
      const enrollmentData = {
        ...applicationData,
        paymentData,
        enrollmentDate: new Date().toISOString(),
        status: "enrolled",
      }
      localStorage.setItem("enrollmentData", JSON.stringify(enrollmentData))
      localStorage.removeItem("applicationData")

      router.push(`/enrollment-success/${params.id}`)
    }, 3000)
  }

  const subtotal = course.price
  const processingFee = Math.round(course.price * 0.03)
  const total = subtotal + processingFee

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Complete Your Payment</h1>
          <p className="text-white/90 mt-2">Secure your spot in {course.title}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.duration} program</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Course Fee</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Processing Fee</span>
                    <span>${processingFee}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total}</span>
                </div>
              </CardContent>
            </Card>

            {/* Student Information */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-primary">Student Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    {applicationData.firstName} {applicationData.lastName}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{applicationData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{applicationData.phone}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Lock className="h-5 w-5" />
                  Secure Payment
                </CardTitle>
                <p className="text-muted-foreground">Your payment information is encrypted and secure.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <Select onValueChange={(value) => handleInputChange("paymentMethod", value)} defaultValue="card">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {paymentData.paymentMethod === "card" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="cardholderName">Cardholder Name *</Label>
                        <Input
                          id="cardholderName"
                          required
                          value={paymentData.cardholderName}
                          onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            required
                            value={paymentData.cardNumber}
                            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                          <CreditCard className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            required
                            value={paymentData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            required
                            value={paymentData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {paymentData.paymentMethod === "paypal" && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        You will be redirected to PayPal to complete your payment.
                      </p>
                    </div>
                  )}

                  {paymentData.paymentMethod === "bank" && (
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Bank Transfer Details</h4>
                        <div className="text-sm text-blue-800 space-y-1">
                          <p>
                            <strong>Bank:</strong> Aeroverse Academy Bank
                          </p>
                          <p>
                            <strong>Account Number:</strong> 1234567890
                          </p>
                          <p>
                            <strong>Reference:</strong> {params.id.toUpperCase()}-{applicationData.firstName}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>SSL encrypted and secure payment processing</span>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-white"
                    >
                      {isProcessing ? "Processing..." : `Pay $${total}`}
                    </Button>
                    <Link href={`/course/${params.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                        disabled={isProcessing}
                      >
                        Back to Course
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
