import { motion } from 'framer-motion';

export const Socials = () => {
  const colors = [
    { name: 'Primary Pink', hex: '#fb7185' },
    { name: 'Primary Indigo', hex: '#6366f1' },
    { name: 'Dark Teal', hex: '#0d2c2d' },
    { name: 'Deep Blue', hex: '#1d2f58' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Social Kit
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-slate-500 dark:text-slate-400">
            Everything you need to share the TechStack Conference story.
          </p>
        </motion.div>

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 shadow-sm border border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Official Logo</h2>
          <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
            <img src="/logo.svg" alt="TechStack Conference Logo" className="w-48 h-48 mb-6" />
            <p className="text-slate-900 dark:text-white font-bold text-xl">TechStackConference</p>
          </div>
          <div className="mt-6 flex justify-center">
            <a 
              href="/logo.svg" 
              download 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Download SVG
            </a>
          </div>
        </motion.div>

        {/* Brand Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Brand Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="group cursor-pointer">
                <div 
                  className="h-32 rounded-xl shadow-md transition-transform group-hover:scale-105 mb-3 border border-slate-200 dark:border-slate-700"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="px-1">
                  <p className="font-semibold text-slate-900 dark:text-white">{color.name}</p>
                  <p className="font-mono text-slate-500 dark:text-slate-400 text-sm uppercase">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Typography</h2>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Primary Font</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">Inter</p>
                </div>
                <div className="space-y-2">
                    <p className="text-4xl font-extrabold text-slate-900 dark:text-white">Aa Bb Cc</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      The quick brown fox jumps over the lazy dog.
                    </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Social Media</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Official Tag</p>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">@techstackconf2026</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Connect with us</p>
                  <div className="flex gap-3">
                     {/* Social placeholders since we don't have real links */}
                     {['Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
                       <div key={platform} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300">
                         {platform}
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};
