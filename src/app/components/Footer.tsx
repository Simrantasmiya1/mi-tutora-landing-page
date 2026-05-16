import { motion } from 'motion/react';

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from 'lucide-react';

import logo from '../../imports/logo.png';

export function Footer() {

  return (

    <footer className="bg-[#063831] text-white pt-20 pb-8 w-full">

      <div className="w-full px-10 lg:px-20">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 border-b border-white/10 pb-14 w-full">

          {/* LEFT SIDE */}
          <div className="max-w-[320px] flex flex-col items-start -mt-20 -ml-2">

            {/* LOGO */}
            <div className="mb-2">

              <img
                src={logo}
                alt="Mi Tutora"
                className="h-72 w-auto object-contain"
              />

            </div>

            {/* DESCRIPTION */}
            <p className="text-white text-[18px] leading-10">

              Trusted home tuition and online
              learning platform helping students
              achieve academic excellence across
              India.

            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 mt-10">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/mi_tutora?igsh=MXZ2M3J6YmZsOXVn0Q=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >

                <Instagram className="w-7 h-7 text-white" />

              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1CVSDJaYhA/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >

                <Facebook className="w-7 h-7 text-white" />

              </a>

            </div>

          </div>

          {/* CENTER SECTION */}
          <div className="flex flex-col sm:flex-row gap-24 lg:gap-36">

            {/* QUICK LINKS */}
            <div>

              <h3 className="text-5xl font-bold mb-10 text-white">

                Quick Links

              </h3>

              <ul className="space-y-7 text-white text-[22px]">

                <li>
                  <a href="#hero" className="hover:text-gray-300 transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#services" className="hover:text-gray-300 transition">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#how-it-works" className="hover:text-gray-300 transition">
                    How It Works
                  </a>
                </li>

                <li>
                  <a href="#testimonials" className="hover:text-gray-300 transition">
                    Testimonials
                  </a>
                </li>

                <li>
                  <a href="#faq" className="hover:text-gray-300 transition">
                    FAQ
                  </a>
                </li>

              </ul>

            </div>

            {/* SERVICES */}
            <div>

              <h3 className="text-5xl font-bold mb-10 text-white">

                Services

              </h3>

              <ul className="space-y-7 text-white text-[22px]">

                <li>🏠 Home Tuition</li>
                <li>💻 Online Classes</li>
                <li>📘 NEET Coaching</li>
                <li>📗 JEE Coaching</li>
                <li>👨‍💻 Coding Classes</li>
                <li>🌍 Language Training</li>

              </ul>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="min-w-[320px] flex flex-col items-start lg:items-end text-left lg:text-right">

            <h3 className="text-5xl font-bold mb-10 text-white">

              Contact Us

            </h3>

            <div className="space-y-8 text-white text-[22px]">

              {/* PHONE */}
              <div className="flex items-start gap-5 lg:justify-end">

                <Phone className="w-8 h-8 text-white mt-1" />

                <div>
                  <p>+91 7483034168</p>
                  <p>+91 9773980489</p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5 lg:justify-end">

                <Mail className="w-8 h-8 text-white mt-1" />

                <p>
                  mitutoraeducation@gmail.com
                </p>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5 lg:justify-end">

                <MapPin className="w-8 h-8 text-white mt-1" />

                <p>
                  Bengaluru, Karnataka, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* POLICY LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-12 mt-12">

          <a
            href="/pdfs/privacy-policy.pdf#toolbar=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all duration-300 text-lg"
          >
            Privacy Policy
          </a>

          <a
            href="/pdfs/terms-and-conditions.pdf#toolbar=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all duration-300 text-lg"
          >
            Terms of Service
          </a>

          <a
            href="/pdfs/refund-policy.pdf#toolbar=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all duration-300 text-lg"
          >
            Refund Policy
          </a>

        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 mt-10 pt-8 text-center"
        >

          <p className="text-white text-lg">

            © {new Date().getFullYear()} Mi Tutora.
            All rights reserved.

          </p>

        </motion.div>

      </div>

    </footer>

  );

}