import { motion } from 'motion/react';
import { Shield, Clock, Users, Award, Target, Sparkles, DollarSign } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Verified Tutors',
      description: 'All our tutors are background-verified and highly qualified with proven track records.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Learn at your own pace with flexible timings that fit your busy schedule perfectly.',
    },
    {
      icon: DollarSign,
      title: 'Negotiable Pricing',
      description: 'Flexible fee options based on course, tutor experience, and learning requirements.',
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'One-on-one attention with customized lesson plans tailored to each student\'s needs.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '98% of our students achieve their academic goals and improve their grades significantly.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support to help you with any queries or concerns you may have.',
    },
    {
      icon: Sparkles,
      title: 'Affordable Pricing',
      description: 'Quality education at competitive prices with flexible payment plans available.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-[#00a992]/5 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00a992]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Mi Tutora?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the difference with India's most trusted education platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#00a992]/50 hover:shadow-xl hover:shadow-[#00a992]/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#00a992] to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#00a992]/30">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a992]/0 to-[#00a992]/0 group-hover:from-[#00a992]/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}