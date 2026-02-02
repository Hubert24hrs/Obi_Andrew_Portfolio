
import React from 'react';
import { BLOGS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Data Insights</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              Exploring trends in Business Intelligence, AI, and CRM strategy.
            </p>
          </div>
          <button className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-700 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all text-sm">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOGS.map((blog, idx) => (
            <article key={idx} className="group p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  {blog.category}
                </span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">{blog.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">{blog.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {blog.excerpt}
              </p>
              <a href={blog.link} className="inline-flex items-center gap-2 font-bold text-primary-600 group/link">
                Read Full Story
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
