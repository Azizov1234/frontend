import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Company from './pages/Company'
import Career from './pages/Career'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import JobDetails from './components/CareerPage'
import CareerJobPage from './pages/CareerJobPage'
import BlogDetails from './components/BlogDetails'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AuthorDetails from './pages/AuthorDeatilsPage'

export default function App() {
  return (
    <div className="min-h-screen bg-[#232536] text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-details" element={<CareerJobPage />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
      </Routes>
    </div>
  )
}