
import React from 'react';
// Added Database to the imports to fix "Cannot find name 'Database'" error
import { ArrowRight, Github, Linkedin, Mail, Download, Database } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wide uppercase">
                Available for New Projects
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Turning Data into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Actionable Insights</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">Obi Andrew</span>.
                I specialize in SQL, Power BI, and Python to transform sales and operational data into growth strategies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/25 flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/Obi_Andrew_Resume.html" target="_blank" className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                Download Resume
                <Download size={18} />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 transition-colors">
                <Github size={24} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="text-slate-500 hover:text-primary-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Outer circle with gradient border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 animate-[spin_60s_linear_infinite]"></div>

              {/* Profile Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Obi Andrew Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Data Floating Elements */}
              <div className="absolute -top-4 right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-primary-500/20">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <Database size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Data Models</p>
                  <p className="text-sm font-bold">100+ Optimized</p>
                </div>
              </div>

              <div className="absolute bottom-10 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse shadow-indigo-500/20">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Efficiency</p>
                  <p className="text-sm font-bold">+25% Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
