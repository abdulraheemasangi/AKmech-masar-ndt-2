import { motion } from 'framer-motion'
import { Check, X, Info } from 'lucide-react'

export default function MethodCard({ method }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-gray-200 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg hover:border-orange-500/30 transition-all duration-300 flex flex-col relative hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]"
    >
      {/* Code Badge */}
      <span className="absolute top-6 right-6 font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded tracking-wide">
        METHOD {method.code}
      </span>

      <h3 className="font-heading text-xl md:text-2xl font-extrabold text-gray-900 hover:text-orange-500 transition-colors duration-250 mt-2 pr-24">
        {method.name}
      </h3>
      <p className="mt-4 text-gray-500 text-xs md:text-sm leading-relaxed font-light">
        {method.description}
      </p>

      {method.note && (
        <div className="mt-4 flex gap-3 items-start bg-slate-50 border-l-4 border-orange-500 p-4 rounded">
          <Info className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-600 leading-relaxed font-semibold">
            {method.note}
          </p>
        </div>
      )}

      {(method.advantages || method.limitations) && (
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {method.advantages && (
            <div>
              <p className="font-heading text-[10px] font-bold tracking-wider text-slate-700 mb-3 uppercase">Advantages</p>
              <ul className="space-y-2">
                {method.advantages.map((a) => (
                  <li key={a} className="text-xs text-gray-600 flex gap-2 items-start font-light">
                    <span className="w-4.5 h-4.5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {method.limitations && (
            <div>
              <p className="font-heading text-[10px] font-bold tracking-wider text-gray-500 mb-3 uppercase">Limitations</p>
              <ul className="space-y-2">
                {method.limitations.map((l) => (
                  <li key={l} className="text-xs text-gray-500 flex gap-2 items-start font-light">
                    <span className="w-4.5 h-4.5 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                      <X className="w-2.5 h-2.5" />
                    </span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {method.uses && (
        <div className="mt-6 pt-5 border-t border-gray-200">
          <p className="font-heading text-[10px] font-bold tracking-wider text-gray-900 mb-3 uppercase">Key Applications</p>
          <div className="flex flex-wrap gap-2">
            {method.uses.map((u) => (
              <span 
                key={u} 
                className="text-xs border border-gray-200 bg-slate-50 text-gray-600 px-3.5 py-1 rounded hover:border-orange-500/40 hover:text-orange-500 transition-all duration-200 cursor-default"
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
