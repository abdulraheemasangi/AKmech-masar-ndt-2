import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { serviceCategories, offices, company } from '../data/content'
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react'
import logoImg from '../assets/Logo-removebg-preview.png'

export default function Footer() {
  const cogPath = "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Facebook', href: '#', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { name: 'Twitter', href: '#', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' }
  ]

  return (
    <footer className="bg-slate-900 text-slate-200 mt-16 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Larger, more visible decorative cogs */}
      <svg
        className="absolute right-[-80px] bottom-[-80px] w-[400px] h-[400px] text-white/20 animate-[spin_80s_linear_infinite] pointer-events-none hidden lg:block"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={cogPath} />
      </svg>
      <svg
        className="absolute left-[-60px] top-[-60px] w-[300px] h-[300px] text-orange-500/15 animate-[spin_60s_linear_infinite_reverse] pointer-events-none hidden lg:block"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={cogPath} />
      </svg>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN CONTENT - More Compact
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ── Company Overview ─────────────────────────────────── */}
          <div className="lg:col-span-1 space-y-5">
            <Link to="/" className="group flex items-center w-fit">
              <img 
                src={logoImg} 
                alt="Masar NDT Logo" 
                className="h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              />
            </Link>
            
            <div className="space-y-4">
              <p className="text-xs leading-relaxed text-slate-300 font-light">
                {company.intro}
              </p>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-orange-400" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                  Member of {company.legalName}
                </span>
              </div>
            </div>

            {/* Social Media - Compact */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group w-8 h-8 bg-slate-800/50 border border-slate-700/60 hover:border-orange-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Services Column ──────────────────────────────────── */}
          <div className="space-y-4">
            <h3 className="font-heading text-xs font-bold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-2">
              Services
            </h3>
            
            <ul className="space-y-1.5">
              {serviceCategories.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={s.path} 
                    className="group flex items-center gap-2 text-xs text-slate-300 hover:text-orange-400 transition-all duration-200 py-1 font-medium"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-orange-500 transition-colors duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Quick Links ──────────────────────────────────────── */}
          <div className="space-y-4">
            <h3 className="font-heading text-xs font-bold text-white uppercase tracking-wider border-l-2 border-slate-700 pl-2">
              Quick Links
            </h3>
            
            <ul className="space-y-1.5">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/industries', label: 'Industries' },
                { to: '/projects', label: 'Projects' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-orange-400 transition-all duration-200 py-1 font-medium"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-orange-500 transition-colors duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ─────────────────────────────────────── */}
          <div className="space-y-4">
            <h3 className="font-heading text-xs font-bold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-2">
              Contact Info
            </h3>

            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed font-medium">
                  {offices[0].lines.join(', ')}
                </span>
              </div>

              {/* Phone */}
              <a 
                href="tel:+966571033252" 
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>+966 57 103 3252</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:sales@masarndt.com" 
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="break-all">sales@masarndt.com</span>
              </a>

              {/* Business Hours */}
              <div className="flex items-center gap-2 pt-1 border-t border-slate-800/60">
                <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">
                  Sun – Thu: 8:00 AM – 5:00 PM
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          BOTTOM COPYRIGHT - Compact
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="border-t border-slate-800/80 bg-slate-950/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            
            {/* Left: Copyright & ISO */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <p className="text-xs text-slate-400 font-medium">
                &copy; {new Date().getFullYear()} Masar NDT. All rights reserved.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-white px-2 py-0.5 rounded-full tracking-wider uppercase">
                <ShieldCheck className="w-2.5 h-2.5" />
                ISO 9001:2015
              </span>
            </div>

            {/* Right: Legal Links */}
            <div className="flex items-center gap-4 text-xs">
              {[
                { to: '/contact', label: 'Privacy' },
                { to: '/contact', label: 'Terms' },
                { to: '/contact', label: 'Cookies' },
              ].map((link, idx) => (
                <div key={link.to} className="flex items-center gap-4">
                  {idx > 0 && <div className="w-px h-3 bg-slate-700" />}
                  <Link 
                    to={link.to} 
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}