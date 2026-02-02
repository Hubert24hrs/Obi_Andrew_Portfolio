
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              A selection of data science projects focusing on data storytelling and technical efficiency.
            </p>
          </div>
          <a 
            href="https://github.com/Andrewobi26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            See all on GitHub
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-0">
                <div className="xl:col-span-2 overflow-hidden h-64 xl:h-auto relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                
                <div className="xl:col-span-3 p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                    <button className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <ExternalLink size={18} />
                      Live Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
