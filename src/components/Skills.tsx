import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  const tools = [
    { name: 'Figma', level: 95, color: 'bg-purple-500' },
    { name: 'Adobe XD', level: 85, color: 'bg-pink-500' },
    { name: 'Photoshop', level: 80, color: 'bg-blue-500' },
    { name: 'Illustrator', level: 75, color: 'bg-orange-500' },
  ];

  const expertise = [
    'Logo Design',
    'Website UI Design',
    'Mobile App Design',
    'UX Strategy',
    'User Research',
    'Wireframing & Prototyping',
    'Interaction Design',
    'Design Systems'
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            My technical proficiency and core competencies that drive my design process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Design Tools</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={tool.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{tool.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">{tool.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      className={`h-full rounded-full ${tool.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
