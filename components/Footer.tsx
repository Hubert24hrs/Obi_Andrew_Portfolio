
import React from 'react';
import { Database, Heart } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
             <div className="bg-primary-600 p-2 rounded-lg text-white">
               <Database size={20} />
             </div>
             <span className="font-bold text-xl tracking-tight">Obi Andrew</span>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            © {new Date().getFullYear()} Obi Andrew. All rights reserved. Built for Data Insights.
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> in Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
