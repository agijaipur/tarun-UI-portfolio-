import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager at TechFlow',
      content: 'Tarun delivered exceptional UI designs that improved our user engagement by 40%. His attention to detail and understanding of user needs is outstanding.',
      image: 'https://picsum.photos/seed/sarah/100/100'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder of StartUp Inc',
      content: 'Working with Tarun was a game-changer for our MVP. He transformed our rough ideas into a polished, professional product that investors loved.',
      image: 'https://picsum.photos/seed/michael/100/100'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Marketing Director',
      content: 'The brand identity Tarun created for us perfectly captured our vision. He is not just a designer but a strategic partner who cares about results.',
      image: 'https://picsum.photos/seed/emily/100/100'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Don't just take my word for it. Here's what people say about working with me.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl relative border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/30 w-12 h-12" />
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 relative z-10 leading-relaxed italic">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
