import { motion } from 'motion/react';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

export function TrustSection() {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Active Students',
      description: 'Learning across India',
    },
    {
      icon: Award,
      number: '500+',
      label: 'Verified Tutors',
      description: 'Highly qualified educators',
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Success Rate',
      description: 'Students achieving goals',
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Cities',
      description: 'Nationwide coverage',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-slate-50/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join India's fastest-growing education platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 group-hover:shadow-2xl group-hover:shadow-emerald-100/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-slate-700 mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-slate-500">
                  {stat.description}
                </div>

                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}