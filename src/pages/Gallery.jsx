import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryPhotos } from '../data/content'
import { X, ZoomIn, ChevronLeft, ChevronRight, Images, ChevronRight as BreadcrumbArrow } from 'lucide-react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const categories = ['All', 'Inspection', 'Conventional NDT', 'Advanced NDT', 'Asset Integrity', 'Manpower']

  const filteredPhotos = activeFilter === 'All'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeFilter)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const navigateLightbox = (direction, e) => {
    e.stopPropagation()
    if (lightboxIndex === null) return
    let newIndex = lightboxIndex + direction
    if (newIndex < 0) newIndex = filteredPhotos.length - 1
    if (newIndex >= filteredPhotos.length) newIndex = 0
    setLightboxIndex(newIndex)
  }

  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 md:pt-48 md:pb-36 bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=1600&q=80')" }}
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
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
        <svg
          className="absolute left-[-40px] top-20 w-52 h-52 text-orange-500/5 animate-[spin_40s_linear_infinite_reverse] pointer-events-none hidden lg:block"
          fill="currentColor" viewBox="0 0 24 24"
        >
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
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
              <span className="text-orange-400 font-semibold">Gallery</span>
            </div>

            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 rounded-full mb-5">
              <Images className="w-3.5 h-3.5" />
              Media Hub
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 leading-[1.1]">
              Industrial{' '}
              <span className="text-orange-500">Gallery</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
              A visual overview of our on-site inspection projects, advanced NDT procedures, and engineering testing labs.
            </p>

            {/* Quick stats strip */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { text: `${galleryPhotos.length}+ Project Photos` },
                { text: `${categories.length - 1} Categories` },
                { text: 'Live Field Documentation' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span className="text-xs text-gray-200 font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ─── GALLERY GRID ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
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
                Browse Projects
              </h2>
              <p className="text-xs text-gray-400 font-light mt-0.5">
                Showing{' '}
                <span className="font-bold text-orange-500">{filteredPhotos.length}</span>{' '}
                {activeFilter === 'All' ? 'total photos' : `photos in "${activeFilter}"`}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat)
                    setLightboxIndex(null)
                  }}
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  layout
                  key={photo.title}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => openLightbox(index)}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 bg-gray-100 border border-gray-100 hover:border-orange-200"
                >
                  {/* Image */}
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Always-visible bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />

                  {/* Category pill — always visible */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2.5 py-1 rounded-full shadow-sm">
                      {photo.category}
                    </span>
                  </div>

                  {/* Zoom icon — appears on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/20">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-heading text-sm font-bold text-white truncate leading-tight">
                      {photo.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <Images className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-sm font-medium">No photos found in this category.</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* ─── LIGHTBOX ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[140] flex items-center justify-center p-4 select-none"
            style={{ background: 'rgba(2, 6, 23, 0.97)' }}
          >
            {/* Grid texture in lightbox */}
            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-orange-500 text-white rounded-full transition-all duration-200 border border-white/10 hover:border-orange-500 outline-none z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <span className="text-xs font-bold text-white">
                {lightboxIndex + 1}{' '}
                <span className="text-gray-400 font-normal">/ {filteredPhotos.length}</span>
              </span>
            </div>

            {/* Left arrow */}
            <button
              onClick={(e) => navigateLightbox(-1, e)}
              className="absolute left-4 sm:left-6 flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-orange-500 text-white rounded-full transition-all duration-200 border border-white/10 hover:border-orange-500 outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center gap-5 relative z-10"
            >
              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={filteredPhotos[lightboxIndex].image}
                  alt={filteredPhotos[lightboxIndex].title}
                  className="max-h-[68vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="text-center space-y-2">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-orange-500 text-white px-4 py-1 rounded-full">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <h2 className="font-heading text-base md:text-lg font-bold text-white">
                  {filteredPhotos[lightboxIndex].title}
                </h2>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-1.5 mt-1">
                {filteredPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                    className={`rounded-full transition-all duration-200 ${
                      i === lightboxIndex
                        ? 'w-6 h-1.5 bg-orange-500'
                        : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right arrow */}
            <button
              onClick={(e) => navigateLightbox(1, e)}
              className="absolute right-4 sm:right-6 flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-orange-500 text-white rounded-full transition-all duration-200 border border-white/10 hover:border-orange-500 outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}