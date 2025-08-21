import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const paths = [
  {
    title: "TECH PROFESSIONAL PATHWAY",
    description:
      "Build your career in tech with hands-on projects and industry mentorship. Learn programming, data science, and software development.",
    image: "/assets/tech-pro.jpg",
    bgColor: "bg-gradient-to-br from-primary to-primary/80",
    buttonColor: "bg-white text-primary hover:bg-gray-100",
  },
  {
    title: "SALES PROFESSIONAL PATHWAY",
    description:
      "Master the art of sales with proven strategies and techniques. Build relationships, close deals, and grow your sales career.",
    image: "/assets/sales-pro.jpg",
    bgColor: "bg-gradient-to-br from-primary/90 to-primary",
    buttonColor: "bg-white text-primary hover:bg-gray-100",
  },
  {
    title: "EXPLORE OUR FULL RANGE OF PROGRAMS",
    description:
      "Discover all our programs designed to help you build the skills you need for a successful career in the digital economy.",
    image: "/assets/sucess-career.jpg",
    bgColor: "bg-gradient-to-br from-primary to-accent",
    buttonColor: "bg-white text-primary hover:bg-gray-100",
  },
]

export function PathsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path to Success</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paths.map((path, index) => (
            <Card key={index} className={`${path.bgColor} text-white border-0 overflow-hidden`}>
              <CardHeader className="p-0">
                <img src={path.image || "/placeholder.svg"} alt={path.title} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-lg leading-tight">{path.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{path.description}</p>
                <Button className={path.buttonColor}>LEARN MORE</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/90 mb-4">Explore Our Full Range of Programs.</p>
        </div>
      </div>
    </section>
  )
}
