import { motion } from "motion/react";
import { Mail, MapPin, Heart } from "lucide-react";
import { socialLinks, stats } from "../../utils/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          {/* Top Section - Brand & CTA */}
          <motion.div
            className="mb-12 text-center sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-green-900/30 dark:text-green-400">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              Available for new opportunities
            </div>

            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-500">
                amazing
              </span>{" "}
              together
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Ready to turn your ideas into reality? Let's connect and create
              something extraordinary.
            </p>

            <motion.a
              href="mailto:elhamdaouimar1@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-400 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 dark:bg-green-400 dark:hover:shadow-green-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
              Get In Touch
              <div className="h-2 w-2 rounded-full bg-gray-900 group-hover:animate-ping"></div>
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 sm:grid-cols-3 sm:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl border border-gray-200/50 bg-white/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white dark:border-slate-700/50 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 transition-transform duration-300 group-hover:scale-110 dark:from-green-900/30 dark:to-emerald-900/30`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mb-12 flex justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-2xl border border-gray-200/50 bg-white/70 p-4 text-gray-600 backdrop-blur-sm transition-all duration-300 dark:border-slate-700/50 dark:bg-slate-800/70 dark:text-gray-400 ${social.color} ${social.bgColor}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>

                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-400/70 pt-8 text-center dark:border-slate-700/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="mb-4 flex flex-col items-center justify-center gap-2 text-gray-600 sm:flex-row dark:text-gray-400">
              <span>
                © {currentYear}{" "}
                <a
                  href="www.github.com/mar1shell"
                  target="_blank"
                  className="interactive font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-green-400"
                >
                  Mar1shell
                </a>
              </span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <span>Crafted with</span>
                <Heart className="h-4 w-4 animate-pulse text-red-500" />
                <span>in Casablanca, Morocco</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>Based in Morocco, Working Globally</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
