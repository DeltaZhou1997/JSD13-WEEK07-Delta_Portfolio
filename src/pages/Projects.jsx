import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { projectsData } from '../mockData/projects';

const Projects = () => {
  const { language } = useOutletContext();
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter((item) => item.category === filter);

  // English/French Dictionary for UI Elements
  const text = {
    EN: {
      sub: "Exhibition",
      title: "Curated Works",
      All: "All",
      Personal: "Personal",
      Group: "Group",
      inspect: "Inspect Project \u2192" 
    },
    FR: {
      sub: "Exposition",
      title: "Œuvres Sélectionnées",
      All: "Tout",
      Personal: "Personnel",
      Group: "Groupe",
      inspect: "Inspecter le projet \u2192"
    }
  };

  const t = text[language];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold">{t.sub}</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-gallery-900 dark:text-[#F5EBE1] transition-colors">{t.title}</h2>
        <div className="w-12 h-0.5 bg-gallery-gold mx-auto mt-4"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center gap-3 mb-12">
        {['All', 'Personal', 'Group'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
              filter === category 
                ? 'bg-gallery-900 dark:bg-[#F5EBE1] text-white dark:text-[#1F1612] border-gallery-900 dark:border-[#F5EBE1]' 
                : 'bg-transparent text-gray-600 dark:text-[#D4C9C0] border-gray-300 dark:border-[#4F3C2E] hover:border-gallery-900 dark:hover:border-[#F5EBE1]'
            }`}
          >
            {t[category]}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group border border-gray-200 dark:border-[#4F3C2E] bg-white dark:bg-[#2C201A] flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-500">
            
            {/* Top Half: Image and Text */}
            <div>
              <div className="h-56 bg-gallery-200 dark:bg-[#1A120E] border-b border-gray-100 dark:border-[#4F3C2E] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-wider text-gallery-gold font-semibold block mb-2">{project.tech}</span>
                <h3 className="font-serif text-xl font-bold text-gallery-900 dark:text-[#F5EBE1] mb-2 transition-colors">{project.title}</h3>
                <p className="text-xs text-gray-600 dark:text-[#D4C9C0] leading-relaxed transition-colors">{project.shortDesc}</p>
              </div>
            </div>

            {/* Bottom Half: Link (FIXED ALIGNMENT) */}
            <div className="px-6 py-5 border-t border-gray-100 dark:border-[#4F3C2E] flex items-center transition-colors">
              <Link to={`/projects/${project.id}`} className="text-xs uppercase tracking-widest font-semibold text-gallery-900 dark:text-[#F5EBE1] hover:text-gallery-gold dark:hover:text-gallery-gold transition-colors">
                {t.inspect}
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;