"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Sample classes data
const classesData = [
  {
    id: 1,
    className: "Week 18 - Session 2",
    description: "Test Demo Presentation",
    date: "Wednesday, Jul 30, 2025",
    week: 18,
    hasNotes: true,
  },
  {
    id: 2,
    className: "Week 18 - Session 1",
    description: "Project Readiness",
    date: "Monday, Jul 28, 2025",
    week: 18,
    hasNotes: true,
  },
  {
    id: 3,
    className: "Week 17 - Session 3",
    description: "Project Readiness",
    date: "Friday, Jul 25, 2025",
    week: 17,
    hasNotes: true,
  },
  {
    id: 4,
    className: "Week 17 - Session 2",
    description: "AI in Cybersecurity cont'd",
    date: "Wednesday, Jul 23, 2025",
    week: 17,
    hasNotes: true,
  },
  {
    id: 5,
    className: "Week 17 - Session 1",
    description: "AI in Cybersecurity",
    date: "Monday, Jul 21, 2025",
    week: 17,
    hasNotes: true,
  },
  {
    id: 6,
    className: "Week 16 - Session 1",
    description: "Cloud Security cont'd",
    date: "Friday, Jul 18, 2025",
    week: 16,
    hasNotes: true,
  },
  {
    id: 7,
    className: "Week 16 - Session 2",
    description: "Cloud Security Cont'd",
    date: "Wednesday, Jul 16, 2025",
    week: 16,
    hasNotes: true,
  },
  {
    id: 8,
    className: "Week 16 - Session 1",
    description: "Cloud Security",
    date: "Monday, Jul 14, 2025",
    week: 16,
    hasNotes: true,
  },
  {
    id: 9,
    className: "Week 15 - Session 3",
    description: "Digital forensics practice",
    date: "Friday, Jul 11, 2025",
    week: 15,
    hasNotes: true,
  },
  {
    id: 10,
    className: "Week 15 - Session 2",
    description: "Digital Forensics cont'd",
    date: "Wednesday, Jul 9, 2025",
    week: 15,
    hasNotes: true,
  },
  {
    id: 11,
    className: "Week 15 - Session 1",
    description: "Digital Forensics",
    date: "Monday, Jul 7, 2025",
    week: 15,
    hasNotes: true,
  },
  {
    id: 12,
    className: "Week 14 - Session 3",
    description: "Threat Detection & Incident Response",
    date: "Friday, Jul 4, 2025",
    week: 14,
    hasNotes: true,
  },
  {
    id: 13,
    className: "Week 14 - Session 2",
    description: "Threat Detection & Incident Response",
    date: "Wednesday, Jul 2, 2025",
    week: 14,
    hasNotes: true,
  },
  {
    id: 14,
    className: "Week 14 - Session 1",
    description: "Threat Detection & Incident Response",
    date: "Monday, Jun 30, 2025",
    week: 14,
    hasNotes: true,
  },
  {
    id: 15,
    className: "Week 13 - Session 2",
    description: "GRC",
    date: "Wednesday, Jun 25, 2025",
    week: 13,
    hasNotes: true,
  },
  {
    id: 16,
    className: "Week 13 - Session 1",
    description: "GRC",
    date: "Monday, Jun 23, 2025",
    week: 13,
    hasNotes: false,
  },
  {
    id: 17,
    className: "Week 12 - Session 3",
    description: "Hands on VAPT",
    date: "Friday, Jun 20, 2025",
    week: 12,
    hasNotes: true,
  },
  {
    id: 18,
    className: "Week 12 - Session 2",
    description: "VAPT cont'd",
    date: "Wednesday, Jun 18, 2025",
    week: 12,
    hasNotes: true,
  },
  {
    id: 19,
    className: "Week 12 - Session 1",
    description: "Vulnerability Assessment & Penetration Testing",
    date: "Monday, Jun 16, 2025",
    week: 12,
    hasNotes: true,
  },
  {
    id: 20,
    className: "Week 11 - Session 2",
    description: "Hands on with SIEM",
    date: "Friday, Jun 13, 2025",
    week: 11,
    hasNotes: true,
  },
]

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedWeek, setSelectedWeek] = useState("0")
  const [selectedDate, setSelectedDate] = useState("0")

  const filteredClasses = classesData.filter((classItem) => {
    const matchesSearch =
      classItem.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesWeek = selectedWeek === "0" || classItem.week.toString() === selectedWeek
    const matchesDate = selectedDate === "0" || classItem.date.includes(selectedDate)

    return matchesSearch && matchesWeek && matchesDate
  })

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedWeek("0")
    setSelectedDate("0")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Recorded live classes</h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Cohort B</span>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AS</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-1">This shows the link to all your live classes</p>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search classes and files"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">All Dates</SelectItem>
              <SelectItem value="Jul">July</SelectItem>
              <SelectItem value="Jun">June</SelectItem>
              <SelectItem value="May">May</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">All Weeks</SelectItem>
              {Array.from({ length: 18 }, (_, i) => i + 1).map((week) => (
                <SelectItem key={week} value={week.toString()}>
                  Week {week}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={clearFilters}
            className="text-[#5A68B0] border-[#5A68B0] hover:bg-[#5A68B0] hover:text-white bg-transparent"
          >
            Clear filter
          </Button>
        </div>
      </div>

      {/* Classes Table */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CLASS NAME
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DESCRIPTION
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DATE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    WEEK
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CLASS LINK
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CLASS RECORDING
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    NOTES
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CHAT
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClasses.map((classItem) => (
                  <tr key={classItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {classItem.className}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{classItem.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{classItem.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{classItem.week}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button size="sm" className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">
                        Go to class
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-[#5A68B0] border-[#5A68B0] hover:bg-[#5A68B0] hover:text-white bg-transparent"
                      >
                        View Recording
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {classItem.hasNotes ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">View Notes</Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                          No Notes
                        </Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button size="sm" className="bg-[#5A68B0] hover:bg-[#4A5BA0] text-white">
                        Ask
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
