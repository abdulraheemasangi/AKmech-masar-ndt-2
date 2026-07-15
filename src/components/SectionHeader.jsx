import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, description, align = 'left', dark = false }) {
  const isCenter = align === 'center'

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center flex flex-col items-center' : ''} mb-12`}
    >
      {tag && (
        <p className="font-mono text-[9px] font-bold tracking-widest2 text-[#D97706] mb-3 flex items-center gap-2">
          <span className="w-4 h-px bg-[#D97706]/40 inline-block" />
          {tag}
        </p>
      )}
      <h2 className={`font-display uppercase text-3xl md:text-5xl font-black tracking-tight ${dark ? 'text-white' : 'text-[#0A3C36]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 leading-relaxed text-sm md:text-base max-w-2xl font-light ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
