// Simple email service using a free email API
// You can replace this with your preferred email service

interface EmailData {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail({ to, subject, html, from = "noreply@aeroverseacademy.com" }: EmailData) {
  // Using a free email service like EmailJS or similar
  // For production, consider using services like Resend, SendGrid, or Mailgun

  try {
    // Example using fetch to a free email service
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          to_email: to,
          subject: subject,
          message: html,
          from_name: "Aeroverse Academy",
        },
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

// Email templates
export const emailTemplates = {
  enrollmentConfirmation: (customerName: string, courseName: string, enrollmentId: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #5A68B0;">Welcome to Aeroverse Academy!</h2>
      <p>Dear ${customerName},</p>
      <p>Thank you for enrolling in <strong>${courseName}</strong>!</p>
      <p>Your enrollment ID is: <strong>${enrollmentId}</strong></p>
      <p>We're excited to have you on this learning journey. You'll receive further instructions about accessing your course materials soon.</p>
      <p>Best regards,<br>The Aeroverse Academy Team</p>
    </div>
  `,

  paymentConfirmation: (customerName: string, courseName: string, amount: number) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #5A68B0;">Payment Confirmed!</h2>
      <p>Dear ${customerName},</p>
      <p>Your payment of $${amount} for <strong>${courseName}</strong> has been successfully processed.</p>
      <p>You now have full access to your course materials. Login to your account to get started!</p>
      <p>Best regards,<br>The Aeroverse Academy Team</p>
    </div>
  `,
}
