import { CoursePageTemplate } from "@/components/course-page-template"

export default function DevOpsCloudComputingPage() {
  const courseData = {
    title: "Become a DevOps Engineer",
    description:
      "Master cloud infrastructure, automation, and continuous deployment. Learn Docker, Kubernetes, AWS, and CI/CD pipelines to streamline software delivery and operations.",
    duration: "5 Months",
    students: "1,300+",
    icon: "☁️",
    color: "bg-gray-100",
    skills: [
      "Cloud Platforms (AWS, Azure, GCP)",
      "Docker & Containerization",
      "Kubernetes Orchestration",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Linux System Administration",
      "Automation & Scripting",
      "Security & Compliance",
      "Performance Optimization",
      "Disaster Recovery",
      "Configuration Management",
    ],
    curriculum: [
      {
        module: "DevOps Fundamentals",
        topics: [
          "Introduction to DevOps culture and practices",
          "Linux system administration basics",
          "Version control with Git and collaboration",
          "Agile and DevOps integration",
        ],
      },
      {
        module: "Cloud Computing",
        topics: [
          "AWS/Azure/GCP core services",
          "Virtual machines and networking",
          "Storage solutions and databases",
          "Identity and access management",
        ],
      },
      {
        module: "Containerization & Orchestration",
        topics: [
          "Docker fundamentals and container management",
          "Kubernetes cluster setup and management",
          "Container security and best practices",
          "Microservices architecture patterns",
        ],
      },
      {
        module: "CI/CD & Automation",
        topics: [
          "Building CI/CD pipelines with Jenkins/GitLab",
          "Infrastructure as Code with Terraform",
          "Configuration management with Ansible",
          "Automated testing and deployment strategies",
        ],
      },
      {
        module: "Monitoring & Operations",
        topics: [
          "Application and infrastructure monitoring",
          "Log management and analysis",
          "Incident response and troubleshooting",
          "Performance optimization and scaling",
        ],
      },
    ],
    careerPaths: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Site Reliability Engineer",
      "Infrastructure Engineer",
      "Platform Engineer",
      "DevOps Architect",
    ],
    prerequisites: [
      "Basic understanding of software development",
      "Familiarity with command line interface",
      "Problem-solving and analytical thinking",
      "Commitment to dedicate 15-20 hours per week for learning",
    ],
  }

  return <CoursePageTemplate {...courseData} />
}
