import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import WebDevelopment from './pages/services/WebDevelopment'
import MobileApps from './pages/services/MobileApps'
import UiUxDesign from './pages/services/UiUxDesign'
import SeoOptimization from './pages/services/SeoOptimization'
import CloudSolutions from './pages/services/CloudSolutions'
import Consulting from './pages/services/Consulting'
import Fee from './pages/structure/Fee'
import Online from './pages/structure/Online'
import Offline from './pages/structure/Offline'
import More from './pages/structure/More'
import Login from './pages/Login'
import Register from './pages/Register'
import BecomeInstructor from './pages/BecomeInstructor';

export default function App() {
  const [darkMode] = useState(false)

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-left">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/services/seo-optimization" element={<SeoOptimization />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/structure/fee" element={<Fee />} />
            <Route path="/structure/online" element={<Online />} />
            <Route path="/structure/offline" element={<Offline />} />
            <Route path="/structure/more" element={<More />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/become-instructor" element={<BecomeInstructor />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
