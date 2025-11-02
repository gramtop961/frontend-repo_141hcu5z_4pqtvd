import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cog, Code, Smartphone, Link } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Automations',
    desc: 'Process automation, intelligent workflows, and AI copilots tailored to your operations.',
    gradient: 'from-cyan-500/20 to-purple-500/20',
    ring: 'ring-cyan-400/30',
  },
  {
    icon: Cog,
    title: 'SAP Automations',
    desc: 'ERP integrations, process bots, and SAP API automation for reliable enterprise flows.',
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    ring: 'ring-indigo-400/30',
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Modern React & Next.js applications with performant, accessible UI systems.',
    gradient: 'from-fuchsia-500/20 to-sky-500/20',
    ring: 'ring-fuchsia-400/30',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native-quality Android & iOS applications with smooth UX and offline-first design.',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    ring: 'ring-emerald-400/30',
  },
  {
    icon: Link,
    title: 'API Integrations',
    desc: 'Connect enterprise systems, automate data exchange, and orchestrate secure APIs.',
    gradient: 'from-teal-500/20 to-purple-500/20',
    ring: 'ring-teal-400/30',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0a0b10] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Services That Accelerate Your Business
          </h2>
          <p className="mt-3 text-white/70">
            Strategy, automation, and engineering — delivered as sleek, reliable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md ${s.ring}`}
              >
                <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${s.gradient} blur-2xl transition duration-500 group-hover:scale-110`} />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.5)]">
                    <Icon className="h-6 w-6 text-cyan-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-cyan-300">
                    <span className="text-sm">Learn more</span>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="mb-5 text-center text-sm uppercase tracking-wider text-white/50">Technologies Used</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Python','React','Node.js','SAP','TensorFlow','FastAPI','MongoDB','Next.js'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/0 px-4 py-2 text-sm text-white/80 shadow-[0_0_30px_-10px_rgba(99,102,241,0.4)]"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
