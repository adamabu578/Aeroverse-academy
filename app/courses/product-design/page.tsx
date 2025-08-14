import { CoursePageTemplate } from "@/components/course-page-template"

export default function ProductDesignPage() {
  const courseData = {
    title: "Become a Product Designer",
    description:
      "Master user-centered design principles and create intuitive, beautiful digital experiences. Learn UX/UI design, prototyping, and design systems to craft products users love.",
    duration: "5 Months",
    students: "2,100+",
    icon: "🎨",
    color: "bg-pink-100",
    skills: [
      "User Experience (UX)",
      "User Interface (UI)",
      "Design Thinking",
      "Wireframing",
      "Prototyping",
      "Figma & Adobe XD",
      "User Research",
      "Design Systems",
      "Interaction Design",
      "Visual Design",
      "Usability Testing",
      "Design Strategy",
    ],
    curriculum: [
      {
        module: "Design Fundamentals",
        topics: [
          "Introduction to product design",
          "Design thinking methodology",
          "Visual design principles and typography",
          "Color theory and composition",
        ],
      },
      {
        module: "User Experience Design",
        topics: [
          "User research and persona development",
          "Information architecture and user flows",
          "Wireframing and low-fidelity prototyping",
          "Usability testing and iteration",
        ],
      },
      {
        module: "User Interface Design",
        topics: [
          "Visual design and brand consistency",
          "High-fidelity mockups and prototypes",
          "Responsive design principles",
          "Accessibility and inclusive design",
        ],
      },
      {
        module: "Design Tools & Systems",
        topics: [
          "Mastering Figma and design tools",
          "Creating and maintaining design systems",
          "Component libraries and style guides",
          "Design handoff and developer collaboration",
        ],
      },
      {
        module: "Advanced Design Concepts",
        topics: [
          "Interaction design and micro-animations",
          "Mobile-first and responsive design",
          "Design strategy and business impact",
          "Portfolio development and presentation",
        ],
      },
    ],
    careerPaths: [
      "Product Designer",
      "UX Designer",
      "UI Designer",
      "Senior Product Designer",
      "Design Lead",
      "Head of Design",
    ],
    prerequisites: [
      "Creative mindset and attention to detail",
      "Basic understanding of design principles",
      "No prior design experience required",
      "Commitment to dedicate 12-15 hours per week for learning",
    ],
  }

  return <CoursePageTemplate {...courseData} />
}
