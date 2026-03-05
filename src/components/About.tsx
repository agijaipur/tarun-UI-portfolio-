import React from 'react';
import { motion } from 'motion/react';
import { Figma, PenTool, Layout, Smartphone, Globe, Code, Palette, Search } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'UI Design', icon: <Layout /> },
    { name: 'UX Research', icon: <Search /> },
    { name: 'Wireframing', icon: <PenTool /> },
    { name: 'Prototyping', icon: <Smartphone /> },
    { name: 'Logo Design', icon: <Palette /> },
    { name: 'Web Design', icon: <Globe /> },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                About Me
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I am a creative and detail-oriented UI/UX Designer with expertise in designing user-friendly digital experiences. I specialize in research-driven design, clean interfaces, and impactful brand visuals.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              With a deep understanding of user psychology and modern design trends, I create digital products that not only look beautiful but also solve real problems for users and businesses alike.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                >
                  <span className="text-blue-600 dark:text-blue-400">
                    {React.cloneElement(skill.icon as React.ReactElement, { size: 18 })}
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative shadow-2xl">
              {/* Placeholder for Profile Image */}
              <img 
                src="https://picsum.photos/seed/designer/800/800" 
                alt="Tarun Singh Nirwan" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    5+
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Years of Experience</p>
                    <p className="font-bold text-slate-900 dark:text-white">Delivering Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dots-pattern opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
