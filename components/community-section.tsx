import { Button } from "@/components/ui/button"

export function CommunitySection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/assets/africa-pple.jpg"
              alt="Aeroversrse-academy community"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Join a Community
              <br />
              that Has Your Back
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Experience the power of community-driven learning with over 285,000 learners across Africa. Connect with
              peers, share knowledge, and build lasting professional relationships that will support your career growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our community spans across multiple countries, creating opportunities for collaboration, mentorship, and
              career advancement that transcend geographical boundaries.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-red-500 rounded"></div>
                <span className="text-sm font-medium">Mastercard Foundation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Follow Us on #Aeroverse-academy</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Ready to Get Started?</Button>
        </div>
      </div>
    </section>
  )
}
