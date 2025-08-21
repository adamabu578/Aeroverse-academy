import { TrendingUp, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    number: "150+",
    label: "Aeroverse Academy Learners",
    icon: Users,
    description: "Active learners across Africa",
  },
  {
    number: "50",
    label: "Graduates",
    icon: Award,
    description: "Successfully completed programs",
  },
  {
    number: "30",
    label: "Career Placements",
    icon: TrendingUp,
    description: "Learners placed in jobs",
  },
  {
    number: "10",
    label: "Countries",
    icon: Globe,
    description: "Countries represented",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">More Opportunity. More Impact.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Explore the Companies Investing in our Talent</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="/assets/alx-africa.png" alt="Partner company" className="h-8" />
            <img src="/assets/axia-logo.jpg" alt="Partner company" className="h-8" />
            <img src="/assets/tech-studio.png" alt="Partner company" className="h-8" />
            <img src="/assets/semicolon.png" alt="Partner company" className="h-8" />
            <img src="/assets/axia-logo.jpg" alt="Partner company" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
