import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Cpu, Zap, Settings, Users } from 'lucide-react'
import { serviceCategories } from '../data/content'
import logoImg from '../assets/Logo-removebg-preview.png'

const serviceIcons = {
  inspection: ShieldCheck,
  'conventional-ndt': Cpu,
  'advanced-ndt': Zap,
  'asset-integrity': Settings,
  manpower: Users
}

const navLinkClass = ({ isActive }) =>
  `relative text-sm font-bold tracking-wide py-2.5 px-1 transition-all duration-300 group ${
    isActive 
      ? 'text-orange-500' 
      : 'text-gray-700 hover:text-orange-500'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Track scroll position to adjust header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location])

  return (
    <header className="w-full z-50 flex flex-col">
      
      {/* ═══════════════════════════════════════════════════════════════════
          TOP INFORMATION BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <div 
        className={`bg-slate-900 border-b border-slate-800 text-xs text-gray-300 transition-all duration-500 ease-out ${
          isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-auto py-2.5 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="tel:+966571033252" 
              className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-200 font-medium"
            >
              <div className="w-6 h-6 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center">
                <Phone className="w-3 h-3 text-orange-400" />
              </div>
              <span className="group-hover:tracking-wide transition-all duration-200">+966 57 103 3252</span>
            </a>
            <a 
              href="mailto:sales@masarndt.com" 
              className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-200 font-medium"
            >
              <div className="w-6 h-6 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center">
                <Mail className="w-3 h-3 text-orange-400" />
              </div>
              <span className="group-hover:tracking-wide transition-all duration-200">sales@masarndt.com</span>
            </a>
            <span className="flex items-center gap-2 font-medium text-gray-400">
              <div className="w-6 h-6 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center">
                <MapPin className="w-3 h-3 text-orange-400" />
              </div>
              <span>Jubail, Saudi Arabia</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-bold text-white uppercase text-[10px] tracking-wider bg-gradient-to-r from-orange-500 to-orange-400 px-2.5 py-1 rounded-full border border-orange-400">
              <ShieldCheck className="w-3 h-3" />
              ISO 9001:2015
            </span>
            <div className="w-px h-4 bg-slate-700" />
            <Link 
              to="/contact" 
              className="hover:text-orange-400 transition-all duration-200 font-medium text-gray-400 hover:tracking-wide"
            >
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN NAVIGATION BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <div 
        className={`w-full bg-white transition-all duration-500 ease-out ${
          isScrolled 
            ? 'fixed top-0 border-b border-gray-200 py-3' 
            : 'relative py-5 border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center shrink-0 group"
          >
            <img 
              src={logoImg} 
              alt="Masar NDT Logo" 
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { to: '/', label: 'Home', end: true },
              { to: '/about', label: 'About' },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.end}>
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </span>
                )}
              </NavLink>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="text-sm font-bold tracking-wide text-gray-700 hover:text-orange-500 flex items-center gap-1.5 transition-all duration-300 py-2.5 px-1 group"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                  servicesOpen ? 'rotate-180 text-orange-500' : 'text-gray-400 group-hover:text-orange-500'
                }`} />
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                  servicesOpen ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-[45%] top-full mt-4 w-[760px] bg-white border border-gray-200/80 shadow-2xl shadow-slate-300/20 rounded-2xl overflow-hidden z-50 flex"
                  >
                    {/* Left Branding Panel */}
                    <div className="w-[280px] bg-slate-900 text-white p-7 flex flex-col justify-between relative overflow-hidden shrink-0">
                      {/* Background decoration */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 pointer-events-none" />
                      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-500/10 rounded-full pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-black bg-gradient-to-r from-orange-500 to-orange-400 text-white px-2.5 py-1 rounded-full tracking-wider uppercase">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            ISO 9001:2015
                          </span>
                        </div>
                        
                        <h4 className="text-base font-extrabold tracking-tight leading-tight text-white mb-2">
                          Quality Inspection &<br />
                          <span className="text-orange-400">Audit Services</span>
                        </h4>
                        
                        <p className="text-xs text-gray-400 leading-relaxed mb-8 flex-1">
                          Approved certified inspection organization. Delivering high-precision NDT, engineering, and shutdown planning across KSA and India.
                        </p>
                        
                        <Link 
                          to="/contact" 
                          className="group/btn inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-all duration-200"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="border-b border-orange-400/30 group-hover/btn:border-orange-300 pb-0.5 transition-all duration-200">
                            Get a Quote / Consult
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Services List Panel */}
                    <div className="flex-1 p-6 bg-slate-50/30">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Our Services</p>
                      <div className="grid grid-cols-1 gap-1.5">
                        {serviceCategories.map((s) => {
                          const IconComponent = serviceIcons[s.id] || ShieldCheck;
                          return (
                            <NavLink
                              key={s.id}
                              to={s.path}
                              className={({ isActive }) => 
                                `group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                                  isActive 
                                    ? 'bg-orange-50 border border-orange-200/50 shadow-sm' 
                                    : 'hover:bg-white hover:shadow-md hover:shadow-slate-200/60 hover:border-gray-200 border border-transparent'
                                }`
                              }
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-xl transition-all duration-300 bg-slate-100 text-slate-600 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center shrink-0 shadow-sm">
                                <IconComponent className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110" />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-sm font-extrabold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                                    {s.title}
                                  </span>
                                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500 flex-shrink-0" />
                                </div>
                                <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                                  {s.summary}
                                </p>
                              </div>
                            </NavLink>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { to: '/industries', label: 'Industries' },
              { to: '/projects', label: 'Projects' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs px-6 py-3 rounded-xl tracking-wider uppercase shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group"
            >
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <button 
              className="lg:hidden p-2.5 text-gray-700 hover:text-orange-500 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl transition-all duration-200 group"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE DRAWER MENU
      ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-white border-b border-gray-200 shadow-lg overflow-hidden z-40"
          >
            <div className="px-6 py-8">
              <div className="space-y-6">
                {/* Navigation Links */}
                <div className="space-y-4">
                  {[
                    { to: '/', label: 'Home', end: true },
                    { to: '/about', label: 'About' },
                  ].map((item) => (
                    <NavLink 
                      key={item.to}
                      to={item.to} 
                      className={({ isActive }) => 
                        `block text-base font-bold transition-all duration-200 py-2 ${
                          isActive ? 'text-orange-500' : 'text-gray-900 hover:text-orange-500 hover:translate-x-1'
                        }`
                      } 
                      end={item.end}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
                
                {/* Services Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <div className="w-6 h-6 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center">
                      <Settings className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                    <p className="text-sm font-bold text-orange-500 uppercase tracking-wider">Services</p>
                  </div>
                  
                  <div className="grid gap-2 pl-4 border-l-2 border-orange-500/20 space-y-1">
                    {serviceCategories.map((s) => (
                      <NavLink 
                        key={s.id} 
                        to={s.path} 
                        className={({ isActive }) => 
                          `block text-sm font-semibold transition-all duration-200 py-2 px-3 rounded-lg ${
                            isActive 
                              ? 'text-orange-500 bg-orange-50 border-l-2 border-orange-500' 
                              : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:translate-x-1'
                          }`
                        } 
                        onClick={() => setOpen(false)}
                      >
                        {s.title}
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* Other Links */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  {[
                    { to: '/industries', label: 'Industries' },
                    { to: '/projects', label: 'Projects' },
                    { to: '/gallery', label: 'Gallery' },
                    { to: '/contact', label: 'Contact' },
                  ].map((item) => (
                    <NavLink 
                      key={item.to}
                      to={item.to} 
                      className={({ isActive }) => 
                        `block text-base font-bold transition-all duration-200 py-2 ${
                          isActive ? 'text-orange-500' : 'text-gray-900 hover:text-orange-500 hover:translate-x-1'
                        }`
                      } 
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6 border-t border-gray-100">
                  <Link 
                    to="/contact" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm py-4 rounded-xl tracking-wider uppercase shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 group"
                    onClick={() => setOpen(false)}
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}