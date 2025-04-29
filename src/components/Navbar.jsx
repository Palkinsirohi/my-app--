import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 shadow-lg">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-white drop-shadow-lg">Logo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition flex items-center"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-purple-600 to-indigo-700 rounded-md shadow-lg py-1 z-50">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-white hover:bg-purple-800"
                    onClick={() => setDropdownOpen(false)}
                  >
                    All Services
                  </Link>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-purple-800">
                    Web Development
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-purple-800">
                    Mobile Apps
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-purple-800">
                    UI/UX Design
                  </a>
                </div>
              )}
            </div>

            {/* Structure Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition flex items-center"
              >
                Structure
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-purple-600 to-indigo-700 rounded-md shadow-lg py-1 z-50">
                  <a href="/structure/fee" className="block px-4 py-2 text-sm text-white hover:bg-purple-800">
                    Fee
                  </a>
                  <a href="/structure/online" className="block px-4 py-2 text-sm text-white hover:bg-purple-800">
                    Online
                  </a>
                  <a href="/structure/offline" className="block px-4 py-2 text-sm text-white hover:bg-purple-800">
                    Offline
                  </a>
                  <a href="/structure/more" className="block px-4 py-2 text-sm text-white hover:bg-purple-800">
                    More
                  </a>
                </div>
              )}
            </div>

            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition">
              Contact
            </Link>

            {/* New Links */}
            <Link to="/become-instructor" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition">
              Become an Instructor
            </Link>
            <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition">
              Login
            </Link>
            <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 transition">
              Register
            </Link>
            {/* Language Selector */}
            <select
              aria-label="Select Language"
              className="bg-purple-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none"
              defaultValue="en"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-500 rounded-b-md">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700 flex justify-between items-center"
            >
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {dropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
                  onClick={() => {
                    setIsOpen(false)
                    setDropdownOpen(false)
                  }}
                >
                  All Services
                </Link>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
                  onClick={() => setIsOpen(false)}
                >
                  Mobile Apps
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
                  onClick={() => setIsOpen(false)}
                >
                  UI/UX Design
                </a>
              </div>
            )}
          </div>
          
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* New Mobile Links */}
          <Link to="/become-instructor" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700">
            Become an Instructor
          </Link>
          <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700">
            Login
          </Link>
          <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700">
            Register
          </Link>
          <select
            aria-label="Select Language"
            className="w-full bg-purple-700 text-white rounded-md px-2 py-1 text-sm focus:outline-none mt-2"
            defaultValue="en"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>
        </div>
      </div>
    </nav>
  )
}
