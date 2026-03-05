import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Redesign',
      category: 'Website Design',
      image: 'https://picsum.photos/seed/ecommerce/800/600',
      description: 'A complete overhaul of a fashion e-commerce platform focusing on conversion optimization and mobile responsiveness.',
      tags: ['Figma', 'UX Research', 'Prototyping'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: 'Fintech Mobile App',
      category: 'Mobile UI',
      image: 'https://picsum.photos/seed/fintech/800/600',
      description: 'Secure and intuitive mobile banking interface designed to simplify complex financial transactions for millennials.',
      tags: ['Adobe XD', 'Mobile Design', 'Interaction'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'SaaS Analytics Dashboard',
      category: 'Web Application',
      image: 'https://picsum.photos/seed/saas/800/600',
      description: 'Data visualization dashboard for a B2B SaaS product, making complex metrics digestible and actionable.',
      tags: ['Figma', 'Dashboard', 'Data Viz'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'Branding',
      image: 'https://picsum.photos/seed/branding/800/600',
      description: 'Comprehensive brand identity including logo, typography, and color system for a tech startup.',
      tags: ['Illustrator', 'Branding', 'Identity'],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A selection of my recent projects showcasing my expertise in UI/UX design and problem-solving.
            </p>
          </motion.div>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
          >
            View All Projects <ArrowRight size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 group/btn">
                  View Case Study
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
