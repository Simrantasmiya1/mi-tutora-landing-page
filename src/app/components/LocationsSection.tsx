import { motion } from 'motion/react';
import { MapPin, Globe2 } from 'lucide-react';

export function LocationsSection() {
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kochi', 'Chandigarh',
    'Indore', 'Bhopal', 'Nagpur', 'Vadodara', 'Surat', 'Coimbatore',
  ];

  const internationalLocations = [
    'USA', 'UK', 'Canada', 'Australia', 'UAE', 'Singapore',
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            India & Abroad Coverage
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Quality education accessible from anywhere in the world
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* India Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Cities in India</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {indianCities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-center hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all"
                >
                  <span className="text-white font-medium">{city}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <p className="text-slate-300 text-center">
                And <span className="text-emerald-400 font-semibold">many more cities</span> across India!
              </p>
            </motion.div>
          </motion.div>

          {/* International Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <Globe2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">International</h3>
            </div>

            <div className="space-y-4 mb-8">
              {internationalLocations.map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition-all"
                >
                  <span className="text-white text-lg font-semibold">{location}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h4 className="text-white font-bold text-xl mb-3">Online Classes Worldwide</h4>
              <p className="text-white/90 leading-relaxed">
                Access quality education from anywhere in the world with our interactive online classes. Time zone friendly scheduling available!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}