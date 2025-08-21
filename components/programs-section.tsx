import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

const programs = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    image: "/assets/graphics.jpg",
    category: "DESIGN",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    image: "/assets/content.jpg",
    category: "MEDIA",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    image: "/assets/data-engine.jpg",
    category: "TECH",
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    image: "/assets/virtual-assistant.jpg",
    category: "BUSINESS",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Most Popular Programs</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant="outline"
              size="sm"
              className="bg-primary text-primary-foreground border-primary hover:bg-primary/90"
            >
              ALL
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              TECH
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              BUSINESS
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              DESIGN
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              SALES
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow border-primary/20 max-w-sm mx-auto"
            >
              <CardHeader className="p-0">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-32 object-cover"
                />
              </CardHeader>
              <CardContent className="p-3">
                <h3 className="font-semibold text-base mb-2 text-primary">{program.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Master the skills needed to excel in {program.title.toLowerCase()}
                  and build a successful career.
                </p>
              </CardContent>
              <CardFooter className="p-3 pt-0 flex flex-col gap-2">
                <Link href="/course" className="w-full">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-sm py-2">
                    APPLY NOW
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-sm py-2"
                >
                  LEARN MORE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center space-x-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">View All Programs</Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            See All Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
