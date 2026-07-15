import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Mail } from 'lucide-react'

export default function NotFound() {
  const cogPath = "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"

  return (
    <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-slate-100 blur-3xl rounded-full pointer-events-none" />

      {/* Decorative cog */}
      <svg
        className="absolute right-[-40px] bottom-[-40px] w-80 h-80 text-gray-100 animate-[spin_80s_linear_infinite] pointer-events-none hidden lg:block"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={cogPath} />
      </svg>
      <svg
        className="absolute left-[-30px] top-[-30px] w-64 h-64 text-orange-500/5 animate-[spin_60s_linear_infinite_reverse] pointer-events-none hidden lg:block"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={cogPath} />
      </svg>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          
          {/* Error badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-500 font-mono text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              Error 404
            </span>
          </motion.div>

          {/* Large 404 watermark - NOW DARKER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative py-12"
          >
            <span className="font-heading text-[10rem] sm:text-[14rem] md:text-[18rem] font-black text-gray-200 select-none pointer-events-none leading-none">
              404
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-5"
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Page Not Found
            </h1>

            <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
              The structural asset location or page path you requested does not exist or has been relocated.
            </p>

            {/* Primary CTA */}
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-200 group shadow-md shadow-orange-500/20 hover:shadow-orange-500/30"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-white" />
              <span>Return to Homepage</span>
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-6"
          >
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">
              Helpful Links
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { to: '/', icon: Home, label: 'Home' },
                { to: '/services/inspection', icon: ArrowLeft, label: 'Services' },
                { to: '/contact', icon: Mail, label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 bg-white border border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 hover:shadow-sm"
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}