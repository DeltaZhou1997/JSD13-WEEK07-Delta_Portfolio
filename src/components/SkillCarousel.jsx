import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const SkillCarousel = () => {
  const { language } = useOutletContext();
  const [activeIndex, setActiveIndex] = useState(2); 

  const content = {
    EN: {
      subtitle: "Competencies",
      title: "What I'm Doing",
      skills: [
        { id: 1, title: 'Web Development', icon: 'fa-solid fa-code', desc: 'Proficient in building responsive applications using HTML/CSS, JavaScript, React, Node.js, and Git.' },
        { id: 2, title: 'Project Coordination', icon: 'fa-solid fa-list-check', desc: 'Experienced in end-to-end event coordination, timeline tracking, resource planning, and stakeholder management.' },
        { id: 3, title: 'Data & Operations', icon: 'fa-solid fa-database', desc: 'Skilled in database management, basic data scraping, GenAI literacy, and logical problem-solving.' },
        { id: 4, title: 'Multilingual Communication', icon: 'fa-solid fa-language', desc: 'Fluent communication in Thai and English, with intermediate proficiency in French (DELF B1) and Spanish.' },
        { id: 5, title: 'Strategic Networking', icon: 'fa-solid fa-handshake', desc: 'Capable of B2B networking, client solutions, sourcing opportunities, and target group identification.' }
      ]
    },
    FR: {
      subtitle: "Compétences",
      title: "Ce Que Je Fais",
      skills: [
        { id: 1, title: 'Développement Web', icon: 'fa-solid fa-code', desc: 'Compétente dans la création d\'applications réactives utilisant HTML/CSS, JavaScript, React, Node.js et Git.' },
        { id: 2, title: 'Coordination de Projets', icon: 'fa-solid fa-list-check', desc: 'Expérimentée dans la coordination d\'événements de bout en bout, le suivi des délais et la gestion des parties prenantes.' },
        { id: 3, title: 'Données & Opérations', icon: 'fa-solid fa-database', desc: 'Compétente en gestion de bases de données, extraction de données, utilisation de l\'IA générative et résolution logique de problèmes.' },
        { id: 4, title: 'Communication Multilingue', icon: 'fa-solid fa-language', desc: 'Communication courante en thaï et anglais, avec une maîtrise intermédiaire du français (DELF B1) et de l\'espagnol.' },
        { id: 5, title: 'Réseautage Stratégique', icon: 'fa-solid fa-handshake', desc: 'Capable de gérer le réseautage B2B, les solutions clients, la recherche d\'opportunités et l\'identification de groupes cibles.' }
      ]
    }
  };

  const t = content[language];
  const skills = t.skills;

  const handleNext = () => setActiveIndex((prev) => (prev + 1 < skills.length ? prev + 1 : prev));
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

  return (
    <div className="w-full py-12 overflow-hidden bg-gallery-50 dark:bg-[#1F1612] transition-colors duration-500">
      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold">{t.subtitle}</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-gallery-900 dark:text-[#F5EBE1] transition-colors">{t.title}</h2>
        <div className="w-12 h-0.5 bg-gallery-gold mx-auto mt-4"></div>
      </div>

      <div className="relative w-full h-[220px] md:h-[250px] flex justify-center items-center perspective-distant">
        {skills.map((skill, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          const isVisible = absOffset <= 2;
          const translateX = offset * 110; 
          const scale = 1 - absOffset * 0.15;
          const rotateY = offset * -25; 
          const zIndex = 10 - absOffset;
          const opacity = absOffset >= 2 ? 0 : 1 - absOffset * 0.4;

          return (
            <div
              key={skill.id}
              onClick={() => setActiveIndex(index)}
              className="absolute w-[90%] sm:w-[450px] transition-all duration-700 ease-out cursor-pointer"
              style={{
                transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                pointerEvents: isVisible ? 'auto' : 'none',
                visibility: opacity === 0 ? 'hidden' : 'visible'
              }}
            >
              <div className="bg-[#1a1a1a] dark:bg-[#2C201A] text-white dark:text-[#F5EBE1] p-6 md:p-8 rounded-3xl border border-gray-800 dark:border-[#4F3C2E] shadow-2xl flex gap-6 items-start hover:border-gallery-gold/50 transition-colors">
                <div className="bg-[#2a2a2a] dark:bg-[#1F1612] p-4 rounded-2xl shrink-0 text-gallery-gold text-2xl w-16 h-16 flex justify-center items-center transition-colors">
                  <i className={skill.icon}></i>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2 tracking-wide">{skill.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-[#D4C9C0] leading-relaxed font-sans">{skill.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-6 mt-4">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            activeIndex === 0 
              ? 'border-gray-300 dark:border-[#4F3C2E] text-gray-300 dark:text-[#4F3C2E] cursor-not-allowed' 
              : 'border-gallery-900 dark:border-[#F5EBE1] text-gallery-900 dark:text-[#F5EBE1] hover:bg-gallery-900 hover:text-white dark:hover:bg-[#F5EBE1] dark:hover:text-[#1F1612]'
          }`}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="flex gap-2">
          {skills.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-8 bg-gallery-gold' : 'w-2 bg-gray-300 dark:bg-[#4F3C2E]'}`} />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={activeIndex === skills.length - 1}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            activeIndex === skills.length - 1 
              ? 'border-gray-300 dark:border-[#4F3C2E] text-gray-300 dark:text-[#4F3C2E] cursor-not-allowed' 
              : 'border-gallery-900 dark:border-[#F5EBE1] text-gallery-900 dark:text-[#F5EBE1] hover:bg-gallery-900 hover:text-white dark:hover:bg-[#F5EBE1] dark:hover:text-[#1F1612]'
          }`}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SkillCarousel;