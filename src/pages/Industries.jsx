import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { industries } from '../data/content'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Factory, CheckCircle, ChevronRight as BreadcrumbArrow } from 'lucide-react'

// ─── Industry Details Dictionary ──────────────────────────────────────────────
const industryDetails = {
  'Oil and Gas': {
    desc: 'Upstream exploration, drilling rigs, extraction integrity, and off-shore assets.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  'Refinery': {
    desc: 'Downstream distillation columns, QA/QC testing, turnarounds, and piping loops.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  'Petrochemical': {
    desc: 'Chemical cracking facilities, vessel audits, heat exchanger tube bundles ECT.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  'Chemical': {
    desc: 'Corrosive tank integrity audits, polymer plants, and stainless steel diagnostics.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  'Fertilizer': {
    desc: 'Ammonia reactor inspection, urea plants auditing, and piping integrity tests.',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=600&q=80'
  },
  'Nuclear': {
    desc: 'Radiography, high-safety reactor containment shell scans, and cooling tower audits.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  'Marine': {
    desc: 'Ship hull inspection, ballast tanks corrosion mapping, and marine vessel QA/QC.',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80'
  },
  'Mining': {
    desc: 'Heavy mechanical draglines, crusher machinery weld checks, and shaft diagnostics.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  'Sugar Industries': {
    desc: 'Boiler tube inspections, steam piping integrity, and roller shaft testing.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  'Port / Shipping': {
    desc: 'Dockside gantry cranes structural testing, mooring bollards, and load tests.',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80'
  },
  'Cement': {
    desc: 'Rotary kiln weld checks, conveyor supports structural audits, and silos testing.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  'Power Generation': {
    desc: 'Turbine rotors inspection, steam piping, boiler wall mapping, and condenser tubes ECT.',
    image: 'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&w=600&q=80'
  },
  'Metal Fabrication': {
    desc: 'Welding procedure qualifications, raw plate audits, and pressure vessel fabrication testing.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  'Forging and Casting': {
    desc: 'Ultrasonic casting defect diagnostics, porosity checks, and die forging audits.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  'Manufacturing': {
    desc: 'Mass assembly line component QA/QC, machinery diagnostics, and plant maintenance.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  'Pipeline': {
    desc: 'Long-range UT pipe audits, girth weld radiography, and cathodic protection.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  'Tanks': {
    desc: 'API 653 storage tank floor scanning (MFL), shell evaluations, and vacuum box tests.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  'EPC and Turnkey': {
    desc: 'Pre-commissioning baseline scans, piping audits, and new-build QA/QC packages.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  'Electronic and Electricals': {
    desc: 'Substation diagnostic infrared thermography, transformer audits, and panel testing.',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=600&q=80'
  },
  'Construction': {
    desc: 'High-rise structural steel tests, bridge foundations concrete mapping, and audits.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  'Solar': {
    desc: 'Photovoltaic panel inspection, support structure welding audits, and farm checks.',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80'
  },
  'Wind': {
    desc: 'Turbine tower weld inspections, composite blades defect testing, and gearbox checks.',
    image: 'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&w=600&q=80'
  },
  'Building and Infrastructure': {
    desc: 'Civil concrete structural mapping, rebar locating, and foundation integrity audits.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  'Food & Beverages Industry': {
    desc: 'Sanitary stainless steel piping weld checks, storage silo inspections, and audits.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  'Railways and Metro': {
    desc: 'Track thermite weld inspection, axle UT, passenger coach integrity audits.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  'Aerospace and Defense': {
    desc: 'High-precision composite structures, turbine disk inspections, and weapon system audits.',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80'
  },
  'Pharmaceutical / Medical': {
    desc: 'High-purity vessel testing, orbital welding diagnostics, and laboratory clean-room audits.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  'Automobile': {
    desc: 'Chassis weld spot diagnostics, sheet metal stamping QA/QC, and casting engine blocks.',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=600&q=80'
  },
  'Textile': {
    desc: 'Boiler room steam piping inspection, structural loom foundations, and warehouse audits.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  'Transportation': {
    desc: 'Freight terminal structural tests, storage tank integrity, and fleet audits.',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80'
  },
  'General Industries': {
    desc: 'Pressure piping evaluations, structural inspections, and plant baseline audits.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
  },
  'Pulp and Paper': {
    desc: 'Digester vessel thickness audits, roller bearings UT, steam header inspections.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  'Renewable Energy': {
    desc: 'Hydroelectric dam wall checks, geothermal piping audits, and battery storage scans.',
    image: 'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&w=600&q=80'
  }
}

export default function Industries() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Build full list
  const fullIndustriesList = industries.map((name, index) => {
    const details = industryDetails[name] || {
      desc: 'Industrial mechanical engineering inspection, QA/QC weld testing, and compliance audits.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
    }
    return { id: index + 1, name, ...details }
  })

  // Pagination
  const totalPages = Math.ceil(fullIndustriesList.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = fullIndustriesList.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    document.getElementById('industries-grid-section')?.scrollIntoView({ behavior: 'smooth' })
  }

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
              <BreadcrumbArrow className="w-3 h-3 text-orange-400" />
              <span className="text-orange-400 font-semibold">Industries</span>
            </div>

            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 rounded-full mb-5">
              <Factory className="w-3.5 h-3.5" />
              Sectors We Support
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 leading-[1.1]">
              Industries{' '}
              <span className="text-orange-500">We Serve</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Delivering certified inspection, conventional &amp; advanced NDT, and technical manpower across{' '}
              <span className="font-bold text-orange-400">{fullIndustriesList.length}</span> essential industrial fields.
            </p>

            {/* Quick stat */}
            <div className="mt-10 flex items-center gap-3">
              <div className="w-px h-8 bg-orange-500/40" />
              <div>
                <p className="font-heading text-xl font-black text-orange-400 leading-none">{fullIndustriesList.length}+</p>
                <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider mt-0.5">Industry Sectors</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ─── INDUSTRIES GRID ──────────────────────────────────────────────── */}
      <section id="industries-grid-section" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 relative">
        {/* Ambient glow */}
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Info bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100 relative z-10">
          <div>
            <h2 className="font-heading text-lg font-extrabold text-gray-900">
              Browse All Industries
            </h2>
            <p className="text-xs text-gray-400 font-light mt-0.5">
              Showing{' '}
              <span className="font-bold text-orange-500">{indexOfFirstItem + 1}–{Math.min(indexOfLastItem, fullIndustriesList.length)}</span>{' '}
              of {fullIndustriesList.length} sectors
            </p>
          </div>
          <div className="text-xs font-mono font-bold text-gray-500 bg-slate-50 border border-gray-200 px-4 py-2 rounded-full">
            PAGE {currentPage} OF {totalPages}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {currentItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-orange-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Gradient top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-slate-800 to-orange-500" />

                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                  {/* ID badge */}
                  <span className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-white font-mono text-[10px] font-bold rounded-full shadow-sm">
                    {String(item.id).padStart(2, '0')}
                  </span>

                  {/* Check icon badge */}
                  <div className="absolute top-3 right-3 w-7 h-7 bg-orange-500/90 backdrop-blur-sm border border-orange-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-heading text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-250 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-light mt-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom badge */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      Audit Ready
                    </span>
                    <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 pt-10 border-t border-gray-100 relative z-10">
            <div className="flex justify-center items-center gap-2">
              {/* Previous */}
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-9 h-9 border border-gray-200 hover:bg-slate-50 hover:border-orange-400 text-gray-700 rounded-lg transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-gray-200 disabled:cursor-not-allowed"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1.5">
                {[...Array(totalPages)].map((_, i) => {
                  const pageIndex = i + 1
                  return (
                    <button
                      key={pageIndex}
                      onClick={() => handlePageChange(pageIndex)}
                      className={`w-9 h-9 font-heading text-xs font-bold rounded-lg transition-all ${
                        currentPage === pageIndex
                          ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-500'
                      }`}
                    >
                      {pageIndex}
                    </button>
                  )
                })}
              </div>

              {/* Next */}
              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-9 h-9 border border-gray-200 hover:bg-slate-50 hover:border-orange-400 text-gray-700 rounded-lg transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-gray-200 disabled:cursor-not-allowed"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ─── CTA SECTION ──────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 border border-gray-200 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-orange-500" />

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-100 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-orange-500/10 border border-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Factory className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="font-heading text-xl font-extrabold text-gray-900 mb-3">
              Don't See Your Industry Listed?
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-md mx-auto mb-7">
              We likely still cover it. Our team handles specialized sectors beyond this directory. Get in touch to discuss your specific inspection requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-8 py-3.5 rounded-xl tracking-wide uppercase shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 group"
            >
              Ask About Your Industry
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}