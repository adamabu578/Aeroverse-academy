"use client"

import { useState } from "react"
import { Search, Calendar, FileText, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function AssignmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample assignment data based on the image
  const assignments = [
    {
      id: 1,
      title: "Cohort 8 - VAPT",
      posted: "Tuesday, Aug 5, 2025, 2:46 PM",
      dueDate: "Sunday, Aug 31, 2025, 11:59 PM",
      status: "active",
    },
    {
      id: 2,
      title: "Cohort 8 - SOC",
      posted: "Tuesday, Aug 5, 2025, 2:44 PM",
      dueDate: "Sunday, Aug 31, 2025, 11:59 PM",
      status: "active",
    },
    {
      id: 3,
      title: "Cohort 8 - GRC",
      posted: "Tuesday, Aug 5, 2025, 2:42 PM",
      dueDate: "Sunday, Aug 31, 2025, 11:59 PM",
      status: "active",
    },
    {
      id: 4,
      title: "Linux CLI foundation",
      posted: "Saturday, May 10, 2025, 10:09 AM",
      dueDate: "Monday, May 12, 2025, 6:59 PM",
      status: "active",
    },
  ]

  const filteredAssignments = assignments.filter((assignment) =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">Cohort 8</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search classes, assignments..."
                className="pl-10 w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <span className="text-sm font-medium">Almustapha Sule</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Assignments & projects</h1>
            <p className="text-gray-600">Hi, Almustapha Sule Manage your assignments and projects here 😊</p>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button className="border-b-2 border-[#5A68B0] py-2 px-1 text-sm font-medium text-[#5A68B0]">
                  Assignments
                </button>
              </nav>
            </div>
          </div>

          {/* Assignment Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Find your recent assignment here and their due date
            </h2>

            <div className="space-y-4">
              {filteredAssignments.map((assignment) => (
                <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <FileText className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{assignment.title}</h3>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-red-600">
                              <span className="font-medium">Posted:</span>
                              <span className="ml-1">{assignment.posted}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span className="font-medium">Due date:</span>
                              <span className="ml-1">{assignment.dueDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <span className="text-sm text-gray-600">Page 1 of 1</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start text-left p-3 h-auto">
                <FileText className="h-4 w-4 mr-3" />
                <div>
                  <div className="font-medium">See new resources</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left p-3 h-auto">
                <Clock className="h-4 w-4 mr-3" />
                <div>
                  <div className="font-medium">View new assignments</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
