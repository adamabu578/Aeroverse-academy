import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { AdvantageSection } from "@/components/advantage-section"
import { PathsSection } from "@/components/paths-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <AdvantageSection />
        <PathsSection />
        <TestimonialsSection />
        <StatsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
