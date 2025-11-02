import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="relative w-full bg-[#0a0b10] pb-20 pt-16 text-white md:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.16),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Let’s Build Something Intelligent Together
          </h2>
          <p className="mt-3 text-white/70">
            Tell us about your automation goals. We’ll propose a roadmap in 24–48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.4)] backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="grid gap-2 text-sm">
                <span className="text-white/70">Name</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-cyan-400/30 placeholder:text-white/40 focus:border-cyan-400/40 focus:ring-2"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-white/70">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="you@company.com"
                  className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-cyan-400/30 placeholder:text-white/40 focus:border-cyan-400/40 focus:ring-2"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-white/70">Message</span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="What would you like to build or automate?"
                  className="resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-cyan-400/30 placeholder:text-white/40 focus:border-cyan-400/40 focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 px-5 py-3 font-medium text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.7)] transition hover:brightness-110"
              >
                Request Proposal
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white/90">About Us</h3>
              <p className="text-white/70">
                NeuraTech Automations helps enterprises scale with AI-driven process automation, secure SAP
                integrations, and delightful digital products across web and mobile.
              </p>
              <ul className="grid gap-3 text-sm text-white/75">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> End-to-end delivery — from strategy to production
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Security-first integrations and data governance
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Measurable ROI with automation analytics
                </li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'Projects', value: '120+' },
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Satisfaction', value: '4.9/5' },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="text-2xl font-bold text-white">{m.value}</div>
                    <div className="text-xs uppercase tracking-wider text-white/60">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="relative mx-auto mt-16 max-w-7xl px-6 pb-4 text-center text-white/50">
        © {new Date().getFullYear()} NeuraTech Automations — All rights reserved.
      </footer>
    </section>
  );
};

export default ContactCTA;
