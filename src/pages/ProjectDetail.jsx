import { useParams, Link, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectsData } from '../mockData/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const { language } = useOutletContext();
  const [project, setProject] = useState(null);

  const text = {
    EN: {
      loading: "Loading catalog entry...",
      back: "Back to Curated Works",
      showcase: "Showcase Artifact",
      category: "Showcase",
      tech: "Tech Stack",
      concept: "Concept & Architecture",
      contrib: "Contributors",
      demo: "Live Artifact Demo",
      repo: "Source Code (GitHub)"
    },
    FR: {
      loading: "Chargement de l'entrée du catalogue...",
      back: "Retour aux œuvres sélectionnées",
      showcase: "Artefact d'exposition",
      category: "Exposition",
      tech: "Technologies",
      concept: "Concept & Architecture",
      contrib: "Contributeurs",
      demo: "Démo en direct",
      repo: "Code Source (GitHub)"
    }
  };

  const t = text[language];

  useEffect(() => {
    setProject(projectsData.find((p) => p.id === id));
  }, [id]);

  if (!project) return <div className="max-w-4xl mx-auto px-6 py-24 text-center font-serif italic text-gray-400 dark:text-gray-500">{t.loading}</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/projects" className="text-xs uppercase tracking-widest text-gray-500 dark:text-[#A89F95] hover:text-gallery-900 dark:hover:text-[#F5EBE1] inline-block mb-8 transition-colors">
        &larr; {t.back}
      </Link>

      <div className="w-full h-80 sm:h-96 bg-gallery-200 dark:bg-[#1A120E] border border-gray-200 dark:border-[#4F3C2E] flex items-center justify-center mb-10 overflow-hidden relative transition-colors">
        {project.image ? (
           <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
           <span className="font-serif italic text-gray-400 dark:text-gray-600 text-lg">[{project.title} {t.showcase}]</span>
        )}
      </div>

      <div className="border-b border-gray-200 dark:border-[#4F3C2E] pb-6 mb-8 transition-colors">
        <span className="text-xs uppercase tracking-widest text-gallery-gold font-semibold block mb-2">{project.category} {t.category}</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gallery-900 dark:text-[#F5EBE1] transition-colors">{project.title}</h1>
        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-[#A89F95] mt-2 font-mono transition-colors">{t.tech}: {project.tech}</p>
      </div>

      <div className="space-y-8 text-sm text-gray-700 dark:text-[#D4C9C0] leading-relaxed transition-colors">
        <div>
          <h3 className="font-serif text-lg font-bold text-gallery-900 dark:text-[#F5EBE1] mb-2 transition-colors">{t.concept}</h3>
          <p>{project.fullDesc}</p>
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-gallery-900 dark:text-[#F5EBE1] mb-2 transition-colors">{t.contrib}</h3>
          <p>{project.contributors}</p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-gallery-900 dark:bg-[#F5EBE1] text-white dark:text-[#1F1612] text-xs uppercase tracking-widest hover:bg-gallery-gold dark:hover:bg-gallery-gold transition-colors">
            {t.demo}
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="px-6 py-3 border border-gallery-900 dark:border-[#F5EBE1] text-gallery-900 dark:text-[#F5EBE1] text-xs uppercase tracking-widest hover:bg-gallery-900 hover:text-white dark:hover:bg-[#F5EBE1] dark:hover:text-[#1F1612] transition-colors">
            {t.repo}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;