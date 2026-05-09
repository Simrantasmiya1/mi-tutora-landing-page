import { motion } from 'motion/react';
import { Home, Video, Code, Brain, Sparkles } from 'lucide-react';

export function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: 'Offline Home Tuitions',
      description: 'Personalized one-to-one tutoring at home with expert tutors.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Video,
      title: 'One-to-One Online Tuitions',
      description: 'Live interactive online classes with dedicated personal attention.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Programming Languages',
      description: 'Learn Java, C++, Python, and other programming languages from basics to advanced.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: 'AI & ML',
      description: 'Learn artificial intelligence and machine learning with hands-on real-world projects.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Gen AI',
      description: 'Learn generative AI, ChatGPT, prompt engineering, and modern AI tools.',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#00a992]/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive learning solutions for every subject and skill level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 overflow-hidden">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+917483034168"
            className="inline-flex items-center px-8 py-4 bg-[#00a992] text-white rounded-full font-semibold text-lg shadow-xl shadow-[#00a992]/30 hover:shadow-2xl hover:shadow-[#00a992]/40 hover:scale-105 transition-all"
          >
            Explore All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}