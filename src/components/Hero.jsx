import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      {/* Animated background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -right-10 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            <div className="h-6 w-6 rounded-sm border border-white/30 bg-white/10 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
          </div>
          <span className="font-semibold tracking-wide text-white/90">NeuraTech Automations</span>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
          <Rocket className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-0.5" />
          Get Started
        </a>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-2 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
            Futuristic Tech Services
          </span>
          <h1 className="text-balance bg-gradient-to-br from-white via-cyan-100 to-purple-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl">
            Automate. Integrate. Innovate.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            We build AI-powered automations, seamless SAP integrations, and modern web & mobile experiences that scale with your business.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 px-5 py-3 font-medium text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.7)] transition hover:brightness-110"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:border-purple-400/40 hover:bg-purple-500/10"
            >
              Get a Proposal
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative h-[420px] w-full md:h-[520px]"
        >
          {/* Spline 3D Scene */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_0_60px_-10px_rgba(99,102,241,0.6)]">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Glow overlay that does not block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
