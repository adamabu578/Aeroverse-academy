import { CoursePageTemplate } from "@/components/course-page-template"

export default function DataSciencePage() {
  const courseData = {
    title: "Become a Data Scientist",
    description:
      "Master advanced analytics, machine learning, and statistical modeling to extract insights from complex data. Learn Python, R, and cutting-edge AI techniques to solve real-world problems.",
    duration: "5 Months",
    students: "1,600+",
    icon: "🔬",
    color: "bg-indigo-100",
    skills: [
      "Python Programming",
      "R Programming",
      "Machine Learning",
      "Statistical Analysis",
      "Data Visualization",
      "SQL & Databases",
      "Deep Learning",
      "Natural Language Processing",
      "Big Data Technologies",
      "A/B Testing",
      "Predictive Modeling",
      "Data Mining",
    ],
    curriculum: [
      {
        module: "Data Science Foundations",
        topics: [
          "Introduction to data science workflow",
          "Python programming for data science",
          "Statistics and probability fundamentals",
          "Data collection and cleaning techniques",
        ],
      },
      {
        module: "Exploratory Data Analysis",
        topics: [
          "Data visualization with Matplotlib and Seaborn",
          "Pandas for data manipulation",
          "Statistical analysis and hypothesis testing",
          "Feature engineering and selection",
        ],
      },
      {
        module: "Machine Learning",
        topics: [
          "Supervised learning algorithms",
          "Unsupervised learning and clustering",
          "Model evaluation and validation",
          "Scikit-learn and machine learning pipelines",
        ],
      },
      {
        module: "Advanced Analytics",
        topics: [
          "Deep learning with TensorFlow and Keras",
          "Natural language processing",
          "Time series analysis and forecasting",
          "Big data tools (Spark, Hadoop)",
        ],
      },
      {
        module: "Production & Deployment",
        topics: [
          "Model deployment and MLOps",
          "Cloud platforms for data science",
          "Building data science portfolios",
          "Ethics in AI and data science",
        ],
      },
    ],
    careerPaths: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Research Scientist",
      "AI Specialist",
      "Senior Data Scientist",
      "Head of Data Science",
    ],
    prerequisites: [
      "Strong mathematical and statistical background",
      "Basic programming experience (any language)",
      "Analytical thinking and problem-solving skills",
      "Commitment to dedicate 15-20 hours per week for learning",
    ],
  }

  return <CoursePageTemplate {...courseData} />
}
