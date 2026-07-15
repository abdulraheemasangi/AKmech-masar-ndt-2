import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ShieldCheck, Award, Users, CheckCircle, Wrench,
  Settings, Clock, ChevronDown, HeartHandshake,
  ScanSearch, Zap, Activity, DatabaseZap, UserCheck
} from 'lucide-react'
import {
  company, serviceCategories, processSteps, faqs, teamMembers
} from '../data/content'

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ value, label, subtitle }) {
  const [count, setCount] = useState(0)
  const target = parseInt(value) || 0
  const isPlus = value.includes('+')

  useEffect(() => {
    let start = 0
    const duration = 1500
    const increment = Math.ceil(target / (duration / 30))
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 overflow-hidden">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300" />
      {/* Watermark */}
      <span className="absolute -bottom-4 -right-2 text-8xl font-black text-gray-50 select-none pointer-events-none leading-none">
        {target}
      </span>
      <span className="font-heading text-4xl font-extrabold text-orange-500 relative z-10">
        {count}{isPlus ? '+' : ''}
      </span>
      <p className="font-heading text-sm font-bold text-gray-900 mt-2.5 relative z-10">{label}</p>
      <p className="text-[11px] text-gray-400 font-light mt-1 relative z-10">{subtitle}</p>
    </div>
  )
}

// ─── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
      <span className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 border border-orange-200/50 px-4 py-1.5 rounded-full">
        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
        {tag}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-sm font-light leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  const coreIndustries = [
    { title: 'Manufacturing', desc: 'Precision QA/QC inspection for industrial fabrication lines.', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80' },
    { title: 'Construction', desc: 'Structural weld testing, audit compliance, and safety checks.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80' },
    { title: 'Infrastructure', desc: 'Bridges, roads, concrete mapping, and civil integrity support.', img: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=400&q=80' },
    { title: 'Engineering', desc: 'Non-destructive testing procedures qualification and modeling.', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80' },
    { title: 'Warehousing', desc: 'Storage system testing, rack audits, and load calculations.', img: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=400&q=80' },
    { title: 'Logistics', desc: 'Asset integrity auditing for critical distribution hubs.', img: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=400&q=80' },
    { title: 'Energy & Power', desc: 'Turbine testing, nuclear reactors audit, and solar/wind grids.', img: 'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&w=400&q=80' },
    { title: 'Automation', desc: 'Digital system diagnostics and electrical integrity inspections.', img: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=400&q=80' }
  ]

  const trustReasons = [
    { title: 'Quality Assurance', desc: 'ISO 9001:2015 approved procedures ensure maximum accuracy.', icon: ShieldCheck },
    { title: 'Certified Experts', desc: 'ASNT Level II/III inspectors and API certified coordinators.', icon: Award },
    { title: 'Modern Equipment', desc: 'State-of-the-art ECT, RFET, IRIS, and digital imaging systems.', icon: Settings },
    { title: 'Experienced Team', desc: 'Executing shutdown operations across the KSA since 2021.', icon: Users },
    { title: 'Customer Satisfaction', desc: 'Delivering detailed reports 2 days ahead of turnaround deadlines.', icon: HeartHandshake },
    { title: 'Safety Standards', desc: 'Strict compliance with NACE, BGAS, ASME, and ASTM guidelines.', icon: CheckCircle },
    { title: 'Fast Delivery', desc: '24/48-hour emergency outage mobilization capabilities.', icon: Clock },
    { title: 'Affordable Pricing', desc: 'Optimized inspection scopes that decrease overall resource cost.', icon: Wrench }
  ]

  const serviceIcons = [ScanSearch, Zap, Activity, DatabaseZap, UserCheck]

  const cogPath = "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"

  return (
    <div className="bg-white min-h-screen text-gray-900 relative overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative pt-36 pb-40 md:pt-48 md:pb-52 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-slate-950/82 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Decorative cogs */}
        <svg className="absolute right-[-30px] bottom-[-30px] w-80 h-80 text-white/5 animate-[spin_60s_linear_infinite] pointer-events-none hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
          <path d={cogPath} />
        </svg>
        <svg className="absolute left-[-50px] top-16 w-56 h-56 text-orange-500/5 animate-[spin_45s_linear_infinite_reverse] pointer-events-none hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
          <path d={cogPath} />
        </svg>

        {/* Ambient glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* ISO badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                ISO 9001:2015 Approved Inspection Organization
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mt-6"
            >
              Every Flaw Found.{' '}
              <br />
              <span className="text-orange-400">Every Asset Assured.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-light mt-6"
            >
              {company.intro} We deliver conventional &amp; advanced NDT, shutdown planning, and engineering evaluations across India and the Kingdom of Saudi Arabia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-wrap gap-4 mt-9"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services/inspection"
                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 border border-white/20 hover:border-white/30 backdrop-blur-sm text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-200"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } } }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10"
            >
              {[
                { value: '2021', label: 'Established' },
                { value: '90k+', label: 'Manpower Base' },
                { value: '100%', label: 'Quality Audited' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-px h-8 bg-orange-500/40" />
                  <div>
                    <p className="font-heading text-xl font-black text-orange-400 leading-none">{s.value}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. STATS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-b border-gray-200 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter value="450+" label="Projects Completed" subtitle="Refineries, Pipelines & Tanks" />
            <Counter value="120+" label="Happy Clients" subtitle="SABIC, Aramco Partners & More" />
            <Counter value="550+" label="Certified Specialists" subtitle="Level II/III & API Inspectors" />
            <Counter value="12+" label="Accredited Awards" subtitle="For Safety & Operational Excellence" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. ABOUT
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* Images */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative blocks */}
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-orange-500/8 border border-orange-200/40 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-slate-100 rounded-2xl border border-gray-200" />

              <div className="relative grid grid-cols-2 gap-3 z-10">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80"
                  alt="Engineering inspection"
                  className="w-full h-60 object-cover rounded-xl border border-gray-200 shadow-md transition-transform duration-500 hover:scale-[1.03]"
                />
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
                  alt="NDT Metallurgy diagnostics"
                  className="w-full h-60 object-cover rounded-xl border border-gray-200 shadow-md mt-8 transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-max bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
                <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-none">ISO 9001:2015</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Certified Quality Systems</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="lg:col-span-7 space-y-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 border border-orange-200/50 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Corporate Background
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mt-5">
                Precision Is Our Core Standard.{' '}
                <br />
                <span className="text-orange-500">Safety Is Our Commitment.</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
              <p>{company.about[0]}</p>
              <p>{company.about[1]} {company.about[2]}</p>
            </div>

            {/* Mission / Vision */}
            <div className="grid sm:grid-cols-2 gap-5 pt-5 border-t border-gray-100">
              {[
                { label: 'Our Mission', content: company.mission, accent: 'from-orange-500 to-orange-400' },
                { label: 'Our Vision', content: company.vision, accent: 'from-slate-700 to-slate-600' }
              ].map((item) => (
                <div key={item.label} className="relative bg-slate-50 border border-gray-200 rounded-xl p-5 overflow-hidden hover:border-orange-200 transition-colors duration-300">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.accent}`} />
                  <h4 className="font-heading text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                    {item.label}
                  </h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold text-xs tracking-wider uppercase transition-colors group"
            >
              Read our Full Story
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. SERVICES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-y border-gray-200 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            tag="Engineering Divisions"
            title="Our Premium Services"
            subtitle="We cover the full mechanical integrity and quality assurance lifecycle through five specialized business divisions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {serviceCategories.map((s, idx) => {
              const Icon = serviceIcons[idx]
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-orange-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-extrabold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-500 text-xs leading-relaxed font-light flex-1">
                    {s.summary}
                  </p>

                  <div className="mt-7 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={s.path}
                      className="text-xs font-bold text-gray-700 group-hover:text-orange-500 transition-colors duration-300 uppercase tracking-wider"
                    >
                      Learn More
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-gray-200 text-gray-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. INDUSTRIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32">
        <SectionHeader
          tag="Sectors We Support"
          title="Industries We Serve"
          subtitle="Delivering certified compliance, inspection resources, and NDT engineering across essential B2B sectors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreIndustries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-orange-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                {/* Category pill over image */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-orange-500 px-2.5 py-1 rounded-full shadow-sm">
                    {ind.title}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1">
                <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-sm transition-all duration-200 group"
          >
            View All Industries
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. WHY CHOOSE US
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 border-y border-slate-800 py-24 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <svg className="absolute right-[-60px] bottom-[-60px] w-96 h-96 text-white/3 animate-[spin_80s_linear_infinite] pointer-events-none hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
          <path d={cogPath} />
        </svg>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/25 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Built for Scale &amp; Safety
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Open mechanical integrity and Level III audits to decrease project turnaround delays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustReasons.map((reason, idx) => {
              const IconComp = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative bg-slate-800/50 border border-slate-700/60 hover:border-orange-500/40 p-6 rounded-2xl shadow-sm hover:shadow-orange-500/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white tracking-tight mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {reason.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. PROCESS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32">
        <SectionHeader
          tag="Our Work Process"
          title="How We Execute Projects"
          subtitle="From first engineering review to final inspection sign-off, our structured steps guarantee client satisfaction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {processSteps.map((p, idx) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-orange-200 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Hover top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number watermark */}
              <span className="absolute -bottom-3 -right-1 text-8xl font-black text-gray-50 select-none pointer-events-none leading-none">
                {idx + 1}
              </span>

              {/* Step circle */}
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-heading text-sm font-extrabold flex items-center justify-center mb-5 shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                {idx + 1}
              </div>

              <h3 className="font-heading text-sm font-bold text-gray-900 mb-2.5 group-hover:text-orange-500 transition-colors duration-200 relative z-10">
                {p.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light relative z-10">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. LEADERSHIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-t border-gray-200 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            tag="Leadership"
            title="Management Team"
            subtitle="Our directors and advisors combine decades of field knowledge to assure project quality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden text-center shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div className="h-1 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-orange-500" />

                <div className="p-7">
                  {/* Avatar */}
                  <div className="relative inline-block mb-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto ring-2 ring-gray-100 group-hover:ring-orange-300 transition-all duration-300">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <h3 className="font-heading text-sm font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[10px] font-bold text-orange-500 uppercase tracking-wider mt-1 mb-4">
                    {member.position}
                  </p>
                  <div className="w-8 h-0.5 bg-orange-500/30 mx-auto mb-4 rounded-full" />
                  <p className="text-[11px] text-gray-500 leading-relaxed font-light max-w-xs mx-auto">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          9. FAQ
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <SectionHeader
            tag="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className={`bg-white border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${
                  openFaq === idx
                    ? 'border-orange-400 shadow-md shadow-orange-500/5'
                    : 'border-gray-200 hover:border-orange-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  {/* Number + Question */}
                  <div className="flex items-center gap-4">
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full text-[10px] font-black flex items-center justify-center transition-all duration-300 ${
                      openFaq === idx
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className={`font-heading text-sm font-bold transition-colors duration-200 ${
                      openFaq === idx ? 'text-orange-500' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                    openFaq === idx ? 'text-orange-500 rotate-180' : 'text-gray-400'
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 ml-11 text-xs text-gray-500 leading-relaxed font-light border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}