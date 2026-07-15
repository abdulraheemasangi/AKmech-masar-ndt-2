import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Activity, ChevronRight, ShieldCheck } from 'lucide-react'
import { assetIntegrity } from '../data/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

export default function ServicesAssetIntegrity() {
  const cogPath = "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"

  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 md:pt-48 md:pb-36 bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')" }}
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
              <span>Services</span>
              <ChevronRight className="w-3 h-3 text-orange-400" />
              <span className="text-orange-400 font-semibold">Asset Integrity</span>
            </div>

            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 rounded-full mb-5">
              <Activity className="w-3.5 h-3.5" />
              {assetIntegrity.tag}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 leading-[1.1]">
              {assetIntegrity.title.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-orange-500">{assetIntegrity.title.split(' ').slice(2).join(' ')}</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
              {assetIntegrity.lead}
            </p>

            {/* Quick stat */}
            <div className="mt-10 flex items-center gap-3">
              <div className="w-px h-8 bg-orange-500/40" />
              <div>
                <p className="font-heading text-xl font-black text-orange-400 leading-none">{assetIntegrity.services.length}+</p>
                <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider mt-0.5">Services Offered</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ─── SERVICES LIST SECTION ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 relative z-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-800">
                Our Asset Integrity Services
              </h3>
              <p className="text-xs text-gray-500 font-light mt-0.5">
                Comprehensive solutions for industrial asset management
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {assetIntegrity.services.map((s, idx) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="inline-flex items-center gap-2 text-xs border border-gray-200 bg-slate-50 text-slate-700 font-semibold px-4 py-2.5 rounded-full shadow-sm hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 cursor-default"
              >
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ─── CTA CARD ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-50 border border-gray-200 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-orange-500 rounded-t-2xl" />

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-100 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-orange-500/10 border border-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Activity className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="font-heading text-xl font-extrabold text-gray-900 mb-3">
              Building Your RBI Program?
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-md mx-auto mb-7">
              Building or reviewing your Risk-Based Inspection (RBI) or corrosion loops program? Our certified engineers can help optimize your asset integrity strategy.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-8 py-3.5 rounded-xl tracking-wide uppercase shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 group"
            >
              Speak With Our Engineers
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  )
}