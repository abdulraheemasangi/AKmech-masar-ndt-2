import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { offices } from '../data/content'
import { Phone, Mail, MapPin, Clock, Globe, ChevronRight, MessageSquare, Building2 } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 md:pt-48 md:pb-36 bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-slate-950/78 pointer-events-none" />
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

        {/* Decorative circle */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 bottom-0 w-64 h-64 bg-slate-800/40 rounded-full blur-2xl pointer-events-none" />

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
              <span className="text-orange-400 font-semibold">Contact Us</span>
            </div>

            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 rounded-full mb-5">
              <MessageSquare className="w-3.5 h-3.5" />
              Connect With Us
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 leading-[1.1]">
              Contact{' '}
              <span className="text-orange-500">Masar NDT</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Reach out to our global technical hubs in Saudi Arabia and India. Our engineers are ready to scope your NDT and inspection turnarounds.
            </p>

            {/* Quick info strip */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: <Phone className="w-3.5 h-3.5 text-orange-400" />, text: 'Available Sun – Thu' },
                { icon: <Globe className="w-3.5 h-3.5 text-orange-400" />, text: 'KSA & India Offices' },
                { icon: <Clock className="w-3.5 h-3.5 text-orange-400" />, text: '8:00 AM – 5:00 PM' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  {item.icon}
                  <span className="text-xs text-gray-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ─── CONTACT FORM SECTION ────────────────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Ambient glow */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 shadow-md">
              <MessageSquare className="w-5 h-5 text-orange-400" />
            </div>
            <span className="inline-flex items-center gap-2 font-heading text-[11px] font-bold text-orange-500 uppercase tracking-widest bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              Send an Enquiry
            </h2>
            <p className="text-sm text-gray-500 font-light mt-2 max-w-md">
              Fill out the form below and our engineering team will get back to you within one business day.
            </p>
          </div>

          {/* Form Component */}
          <ContactForm />
        </motion.div>
      </section>

      {/* ─── OFFICES SECTION ─────────────────────────────────────────────── */}
      <section className="relative bg-slate-50 border-t border-gray-100 overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-14"
          >
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 shadow-md">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="inline-flex items-center gap-2 font-heading text-[11px] font-bold text-orange-500 uppercase tracking-widest bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4">
              Our Locations
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              Our Offices
            </h2>
            <p className="text-sm text-gray-400 font-light mt-2 max-w-md">
              Find our technical teams across the region, ready to support your projects.
            </p>
          </motion.div>

          {/* Office locations list */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
            {offices.map((o, idx) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-slate-200/60 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Top gradient bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-orange-500" />

                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  {/* Office name row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/10 border border-orange-200 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <MapPin className="w-5 h-5 text-orange-500" />
                      </div>
                      <h3 className="font-heading text-base font-extrabold text-gray-900">{o.label}</h3>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-600 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-100" />

                  {/* Details */}
                  <div className="space-y-4 flex-1">
                    {/* Address */}
                    <div className="flex items-start gap-3.5 text-xs text-slate-700">
                      <div className="w-8 h-8 bg-orange-500/10 border border-orange-200/50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="leading-relaxed font-semibold pt-1">
                        {o.lines.join(', ')}
                      </span>
                    </div>

                    {/* Phone */}
                    {o.mobile && (
                      <a
                        href={`tel:${o.mobile.replace(/\s+/g, '')}`}
                        className="flex items-center gap-3.5 text-xs text-slate-700 hover:text-orange-500 transition-colors group/link"
                      >
                        <div className="w-8 h-8 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shrink-0 group-hover/link:border-orange-300 group-hover/link:bg-orange-500/5 transition-colors">
                          <Phone className="w-4 h-4 text-slate-600 group-hover/link:text-orange-500 transition-colors" />
                        </div>
                        <span className="font-semibold">{o.mobile}</span>
                      </a>
                    )}

                    {/* Email */}
                    <a
                      href={`mailto:${o.email}`}
                      className="flex items-center gap-3.5 text-xs text-slate-700 hover:text-orange-500 transition-colors group/link"
                    >
                      <div className="w-8 h-8 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shrink-0 group-hover/link:border-orange-300 group-hover/link:bg-orange-500/5 transition-colors">
                        <Mail className="w-4 h-4 text-slate-600 group-hover/link:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-semibold underline break-all">{o.email}</span>
                    </a>

                    {/* Website */}
                    <a
                      href={`https://${o.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3.5 text-xs text-slate-700 hover:text-orange-500 transition-colors group/link"
                    >
                      <div className="w-8 h-8 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shrink-0 group-hover/link:border-orange-300 group-hover/link:bg-orange-500/5 transition-colors">
                        <Globe className="w-4 h-4 text-slate-600 group-hover/link:text-orange-500 transition-colors" />
                      </div>
                      <span className="font-semibold">{o.website}</span>
                    </a>

                    {/* Hours */}
                    <div className="flex items-center gap-3.5 text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <div className="w-8 h-8 bg-orange-500/10 border border-orange-200/50 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="font-semibold">Sun – Thu: 8:00 AM – 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left shadow-lg"
          >
            <div className="w-11 h-11 bg-orange-500/15 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-xs font-heading font-extrabold text-white leading-none mb-1.5 uppercase tracking-wider">
                Response Time
              </p>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                Our team typically responds to all enquiries within one business day. For urgent inspection scopes, please call your nearest office directly.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}