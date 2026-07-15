import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import About from './pages/About'
import ServicesInspection from './pages/ServicesInspection'
import ServicesConventional from './pages/ServicesConventional'
import ServicesAdvanced from './pages/ServicesAdvanced'
import ServicesAssetIntegrity from './pages/ServicesAssetIntegrity'
import ServicesManpower from './pages/ServicesManpower'
import Industries from './pages/Industries'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/inspection" element={<ServicesInspection />} />
          <Route path="/services/conventional-ndt" element={<ServicesConventional />} />
          <Route path="/services/advanced-ndt" element={<ServicesAdvanced />} />
          <Route path="/services/asset-integrity" element={<ServicesAssetIntegrity />} />
          <Route path="/services/manpower" element={<ServicesManpower />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
