import React from 'react';
import { motion } from 'motion/react';
import { Search, Target, Lightbulb, PenTool, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: 'Research',
      description: 'Understanding user needs, market trends, and business goals through deep analysis.',
      icon: <Search size={24} />,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
      id: 2,
      title: 'Define',
      description: 'Creating user personas, empathy maps, and defining the core problem statement.',
      icon: <Target size={24} />,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
    },
    {
      id: 3,
      title: 'Ideate',
      description: 'Brainstorming solutions, sketching wireframes, and creating information architecture.',
      icon: <Lightbulb size={24} />,
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
    },
    {
      id: 4,
      title: 'Design',
      description: 'Crafting high-fidelity UI, interactive prototypes, and design systems.',
      icon: <PenTool size={24} />,
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400'
    },
    {
      id: 5,
      title: 'Test & Deliver',
      description: 'Usability testing, gathering feedback, iterating, and final developer handoff.',
      icon: <Rocket size={24} />,
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            My Design Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A structured approach to solving design problems and delivering exceptional results.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${step.color} bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-950`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
