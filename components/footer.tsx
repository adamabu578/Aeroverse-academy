import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Our Programmes</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Aeroverse Software Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Aeroverse Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Aeroverse Cloud Computing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Aeroverse Salesforce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Aeroverse Virtual Assistant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Aeroverse Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Learn About Us</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  About Aeroverse-academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  News & Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">#LEARN #BUILD #SUCCEED</h3>
            <p>@AEROVERSE-ACADEMY</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-2xl font-bold">aeroverse</span>
          </div>
          <div className="text-sm text-white/60">
            <p>Privacy • Terms • Copyright 2024</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
