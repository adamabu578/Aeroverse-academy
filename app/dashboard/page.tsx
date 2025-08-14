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
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  const navigationItems = [
    { icon: BookOpen, label: "Dashboard", active: true, href: "/dashboard" },
    { icon: Users, label: "Classes", active: false, href: "/dashboard/classes" },
    { icon: FileText, label: "Assignment", active: false, href: "/dashboard/assignments" },
    { icon: GraduationCap, label: "Exams", active: false, href: "/dashboard/exams" },
    { icon: Trophy, label: "Leaderboard", active: false, href: "/dashboard/leaderboard" },
    { icon: Archive, label: "Archives", active: false, href: "/dashboard/archives" },
  ]

  const announcements = [
    { sender: "David Archibong", title: "Class link", action: "View more" },
    { sender: "David Archibong", title: "Week 2 - Session 3 Recording", action: "View more" },
    { sender: "David Archibong", title: "Week 2 - Session 3", action: "View more" },
    { sender: "David Archibong", title: "The book you didn't know you n...", action: "View more" },
    { sender: "David Archibong", title: "Official Comms Group", action: "View more" },
    { sender: "David Archibong", title: "Welcome Onboard!", action: "View more" },
    { sender: "tofunmi okedeji", title: "Login Issue - Action Required", action: "View more" },
    { sender: "tofunmi okedeji", title: "Important Announcement And Upd...", action: "View more" },
    { sender: "tofunmi okedeji", title: "Important Updates: Start Date,...", action: "View more" },
  ]

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
                    <AvatarFallback>AS</AvatarFallback>
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
          {/* Payment Banner */}
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
            <p className="text-sm">
              Please make your third month payment in due time to avoid disconnection. If you have done so, please
              ignore this note.
            </p>
          </div>

          {/* Dashboard Overview */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-600 mt-1">Hi, Almustapha Sule Welcome Back 😊</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 mb-6 border-b border-gray-200">
              <button className="pb-2 text-sm font-medium text-[#5A68B0] border-b-2 border-[#5A68B0]">Overview</button>
              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700">Course Details</button>
              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700">Verify Certificate</button>
              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700">Payment status</button>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 h-32">
                <CardContent className="p-6 h-full flex items-center">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600 font-medium truncate">
                        Completed <span className="text-green-600 font-semibold">assignment</span>
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 h-32">
                <CardContent className="p-6 h-full flex items-center">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 bg-[#5A68B0] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600 font-medium truncate">
                        Overall <span className="text-[#5A68B0] font-semibold">grade</span>
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">3.23%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 h-32">
                <CardContent className="p-6 h-full flex items-center">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600 font-medium truncate">
                        Total Assignment <span className="text-orange-600 font-semibold">taken</span>
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Announcements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">SENDER</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">TITLE</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcements.map((announcement, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-sm text-gray-900">{announcement.sender}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">{announcement.title}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm" className="text-[#5A68B0] hover:text-[#5A68B0]/80">
                              {announcement.action}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-4">
                  <p className="text-sm text-gray-500">Page 1 of 1</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 bg-white border-l border-gray-200 p-6">
          {/* Mentor Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Mentor</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="text-sm font-medium text-gray-900">David Archibong</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-sm font-medium text-gray-900">braveukay1@gmail.com</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Group */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Whatsapp Group</h3>
            <Button className="w-full bg-[#5A68B0] hover:bg-[#5A68B0]/90 text-white">Join Group</Button>
          </div>

          {/* Upcoming Classes */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Upcoming classes</h3>
            <p className="text-sm text-gray-600">There aren't any upcoming classes at the moment</p>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">See new resources</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">View new assignments</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
