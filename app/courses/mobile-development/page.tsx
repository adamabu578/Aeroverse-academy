import { CoursePageTemplate } from "@/components/course-page-template"

export default function MobileDevelopmentPage() {
  const courseData = {
    title: "Become a Mobile Developer",
    description:
      "Build native and cross-platform mobile applications for iOS and Android. Master React Native, Flutter, and native development to create engaging mobile experiences.",
    duration: "5 Months",
    students: "2,200+",
    icon: "📱",
    color: "bg-orange-100",
    skills: [
      "React Native",
      "Flutter & Dart",
      "iOS Development (Swift)",
      "Android Development (Kotlin)",
      "Mobile UI/UX Design",
      "API Integration",
      "State Management",
      "Push Notifications",
      "App Store Deployment",
      "Mobile Testing",
      "Performance Optimization",
      "Cross-Platform Development",
    ],
    curriculum: [
      {
        module: "Mobile Development Fundamentals",
        topics: [
          "Introduction to mobile app development",
          "Mobile platform differences (iOS vs Android)",
          "Mobile design principles and guidelines",
          "Development environment setup",
        ],
      },
      {
        module: "Cross-Platform Development",
        topics: [
          "React Native fundamentals and components",
          "Navigation and state management",
          "Flutter framework and Dart programming",
          "Building responsive mobile interfaces",
        ],
      },
      {
        module: "Native Development",
        topics: [
          "iOS development with Swift and Xcode",
          "Android development with Kotlin",
          "Platform-specific features and APIs",
          "Native performance optimization",
        ],
      },
      {
        module: "Advanced Mobile Features",
        topics: [
          "API integration and data management",
          "Push notifications and real-time updates",
          "Device features (camera, GPS, sensors)",
          "Offline functionality and data persistence",
        ],
      },
      {
        module: "Deployment & Optimization",
        topics: [
          "App store submission process",
          "Mobile app testing strategies",
          "Performance monitoring and analytics",
          "App maintenance and updates",
        ],
      },
    ],
    careerPaths: [
      "Mobile Developer",
      "iOS Developer",
      "Android Developer",
      "React Native Developer",
      "Flutter Developer",
      "Mobile App Architect",
    ],
    prerequisites: [
      "Basic programming knowledge (JavaScript preferred)",
      "Understanding of software development concepts",
      "Familiarity with mobile devices and apps",
      "Commitment to dedicate 12-16 hours per week for learning",
    ],
  }

  return <CoursePageTemplate {...courseData} />
}
