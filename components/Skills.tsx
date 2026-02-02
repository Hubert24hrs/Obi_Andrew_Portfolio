
import React from 'react';
import { CORE_SKILLS, BUSINESS_SKILLS } from '../constants';
import { CheckCircle2, TrendingUp, BarChart, Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Technical & Business Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A comprehensive toolkit designed to solve business problems through data-driven decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Stack */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold">Data & Analytics Stack</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors group">
                  <CheckCircle2 size={18} className="text-primary-600 shrink-0" />
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-700 dark:group-hover:text-primary-400">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business & Domain Knowledge */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold">Business Intelligence</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUSINESS_SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors group">
                  <BarChart size={18} className="text-indigo-600 shrink-0" />
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-400">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
           <div className="w-full text-center mb-4">
             <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Industry Certifications</span>
           </div>
           {['Microsoft Certified: Data Analyst Associate', 'Coursera: Python for Everybody', 'SQL for Data Science'].map((cert) => (
             <div key={cert} className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold border border-slate-200 dark:border-slate-700">
               {cert}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
