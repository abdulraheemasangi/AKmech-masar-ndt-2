import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsList } from '../data/content'
import { MapPin, Calendar, Building, ArrowRight, Briefcase, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Inspection', 'Advanced NDT', 'Asset Integrity', 'Manpower']

  const filteredProjects = activeFilter === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeFilter)

  const cogPath = "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"

  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 md:pt-48 md:pb-36 bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent pointer-events-none" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Ambient glows */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 bottom-0 w-64 h-64 bg-slate-800/40 rounded-full blur-2xl pointer-events-none" />

        {/* Decorative Cogs */}
        <svg
          className="absolute right-[-20px] bottom-[-20px] w-72 h-72 text-white/5 animate-[spin_60s_linear_infinite] pointer-events-none hidden md:block"
          fill="currentColor" viewBox="0 0 24 24"
        >
          <path d={cogPath} />
        </svg>
        <svg
          className="absolute left-[-40px] top-20 w-52 h-52 text-orange-500/5 animate-[spin_40s_linear_infinite_reverse] pointer-events-none hidden lg:block"
          fill="currentColor" viewBox="0 0 24 24"
        >
          <path d={cogPath} />
        </svg>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <span>Home</span>
              <ChevronRight className="w-3 h-3 text-orange-400" />
              <span className="text-orange-400 font-semibold">Projects</span>
            </div>

            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 rounded-full mb-5">
              <Briefcase className="w-3.5 h-3.5" />
              Case Studies
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 leading-[1.1]">
              Our Project{' '}
              <span className="text-orange-500">Portfolio</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Discover how Masar NDT delivers engineering precision, safety compliance, and reliable asset operations across international sites.
            </p>

            {/* Quick stat */}
            <div className="mt-10 flex items-center gap-3">
              <div className="w-px h-8 bg-orange-500/40" />
              <div>
                <p className="font-heading text-xl font-black text-orange-400 leading-none">{projectsList.length}+</p>
                <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider mt-0.5">Completed Projects</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ─── PROJECTS GRID ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-gray-900">
                Browse Case Studies
              </h2>
              <p className="text-xs text-gray-400 font-light mt-0.5">
                Showing{' '}
                <span className="font-bold text-orange-500">{filteredProjects.length}</span>{' '}
                {activeFilter === 'All' ? 'total projects' : `projects in "${activeFilter}"`}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-[11px] font-bold tracking-wide uppercase rounded-full transition-all duration-200 border ${
                    activeFilter === cat
                      ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-orange-500 via-slate-200 to-transparent mb-12 rounded-full" />

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, idx) => (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-orange-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  {/* Gradient top bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-slate-800 to-orange-500" />

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                    {/* Category badge - appears on hover */}
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-[10px] font-bold uppercase tracking-wider bg-orange-500 px-3 py-1 rounded-full shadow-sm">
                        {proj.category}
                      </span>
                    </div>

                    {/* Year badge - always visible */}
                    <span className="absolute top-3 right-3 flex items-center justify-center h-8 bg-white/95 backdrop-blur-sm border border-gray-200 text-slate-700 font-mono text-[10px] font-bold px-3 rounded-full shadow-sm">
                      {proj.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-base font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-200 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="mt-3 text-gray-500 text-xs leading-relaxed flex-1 font-light">
                      {proj.description}
                    </p>

                    {/* Meta info */}
                    <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
                      <div className="flex items-center gap-2 text-[11px] text-gray-600">
                        <div className="w-6 h-6 bg-slate-50 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="w-3 h-3 text-slate-600" />
                        </div>
                        <span className="font-medium truncate" title={proj.client}>{proj.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-gray-600">
                        <div className="w-6 h-6 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-3 h-3 text-orange-500" />
                        </div>
                        <span className="font-medium truncate" title={proj.location}>{proj.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-sm font-medium">No projects found in this category.</p>
            </div>
          )}
        </motion.div>

        {/* ─── CTA CARD ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden relative"
        >
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-300" />

          {/* Decorative elements */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" />
          <svg
            className="absolute right-[-60px] bottom-[-60px] w-80 h-80 text-white/3 animate-[spin_80s_linear_infinite] pointer-events-none hidden lg:block"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={cogPath} />
          </svg>

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left content */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                <Briefcase className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
                Need help planning your next industrial audit?
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xl">
                Get in touch with our certified planning team to scope inspections, schedule manpower, and select appropriate NDT equipment.
              </p>
            </div>

            {/* Right CTA */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-8 py-4 rounded-xl tracking-wider uppercase shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 flex-shrink-0"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  )
}