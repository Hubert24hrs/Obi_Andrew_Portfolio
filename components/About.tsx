
import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-rose-600" size={28} />,
      title: "Impact Driven",
      description: "My goal is always to find the 'Why' behind the data and translate it into bottom-line improvements."
    },
    {
      icon: <Lightbulb className="text-amber-500" size={28} />,
      title: "Curious Mindset",
      description: "Constantly exploring new libraries, models, and tools to stay at the cutting edge of data science."
    },
    {
      icon: <Users className="text-blue-500" size={28} />,
      title: "Stakeholder Focus",
      description: "I bridge the gap between technical complexity and business-friendly presentations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              A Bridge Between <span className="text-primary-600">Complex Data</span> and <span className="text-primary-600">Business Success</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Nigeria, I am an analytical and detail-driven Data Analyst focused on transforming sales, customer, and operational data into strategic assets.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              With a background in Media Arts and a deep specialization in Data Analytics, I bring a unique storytelling perspective to numbers. Whether it's building automated dashboards or cleaning complex datasets, I ensure every metric serves a purpose.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <h4 className="text-3xl font-bold text-primary-600">2+</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Years Freelancing</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <h4 className="text-3xl font-bold text-primary-600">15+</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((v, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-xl group border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                <div className="shrink-0 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 group-hover:bg-white dark:group-hover:bg-slate-800 transition-colors">
                  {v.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
