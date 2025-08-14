import { CoursePageTemplate } from "@/components/course-page-template"

export default function ContentCreationPage() {
  const courseData = {
    title: "Become a Content Creator",
    description:
      "Master digital storytelling, video production, and social media marketing. Learn to create engaging content that builds audiences and drives business results across all platforms.",
    duration: "5 Months",
    students: "3,200+",
    icon: "🎬",
    color: "bg-yellow-100",
    skills: [
      "Video Production & Editing",
      "Social Media Marketing",
      "Content Strategy",
      "Copywriting & Storytelling",
      "Graphic Design",
      "Photography",
      "SEO & Content Optimization",
      "Brand Development",
      "Analytics & Performance",
      "Influencer Marketing",
      "Live Streaming",
      "Monetization Strategies",
    ],
    curriculum: [
      {
        module: "Content Creation Fundamentals",
        topics: [
          "Understanding digital content landscape",
          "Content strategy and planning",
          "Audience research and persona development",
          "Brand voice and storytelling techniques",
        ],
      },
      {
        module: "Visual Content Creation",
        topics: [
          "Photography basics and composition",
          "Graphic design with Canva and Adobe Creative Suite",
          "Video production and cinematography",
          "Video editing with Premiere Pro and Final Cut",
        ],
      },
      {
        module: "Social Media Mastery",
        topics: [
          "Platform-specific content strategies",
          "Community building and engagement",
          "Social media advertising and promotion",
          "Influencer collaboration and partnerships",
        ],
      },
      {
        module: "Content Marketing & SEO",
        topics: [
          "Blog writing and long-form content",
          "SEO optimization for content",
          "Email marketing and newsletters",
          "Content distribution and amplification",
        ],
      },
      {
        module: "Monetization & Analytics",
        topics: [
          "Content monetization strategies",
          "Sponsorship and brand partnerships",
          "Analytics and performance measurement",
          "Building sustainable content businesses",
        ],
      },
    ],
    careerPaths: [
      "Content Creator",
      "Social Media Manager",
      "Digital Marketing Specialist",
      "Video Producer",
      "Brand Strategist",
      "Influencer Marketing Manager",
    ],
    prerequisites: [
      "Creative mindset and passion for storytelling",
      "Basic understanding of social media platforms",
      "Strong communication and writing skills",
      "Commitment to dedicate 10-15 hours per week for learning",
    ],
  }

  return <CoursePageTemplate {...courseData} />
}
