import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "hafsa Abubakar",
    role: "Software Developer",
    image: "/placeholder.svg?height=80&width=80",
    content: "Aeroverse-academy transformed my career completely. The hands-on approach and peer learning made all the difference.",
    rating: 5,
  },
  {
    name: "ibrahim Musa",
    role: "Data Analyst",
    image: "/placeholder.svg?height=80&width=80",
    content: "The community support and mentorship at Aeroverse-academy helped me land my dream job in tech.",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "UX Designer",
    image: "/placeholder.svg?height=80&width=80",
    content: "I gained practical skills that I use every day in my role. ALX prepared me for real-world challenges.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Learners Love Aeroverse-academy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of successful graduates who have transformed their careers through ALX programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
