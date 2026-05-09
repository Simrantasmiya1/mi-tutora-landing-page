import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a tutor?',
      answer: 'Simply call us at +91 74830 34168 or +91 9773980489, or fill out the contact form on our website. Our team will help you find the perfect tutor based on your requirements within 24 hours.',
    },
    {
      question: 'What are your charges?',
      answer: 'Our fees vary depending on the subject, class, and type of tuition (home or online). Contact us for a customized quote. We offer competitive pricing and flexible payment plans to suit your budget.',
    },
    {
      question: 'Are your tutors verified?',
      answer: 'Yes! All our tutors undergo rigorous background verification, qualification checks, and interviews. We only work with experienced and highly qualified educators to ensure the best learning experience.',
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Absolutely! We offer both online and home tuition services. Our online classes are conducted via video conferencing with interactive whiteboards, recorded sessions, and comprehensive study materials.',
    },
    {
      question: 'Can I change my tutor?',
      answer: 'Yes, if you\'re not satisfied with your current tutor, we\'ll replace them at no extra cost. Your satisfaction and learning outcomes are our top priorities.',
    },
    {
      question: 'What subjects do you cover?',
      answer: 'We cover all subjects from Class 1 to 12, competitive exam preparation (NEET, JEE, SAT, IELTS), coding & programming, languages, music, arts, and more. Check our Services section for the complete list.',
    },
    {
      question: 'How do I become a tutor with Mi Tutora?',
      answer: 'Call us at +91 74830 34168 or email your resume to musharrafak06@gmail.com. We\'ll review your application and schedule an interview. We welcome passionate educators from all backgrounds.',
    },
    {
      question: 'Is there a free demo class?',
      answer: 'Yes! We offer a completely free demo class so you can experience our teaching methodology and meet your tutor before committing. No payment required for the demo.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300">
            Got questions? We've got answers!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
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
          <p className="text-slate-300 mb-6">Still have questions?</p>
          <a
            href="tel:+917483034168"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-semibold text-lg shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all"
          >
            Contact Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}