import { useState, useEffect } from 'react';

import TeacherForm from './TeacherForm';
import DemoForm from './DemoForm';

import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  Users,
  Sparkles,
} from 'lucide-react';

import heroImage from '../../imports/hero.jpg';

export function Hero() {

  /* STATES */
  const [showForm, setShowForm] = useState(false);

  const [showDemoForm, setShowDemoForm] =
    useState(false);

  /* OPEN FORM FROM NAVBAR */
  useEffect(() => {

    const handleOpenForm = () => {
      setShowDemoForm(true);
    };

    window.addEventListener(
      'openTeacherForm',
      handleOpenForm
    );

    return () => {
      window.removeEventListener(
        'openTeacherForm',
        handleOpenForm
      );
    };

  }, []);

  /* SCROLL FUNCTION */
  const scrollToSection = (id: string) => {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    }
  };

  return (
    <>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-white"
      >

        <div className="w-full h-full grid lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="relative z-10 flex items-center bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20">

            {/* BACKGROUND EFFECT */}
            <div className="absolute inset-0 overflow-hidden">

              <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl" />

              <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />

            </div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-24 lg:py-32"
            >

              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#00a992]/10 text-[#00a992] rounded-full mb-6 shadow-sm"
              >

                <Sparkles className="w-4 h-4" />

                <span className="text-sm font-medium">
                  India's #1 Education Platform
                </span>

              </motion.div>

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              >

                Trusted Tutors for{' '}

                <span className="bg-gradient-to-r from-[#00a992] to-emerald-500 bg-clip-text text-transparent">
                  Every Student
                </span>

              </motion.h1>

              {/* SUBTEXT */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
              >
                Home Tuition, Online Classes,
                NEET/JEE Coaching & Coding Skills
                — all in one place.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
              >

                {/* BOOK FREE DEMO */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setShowDemoForm(true)
                  }
                  className="group px-8 py-4 bg-[#00a992] text-white rounded-full font-semibold text-lg shadow-lg shadow-[#00a992]/25 hover:shadow-xl hover:shadow-[#00a992]/35 transition-all flex items-center space-x-2"
                >

                  <span>Book Free Demo</span>

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                </motion.button>

                {/* BECOME TUTOR */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setShowForm(true)
                  }
                  className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full font-semibold text-lg hover:border-[#00a992] hover:bg-[#00a992]/5 transition-all flex items-center space-x-2 shadow-sm"
                >

                  <Users className="w-5 h-5" />

                  <span>Become a Tutor</span>

                </motion.button>

                {/* DOWNLOAD */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    scrollToSection(
                      'app-download'
                    )
                  }
                  className="px-6 py-3 text-slate-600 font-medium text-base hover:text-[#00a992] transition-all flex items-center space-x-2"
                >

                  <Download className="w-5 h-5" />

                  <span>Download App</span>

                </motion.button>

              </motion.div>

              {/* STATS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200"
              >

                {[
                  {
                    number: '10,000+',
                    label: 'Happy Students',
                  },
                  {
                    number: '500+',
                    label: 'Expert Tutors',
                  },
                  {
                    number: '50+',
                    label: 'Cities',
                  },
                  {
                    number: '98%',
                    label: 'Success Rate',
                  },
                ].map((stat, index) => (

                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        0.7 + index * 0.1,
                    }}
                    className="text-left"
                  >

                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      {stat.number}
                    </div>

                    <div className="text-xs sm:text-sm text-slate-500">
                      {stat.label}
                    </div>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="relative hidden lg:block h-full"
          >

            <img
              src={heroImage}
              alt="Professional tutor teaching student at home"
              className="w-full h-full object-cover"
            />

          </motion.div>

        </div>
      </section>

      {/* TUTOR FORM POPUP */}
      {showForm && (

        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4">

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">

            {/* CLOSE BUTTON */}
            <button
              onClick={() =>
                setShowForm(false)
              }
              className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg z-50 text-black font-bold"
            >
              ✕
            </button>

            <TeacherForm />

          </div>
        </div>

      )}

      {/* DEMO FORM POPUP */}
      {showDemoForm && (

        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4">

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">

            {/* CLOSE BUTTON */}
            <button
              onClick={() =>
                setShowDemoForm(false)
              }
              className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg z-50 text-black font-bold"
            >
              ✕
            </button>

            <DemoForm />

          </div>
        </div>

      )}

    </>
  );
} 