export function AdvantageSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Aeroverse-academy Advantage</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Aeroverse-academy, we believe that everyone deserves access to quality education and the opportunity to build a
                successful career. Our programs are designed to be practical, relevant, and accessible to learners
                across Africa.
              </p>
              <p>
                Through our peer-to-peer learning model, you'll collaborate with fellow learners, share knowledge, and
                build lasting professional relationships that will support your career growth.
              </p>
              <p>
                Join Aeroverse-academy to unlock your potential, learn from industry experts, and become part of a thriving community
                of African leaders.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/group.jpg"
              alt="Students collaborating"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
