import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, MapPin, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SESSIONS } from '../data/sessions';
import { clsx } from 'clsx';

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days = ['All', 'Day 1', 'Day 2', 'Day 3'];
  const categories = ['All', 'Keynote', 'Breakout', 'Customer Story', 'Learning Lab', 'Expo'];

  const filteredSessions = useMemo(() => {
    return SESSIONS.filter((session) => {
      const matchesSearch = 
        session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.speaker.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDay = selectedDay === 'All' || session.day === selectedDay;
      const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;

      return matchesSearch && matchesDay && matchesCategory;
    });
  }, [searchQuery, selectedDay, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Session Catalog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our schedule of events, keynotes, and workshops.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search sessions, speakers, or topics..."
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Day Filter */}
              <div className="relative min-w-[140px]">
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {days.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Calendar className="h-4 w-4" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[180px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Filter className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Showing {filteredSessions.length} sessions
          </div>

          <AnimatePresence mode="popLayout">
            {filteredSessions.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredSessions.map((session) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={session.id}
                  >
                    <Link 
                      to={`/catalog/${session.id}`}
                      className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-500/50 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <span className={clsx(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                            session.category === 'Keynote' && "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
                            session.category === 'Breakout' && "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
                            session.category === 'Learning Lab' && "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
                            session.category === 'Customer Story' && "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
                          )}>
                            {session.category}
                          </span>
                          <span className="text-xs font-mono text-slate-400">{session.id}</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                          {session.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                          {session.description}
                        </p>

                        <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                            <User className="w-4 h-4 mr-2 text-primary-500" />
                            <span className="font-medium text-slate-700 dark:text-slate-300">{session.speaker}</span>
                          </div>
                          <div className="flex items-center text-xs text-slate-500 dark:text-slate-500">
                             <Calendar className="w-3.5 h-3.5 mr-1.5" />
                             {session.day}
                             <span className="mx-2">•</span>
                             <Clock className="w-3.5 h-3.5 mr-1.5" />
                             {session.time}
                          </div>
                           <div className="flex items-center text-xs text-slate-500 dark:text-slate-500">
                             <MapPin className="w-3.5 h-3.5 mr-1.5" />
                             {session.location}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
               <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No sessions found</h3>
                <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
