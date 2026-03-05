import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            👋 Hello, I'm Tarun Singh Nirwan
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          Designing Experiences <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            That Users Love
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
        >
          I’m a passionate UI/UX Designer specializing in intuitive digital experiences, 
          transforming complex problems into elegant, user-centric solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-slate-400">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
