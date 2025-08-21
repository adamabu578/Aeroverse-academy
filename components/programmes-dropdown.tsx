import { ChevronRight, BarChart3, Database, Palette, Handshake } from "lucide-react"

export function ProgrammesDropdown() {
  const programmes = [
    {
      name: "View All Programmes",
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-pink-400 rounded-md flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-sm"></div>
        </div>
      ),
      hasArrow: false,
    },
    {
      name: "Data",
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-md flex items-center justify-center">
          <Database className="w-3 h-3 text-white" />
        </div>
      ),
      hasArrow: true,
    },
    {
      name: "Career",
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-blue-400 rounded-md flex items-center justify-center">
          <BarChart3 className="w-3 h-3 text-white" />
        </div>
      ),
      hasArrow: true,
    },
    {
      name: "Creative Tech",
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-md flex items-center justify-center">
          <Palette className="w-3 h-3 text-white" />
        </div>
      ),
      hasArrow: true,
    },
    {
      name: "Cyber Security",
      icon: null,
      hasArrow: true,
    },
    {
      name: "Partnerships",
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-red-400 to-pink-400 rounded-md flex items-center justify-center">
          <Handshake className="w-3 h-3 text-white" />
        </div>
      ),
      hasArrow: true,
    },
    {
      name: "Entrepreneurship",
      icon: null,
      hasArrow: true,
    },
  ]

  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-lg shadow-lg z-50">
      <div className="py-2">
        {programmes.map((programme, index) => (
          <div
            key={programme.name}
            className="flex items-center justify-between px-4 py-3 hover:bg-muted cursor-pointer group"
          >
            <div className="flex items-center space-x-3">
              {programme.icon && <div className="flex-shrink-0">{programme.icon}</div>}
              <span
                className={`text-sm font-medium text-foreground group-hover:text-primary ${
                  programme.name === "View All Programmes" ? "text-primary underline" : ""
                }`}
              >
                {programme.name}
              </span>
            </div>
            {programme.hasArrow && <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
          </div>
        ))}
      </div>
    </div>
  )
}
