import { CoursePageTemplate } from "@/components/course-page-template"

export default function DataAnalysisPage() {
  const courseData = {
    title: "Become a Data Analyst",
    description:
      "Transform raw data into actionable business insights through visualization, reporting, and statistical analysis. Master SQL, Excel, Python, and business intelligence tools.",
    duration: "5 Months",
    students: "2,800+",
    icon: "📊",
    color: "bg-cyan-100",
    skills: [
      "SQL & Databases",
      "Excel & Google Sheets",
      "Python for Analysis",
      "Data Visualization",
      "Tableau & Power BI",
      "Statistical Analysis",
      "Business Intelligence",
      "Dashboard Creation",
      "Data Cleaning",
      "Reporting & Presentation",
      "KPI Development",
      "A/B Testing",
    ],
    curriculum: [
      {
        module: "Data Analysis Fundamentals",
        topics: [
          "Introduction to data analysis workflow",
          "Excel advanced functions and pivot tables",
          "Data types, structures, and quality assessment",
          "Basic statistics for business analysis",
        ],
      },
      {
        module: "SQL & Database Management",
        topics: [
          "SQL fundamentals and advanced queries",
          "Database design and normalization",
          "Data extraction and transformation",
          "Working with multiple data sources",
        ],
      },
      {
        module: "Python for Data Analysis",
        topics: [
          "Python basics and data structures",
          "Pandas for data manipulation",
          "NumPy for numerical computing",
          "Data cleaning and preprocessing",
        ],
      },
      {
        module: "Data Visualization & BI",
        topics: [
          "Tableau for interactive dashboards",
          "Power BI for business reporting",
          "Python visualization with Matplotlib/Seaborn",
          "Best practices in data storytelling",
        ],
      },
      {
        module: "Business Analytics",
        topics: [
          "KPI development and tracking",
          "Business metrics and performance analysis",
          "A/B testing and experimentation",
          "Presenting insights to stakeholders",
        ],
      },
    ],
    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "Business Intelligence Analyst",
      "Marketing Analyst",
      "Financial Analyst",
      "Senior Data Analyst",
    ],
    prerequisites: [
      "Strong analytical and logical thinking skills",
      "Basic understanding of mathematics and statistics",
      "Attention to detail and accuracy",
      "Commitment to dedicate 10-15 hours per week for learning",
    ],
  }

  return <CoursePageTemplate {...courseData} />
}
