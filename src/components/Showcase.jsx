import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Automated Invoice Processing',
    desc: 'AI OCR + SAP integration reduced processing time by 68% for a global distributor.',
    badge: 'AI + SAP',
  },
  {
    title: 'Predictive Maintenance',
    desc: 'Edge analytics and alerts cut downtime by 32% in a manufacturing plant.',
    badge: 'ML Ops',
  },
  {
    title: 'Omnichannel Commerce',
    desc: 'Headless React storefront with real-time ERP sync increased conversions by 21%.',
    badge: 'Web + API',
  },
];

const testimonials = [
  {
    quote: 'They delivered automation that just works. Our teams finally focus on strategy, not busywork.',
    name: 'Ava Thompson',
    role: 'VP Operations, NorthBay Supply',
  },
  {
    quote: 'Seamless SAP bots and API orchestration — faster than our internal timeline and under budget.',
    name: 'Liam Carter',
    role: 'IT Director, Alpen Group',
  },
  {
    quote: 'Beautiful frontend, bulletproof integrations. We launched in weeks, not months.',
    name: 'Maya Patel',
    role: 'Product Lead, NovaWorks',
  },
];

const Showcase = () => {
  return (
    <section className="relative w-full bg-[#0a0b10] py-16 text-white md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Case Studies & Testimonials
          </h2>
          <p className="mt-3 text-white/70">Real results from intelligent automation and engineering.</p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl transition duration-500 group-hover:scale-110" />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400" /> {c.badge}
              </span>
              <h3 className="relative z-10 mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-white/70">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -100, -200, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="min-w-[320px] max-w-sm flex-1 rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_30px_-12px_rgba(56,189,248,0.4)]"
              >
                <p className="text-white/80">“{t.quote}”</p>
                <div className="mt-4 text-sm text-white/60">
                  <span className="font-medium text-white/80">{t.name}</span> — {t.role}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
