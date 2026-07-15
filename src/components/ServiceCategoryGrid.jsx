import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function ServiceCategoryGrid({ categories }) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {categories.map((s) => (
        <motion.div key={s.id} variants={itemVariants}>
          <Link
            to={s.path}
            className="group block bg-white border border-slate-200 hover:border-[#D97706]/40 p-8 flex flex-col justify-between min-h-[260px] rounded-2xl transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            {/* Ambient background glow inside cards on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/0 via-[#D97706]/0 to-[#D97706]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <p className="font-mono text-[9px] font-bold tracking-widest2 text-[#D97706]">{s.tag}</p>
              <h3 className="font-display uppercase text-xl font-bold mt-3 text-[#0A3C36] group-hover:text-[#D97706] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 group-hover:text-slate-700 mt-3 leading-relaxed font-light transition-colors duration-300">
                {s.summary}
              </p>
            </div>
            
            <span className="mt-6 text-sm text-[#D97706] flex items-center gap-2 relative z-10 font-bold group-hover:text-[#B45309] transition-colors duration-200 uppercase tracking-widest text-xs">
              View scope
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
