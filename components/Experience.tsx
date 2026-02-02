
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Work Experience */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <Briefcase size={28} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
            </div>

            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-primary-600 z-10"></div>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors">{exp.role}</h3>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0 mt-2"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-colors shadow-sm">
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="text-primary-600 font-semibold text-sm mb-3">{edu.institution}</p>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{edu.year}</span>
                </div>
              ))}
            </div>

            {/* Resume Call to Action */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-indigo-700 text-white space-y-4 shadow-xl shadow-primary-500/20">
              <h3 className="text-2xl font-bold">Ready to take a closer look?</h3>
              <p className="opacity-90 leading-relaxed">
                Download my full resume for a detailed view of my qualifications, technical skills, and academic history.
              </p>
              <button className="w-full py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                Download PDF Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
