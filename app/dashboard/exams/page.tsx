import { RefreshCw, ChevronDown, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ExamsPage() {
  const exams = [
    {
      title: "Cybersecurity Examination - Month 4",
      duration: "22 hours 59 minutes",
      startDate: "Aug 1, 2025, 1:00:00 AM (GMT+1)",
      endDate: "Aug 1, 2025, 11:59:00 PM (GMT+1)",
    },
    {
      title: "Cybersecurity Examination - Month 3",
      duration: "2 hours",
      startDate: "Jun 27, 2025, 7:00:00 PM (GMT+1)",
      endDate: "Jun 27, 2025, 9:00:00 PM (GMT+1)",
    },
    {
      title: "Cybersecurity Examination - Month 2",
      duration: "2 hours",
      startDate: "May 30, 2025, 7:00:00 PM (GMT+1)",
      endDate: "May 30, 2025, 9:00:00 PM (GMT+1)",
    },
    {
      title: "Cybersecurity Examination - Month 1",
      duration: "2 hours",
      startDate: "Apr 25, 2025, 7:00:00 PM (GMT+1)",
      endDate: "Apr 25, 2025, 9:00:00 PM (GMT+1)",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz & Exams</h1>
          <p className="text-gray-600">See your quizzes and exams here 😊</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Here you can find your quizzes and exams</h2>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          {/* Exams List */}
          <div className="space-y-4">
            {exams.map((exam, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <FileText className="w-5 h-5 text-gray-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{exam.title}</h3>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </div>

                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{exam.duration}</span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-[#5A68B0]">Start Date:</span>
                            <span className="text-sm text-[#5A68B0]">{exam.startDate}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-red-600">End Date:</span>
                            <span className="text-sm text-red-600">{exam.endDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <p className="text-sm text-gray-500">Page 1 of 1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
