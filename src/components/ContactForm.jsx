import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const initialState = {
  name: '',
  email: '',
  mobile: '',
  companyName: '',
  designation: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      // Simulate API submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('sent')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative overflow-hidden p-8 md:p-12 flex flex-col items-center text-center bg-white border border-slate-100 rounded-2xl shadow-2xl"
          >
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-900 via-slate-800 to-orange-500" />

            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
              className="relative w-16 h-16 rounded-full bg-green-500/10 border border-green-200 flex items-center justify-center mb-5 ring-8 ring-green-50"
            >
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </motion.div>

            <h3 className="relative font-heading text-xl text-gray-900 font-extrabold uppercase tracking-widest">
              Message Received
            </h3>
            <p className="relative text-gray-500 mt-3 max-w-md font-medium leading-relaxed text-xs">
              Thank you for reaching out to Masar NDT. Our engineering team will review your enquiry and get back to you within 24 hours.
            </p>
            <button
              className="relative mt-7 text-xs text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white px-7 py-3 font-heading font-extrabold tracking-widest uppercase rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
              onClick={() => setStatus('idle')}
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="relative overflow-hidden bg-white border border-slate-100 shadow-2xl rounded-2xl"
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-orange-500" />

            <div className="p-6 md:p-9 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                <Field label="Mobile Number" name="mobile" type="tel" value={form.mobile} onChange={handleChange} />
                <Field label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} />
                <div className="sm:col-span-2">
                  <Field label="Designation" name="designation" value={form.designation} onChange={handleChange} />
                </div>
                <div className="sm:col-span-2 flex flex-col">
                  <label htmlFor="message" className="text-[10px] font-heading font-extrabold text-slate-800 uppercase tracking-widest mb-2">
                    Message / Scope Details <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 hover:border-slate-300 outline-none transition-all duration-200 resize-y font-semibold leading-relaxed placeholder:text-gray-400 placeholder:font-normal"
                    placeholder="Describe your NDT, inspection, or technical manpower requirements..."
                  />
                </div>
              </div>

              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 p-3.5 rounded-lg"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <p>{errorMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-heading font-extrabold text-xs tracking-widest uppercase px-9 py-4 rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-[10px] font-heading font-extrabold text-slate-800 uppercase tracking-widest mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 hover:border-slate-300 outline-none transition-all duration-200 font-semibold placeholder:text-gray-400 placeholder:font-normal"
      />
    </div>
  )
}