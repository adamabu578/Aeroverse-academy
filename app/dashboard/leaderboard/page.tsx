"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Search,
  ChevronDown,
  Users,
  BookOpen,
  FileText,
  GraduationCap,
  Trophy,
  Archive,
  Medal,
  Crown,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LeaderboardPage() {
  const [selectedWeek, setSelectedWeek] = useState("all")
  const [showData, setShowData] = useState(false)

  const navigationItems = [
    { icon: BookOpen, label: "Dashboard", active: false, href: "/dashboard" },
    { icon: Users, label: "Classes", active: false, href: "/dashboard/classes" },
    { icon: FileText, label: "Assignment", active: false, href: "/dashboard/assignments" },
    { icon: GraduationCap, label: "Exams", active: false, href: "/dashboard/exams" },
    { icon: Trophy, label: "Leaderboard", active: true, href: "/dashboard/leaderboard" },
    { icon: Archive, label: "Archives", active: false, href: "/dashboard/archives" },
  ]

  // Sample leaderboard data for when filters are applied
  const leaderboardData = [
    { rank: 1, name: "Almustapha Sule", score: 98.5, attendance: "95%", assignments: "10/10", avatar: "AS" },
    { rank: 2, name: "David Archibong", score: 96.2, attendance: "92%", assignments: "9/10", avatar: "DA" },
    { rank: 3, name: "Sarah Johnson", score: 94.8, attendance: "98%", assignments: "9/10", avatar: "SJ" },
    { rank: 4, name: "Michael Chen", score: 92.1, attendance: "88%", assignments: "8/10", avatar: "MC" },
    { rank: 5, name: "Emma Wilson", score: 90.7, attendance: "90%", assignments: "8/10", avatar: "EW" },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-600">{rank}</span>
    }
  }

  const handleApplyFilters = () => {
    setShowData(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-[#5A68B0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
          </div>

          {/* Cohort Selector */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <span className="text-sm font-medium">Cohort 8</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Cohort 8</DropdownMenuItem>
                <DropdownMenuItem>Cohort 7</DropdownMenuItem>
                <DropdownMenuItem>Cohort 6</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search classes, assignments..." className="pl-10 bg-gray-50 border-gray-200" />
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-green-500 text-white">AS</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Almustapha Sule</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">GENERAL</h3>
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    item.active ? "bg-[#5A68B0] text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
              <p className="text-gray-600 mt-1">
                The leaderboard displays the top performing students in the cohort, based on their attendance and
                assignment submission scores.
              </p>
            </div>
            <Button className="bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white">Learn More</Button>
          </div>

          {/* Filter Section */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Week</span>
              <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="All Weeks" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weeks</SelectItem>
                  <SelectItem value="week1">Week 1</SelectItem>
                  <SelectItem value="week2">Week 2</SelectItem>
                  <SelectItem value="week3">Week 3</SelectItem>
                  <SelectItem value="week4">Week 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleApplyFilters}
              variant="outline"
              className="border-[#5A68B0] text-[#5A68B0] hover:bg-[#5A68B0] hover:text-white bg-transparent"
            >
              Apply Filters
            </Button>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg border border-gray-200 min-h-96">
            {!showData ? (
              <div className="flex items-center justify-center h-96">
                <p className="text-gray-500 text-center">No leaderboard data found for the selected filters.</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-4">
                  {leaderboardData.map((student, index) => (
                    <Card
                      key={index}
                      className={`border-l-4 ${
                        student.rank === 1
                          ? "border-l-yellow-500 bg-yellow-50"
                          : student.rank === 2
                            ? "border-l-gray-400 bg-gray-50"
                            : student.rank === 3
                              ? "border-l-amber-600 bg-amber-50"
                              : "border-l-[#5A68B0] bg-blue-50"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              {getRankIcon(student.rank)}
                              <span className="text-lg font-bold text-gray-900">#{student.rank}</span>
                            </div>
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-[#5A68B0] text-white">{student.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-gray-900">{student.name}</h3>
                              <p className="text-sm text-gray-600">Score: {student.score}%</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6 text-sm">
                            <div className="text-center">
                              <p className="text-gray-600">Attendance</p>
                              <p className="font-semibold text-gray-900">{student.attendance}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-gray-600">Assignments</p>
                              <p className="font-semibold text-gray-900">{student.assignments}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6">
                  <p className="text-sm text-gray-500">Page 1 of 1</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
