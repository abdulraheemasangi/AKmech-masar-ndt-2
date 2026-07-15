import { motion } from 'framer-motion'
import { company, stats, teamMembers } from '../data/content'
import { ShieldCheck, Award, FileText, ChevronRight, Users, CheckCircle, Target, Eye } from 'lucide-react'

export default function About() {
  const coreValues = [
    { title: 'Efficiency & Integrity', desc: 'We deliver results reflective of our certified standards with absolute technical accuracy.' },
    { title: 'Exceeding Expectations', desc: 'Personal attention, dedication, and technical hard work are applied to every turnaround scope.' },
    { title: 'First-Time-Right Result', desc: 'Reducing client acquisition costs and schedule times through rigorous field preparations.' }
  ]

  const milestones = [
    { year: '2021', title: 'Company Foundation', desc: 'AKMEC Group establishes its specialized facility management and industrial inspection service wings.' },
    { year: '2022', title: 'ISO 9001:2015 Accreditation', desc: 'Obtained ISO certification for all conventional NDT procedures and welding audit controls.' },
    { year: '2023', title: 'Saudi Expansion', desc: 'Opened the Jubail office to provide direct advanced NDT services to petrochemical sites in KSA.' },
    { year: '2024', title: 'Advanced NDT Mobilization', desc: 'Introduced high-speed ECT, RFET, and IRIS ultrasonic testing tools to turnaround scopes.' },
    { year: '2025', title: 'Scale Achievements', desc: 'Grew database to over 90,000 resumes, mobilizing 150+ VT and 400+ API inspectors.' }
  ]

  const certifications = [
    'ISO 9001:2015 Approved Quality Systems',
    'ASNT Level II/III Inspection Procedures',
    'API 510/570/653 Plant Integrity Audit Codes',
    'NACE/BGAS Anti-Corrosive Coating Inspections',
    'ASME Section V Testing Standards',
    'ASTM Non-Destructive Code Compliance'
  ]

  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 md:pt-48 md:pb-36 bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-slate-950/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent pointer-events-none" />

        {/* Animated grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Decorative Rotating Cog */}
        <svg
          className="absolute right-[-20px] bottom-[-20px] w-72 h-72 text-white/5 animate-[spin_60s_linear_infinite] pointer-events-none hidden md:block"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>

        {/* Second decorative cog */}
        <svg
          className="absolute left-[-40px] top-20 w-52 h-52 text-orange-500/5 animate-[spin_40s_linear_infinite_reverse] pointer-events-none hidden lg:block"
          fill="currentColor"
          viewBox="0 0 24 24"
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
              <ChevronRight className="w-3 h-3 text-orange-400" />
              <span className="text-orange-400 font-semibold">About Us</span>
            </div>

            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 rounded-full mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Who We Are
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 leading-[1.1]">
              About{' '}
              <span className="text-orange-500">Masar NDT</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
              AKMEC Group is an ISO 9001:2015 certified company and a trusted name for facilities management and technical services since 2021.
            </p>

            {/* Quick trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {['ISO 9001:2015 Certified', 'Since 2021', 'KSA & Global Operations'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  <span className="text-xs text-gray-200 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ─── MAIN NARRATIVE ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7"
          >
            <div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mt-4">
                Precision Engineering &amp;{' '}
                <span className="text-slate-800">Industrial Testing</span> Services
              </h2>
            </div>

            <div className="text-gray-500 text-sm leading-relaxed space-y-5">
              <div className="relative pl-5 border-l-4 border-orange-500">
                <p className="font-semibold text-orange-500 text-sm leading-relaxed">
                  {company.about[0]}
                </p>
              </div>
              <p className="text-gray-500 leading-relaxed">
                {company.about[1]} We support public and private organizations in managing critical infrastructures by providing tailored inspection procedures, welding audits, and technical manpower.
              </p>
              <p className="text-gray-500 leading-relaxed">
                {company.about[2]} We bring certified Level II/III engineers, API inspectors, and advanced instruments to make sure your assets operate at maximum safety and regulatory compliance.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-7 border-t border-gray-100">
              <h3 className="font-heading text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
                Our Core Values
              </h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {coreValues.map((val, i) => (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 overflow-hidden"
                  >
                    {/* Accent top bar */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" />
                    {/* Number watermark */}
                    <span className="absolute -bottom-3 -right-1 text-7xl font-black text-gray-50 select-none pointer-events-none leading-none">
                      {i + 1}
                    </span>
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                    </div>
                    <h4 className="font-heading text-xs font-bold text-gray-900 mb-2">{val.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-light relative z-10">{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Background decorative block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-orange-500/8 rounded-2xl border border-orange-200/40" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-100 rounded-2xl border border-gray-200" />

              <div className="relative bg-white border border-gray-200 p-3 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
                  alt="Industrial Inspection Site"
                  className="w-full rounded-xl object-cover aspect-[4/5] shadow-sm"
                />
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-none">ISO 9001:2015</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Certified Quality Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── MISSION / VISION ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          <div className="text-center mb-12">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
              Our Direction
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 mt-3">
              Mission & Vision
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6 text-orange-500" />,
                label: 'Mission Statement',
                content: company.mission,
                accent: 'from-orange-500 to-orange-400'
              },
              {
                icon: <Eye className="w-6 h-6 text-orange-500" />,
                label: 'Vision Statement',
                content: company.vision,
                accent: 'from-slate-700 to-slate-600'
              }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-slate-900 mb-3">
                      Our {item.label}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full border border-gray-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center mb-12">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/15 border border-orange-500/25 px-4 py-1.5 rounded-full">
              By The Numbers
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mt-4">
              Our Achievements at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-slate-800/50 border border-slate-700/60 hover:border-orange-500/40 p-7 rounded-2xl text-center shadow-sm hover:shadow-orange-500/5 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="font-heading text-4xl font-black text-orange-500 leading-none">
                  {s.value}
                </span>
                <div className="w-8 h-0.5 bg-orange-500/40 mx-auto my-3 rounded-full" />
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 lg:py-32">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Our Journey
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900">
            Company Timeline Milestones
          </h2>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            A track record of steady growth, certifications, and operational excellence.
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-500 via-slate-300 to-slate-100" />

          <div className="space-y-10 pl-14">
            {milestones.map((stone, i) => (
              <motion.div
                key={stone.year}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Node */}
                <div className="absolute -left-14 top-1 flex items-center justify-center w-9 h-9 bg-white border-2 border-orange-500 rounded-full shadow-md group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="text-[9px] font-black text-orange-500 group-hover:text-white transition-colors duration-300 leading-none">
                    {i + 1}
                  </span>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading text-xs font-black text-white bg-orange-500 px-3 py-1 rounded-full">
                      {stone.year}
                    </span>
                    <h4 className="font-heading text-sm font-bold text-gray-900">
                      {stone.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {stone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ───────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-gray-200 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
              Our Board
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900">
              Executive Leadership
            </h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Our management team drives operational standards, ensuring safe work protocols across global facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-400"
              >
                {/* Top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-orange-500" />

                <div className="p-7 text-center">
                  {/* Avatar */}
                  <div className="relative inline-block mb-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto ring-2 ring-gray-100 group-hover:ring-orange-300 transition-all duration-300">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Online indicator repurposed as cert badge */}
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

      {/* ─── CERTIFICATIONS ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-800">
                Accredited Standards &amp; Quality Codes
              </h3>
              <p className="text-xs text-gray-500 font-light mt-0.5">
                All operations conform to internationally recognized inspection standards.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="inline-flex items-center gap-2 text-xs border border-gray-200 bg-slate-50 text-slate-700 font-semibold px-4 py-2.5 rounded-full shadow-sm hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 cursor-default"
              >
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                {cert}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}