import { CoursePageTemplate } from "@/components/course-page-template"

export default function AutomationPage() {
  const courseData = {
    title: "Become an Automation Specialist",
    description:
      "Master process automation, RPA, and workflow optimization. Learn to streamline business processes using cutting-edge automation tools and programming techniques.",
    duration: "5 Months",
    students: "900+",
    icon: "🤖",
    color: "bg-teal-100",
    skills: [
      "Robotic Process Automation (RPA)",
      "Python Automation",
      "Workflow Design",
      "Process Analysis",
      "UiPath & Automation Anywhere",
      "Web Scraping",
      "API Integration",
      "Business Process Optimization",
      "Test Automation",
      "Data Pipeline Automation",
      "AI-Powered Automation",
      "Change Management",
    ],
    curriculum: [
      {
        module: "Automation Fundamentals",
        topics: [
          "Introduction to business process automation",
          "Process analysis and optimization techniques",
          "Automation tools landscape and selection",
          "ROI calculation and business case development",
        ],
      },
      {
        module: "Robotic Process Automation (RPA)",
        topics: [
          "UiPath platform and development environment",
          "Building automated workflows and bots",
          "Exception handling and error management",
          "Bot deployment and maintenance",
        ],
      },
      {
        module: "Python for Automation",
        topics: [
          "Python scripting for task automation",
          "Web scraping with BeautifulSoup and Selenium",
          "File and data processing automation",
          "API integration and workflow orchestration",
        ],
      },
      {
        module: "Advanced Automation Techniques",
        topics: [
          "AI and machine learning in automation",
          "Document processing and OCR automation",
          "Database automation and ETL processes",
          "Test automation frameworks and strategies",
        ],
      },
      {
        module: "Implementation & Management",
        topics: [
          "Automation project management",
          "Change management and user adoption",
          "Governance and compliance in automation",
          "Scaling automation across organizations",
        ],
      },
    ],
    careerPaths: [
      "Automation Specialist",
      "RPA Developer",
      "Process Improvement Analyst",
      "Automation Consultant",
      "Business Process Analyst",
      "Automation Architect",
    ],
    prerequisites: [
      "Analytical thinking and problem-solving skills",
      "Basic understanding of business processes",
      "Some programming experience preferred but not required",
      "Commitment to dedicate 12-15 hours per week for learning",
    ],
  }

  return <CoursePageTemplate {...courseData} />
}
