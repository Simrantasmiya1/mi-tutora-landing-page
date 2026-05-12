import { motion } from 'motion/react';

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from 'lucide-react';

import logo from '../../imports/image.png';

export function Footer() {

  return (

    <footer className="bg-slate-950 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12">

          {/* COMPANY */}
          <div>

            {/* LOGO */}
            <div className="mb-4">

              <img
                src={logo}
                alt="Mi Tutora"
                className="h-16 w-auto object-contain bg-transparent"
              />

            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-400 leading-relaxed mb-6">

              Trusted home tuition and online learning platform helping
              students achieve academic excellence across India.

            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/mi_tutora?igsh=MXZ2M3J6YmZsOXVn0Q=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
              >

                <Instagram className="w-5 h-5 text-white" />

              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1CVSDJaYhA/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >

                <Facebook className="w-5 h-5 text-white" />

              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="#hero"
                  className="hover:text-[#00a992] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-[#00a992] transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-[#00a992] transition"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#00a992] transition"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-[#00a992] transition"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>🏠 Home Tuition</li>
              <li>💻 Online Classes</li>
              <li>📘 NEET Coaching</li>
              <li>📗 JEE Coaching</li>
              <li>👨‍💻 Coding Classes</li>
              <li>🌍 Language Training</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-5 text-slate-400">

              {/* PHONE */}
              <div className="flex items-start gap-3">

                <Phone className="w-5 h-5 text-[#00a992] mt-1" />

                <div>
                  <p>+91 7483034168</p>
                  <p>+91 9773980489</p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">

                <Mail className="w-5 h-5 text-[#00a992] mt-1" />

                <p>
                  mitutoraeducation@gmail.com
                </p>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-[#00a992] mt-1" />

                <p>
                  Bengaluru, Karnataka, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* POLICY LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">

          {/* PRIVACY */}
          <a
            href="/pdfs/privacy-policy.pdf#toolbar=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#00a992] transition-all duration-300 text-sm"
          >
            Privacy Policy
          </a>

          {/* TERMS */}
          <a
            href="/pdfs/terms-and-conditions.pdf#toolbar=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#00a992] transition-all duration-300 text-sm"
          >
            Terms of Service
          </a>

          {/* REFUND */}
          <a
            href="/pdfs/refund-policy.pdf#toolbar=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#00a992] transition-all duration-300 text-sm"
          >
            Refund Policy
          </a>

        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-slate-800 mt-8 pt-6 text-center"
        >

          <p className="text-slate-500 text-sm">

            © {new Date().getFullYear()} Mi Tutora.
            All rights reserved.

          </p>

        </motion.div>

      </div>

    </footer>

  );
}