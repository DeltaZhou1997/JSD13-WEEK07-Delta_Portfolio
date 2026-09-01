import { useOutletContext } from 'react-router-dom';
import storyAwardImg from '../Images/FAO.jpg';
import honoursImg from '../Images/FAO2.jpg';

const Experiences = () => {
  const { language } = useOutletContext();

  // Dictionary for English and French content
  const content = {
    EN: {
      headers: {
        bg: "Background & Roles",
        prof: "Professional Archive",
        eduSub: "Education",
        eduTitle: "Academic Background",
        capSub: "Capabilities",
        capTitle: "Core Competencies",
        accSub: "Accolades",
        accTitle: "Honors & Achievements"
      },
      jobs: [
        {
          date: "Recent Graduate",
          title: "Junior Software Developer Bootcamp",
          company: "Generation Thailand",
          desc: "Transitioned into tech through an intensive full-stack program. Built responsive web applications using HTML/CSS, JavaScript, React, Node.js, and Git."
        },
        {
          date: "2024 – 2026",
          title: "Project Assistant Exhibitions & Conferences",
          company: "DLG Markets Asia Pacific",
          desc: "Supported the Project Team for AGRITECHNICA ASIA, HortEx, and AGRIFUTURE Conference across all phases. Coordinated and executed visitor promotion campaigns, invitation management, and VIP/Hosted Buyer programs. Managed social media content and databases."
        },
        {
          date: "2023 – 2024",
          title: "Event Assistant",
          company: "Thai-Italian Chamber of Commerce",
          desc: "Produced detailed proposals for events including timelines, venues, sponsors, and staffing budgets. Created and coordinated webinars and designed visual graphics and banners."
        },
        {
          date: "Feb 2021 – May 2021",
          title: "Volunteer Thai Teacher",
          company: "AIESEC (Thailand)",
          desc: "Planned lessons and created interactive activities on an online platform to teach foreigners the Thai language and culture."
        },
        {
          date: "Nov 2020 – Dec 2020",
          title: "Part-time Docent",
          company: "Bangkok Art Biennale, Dhospaak Co., Ltd.",
          desc: "Cared for contemporary artworks by iconic artists such as Leandro Erlich, Anish Kapoor, and Marina Abramovic, and explained concepts to visitors."
        }
      ],
      education: [
        { date: "Graduating June 2025", title: "Master of Arts in French-Thai Translation", school: "Thammasat University", grade: "GPA: 3.76" },
        { date: "July 2020 – Sept 2020", title: "Summer Scholarship", school: "Glossa Polish Language School", grade: "Immersive language and cultural study program." },
        { date: "Graduated May 2020", title: "Bachelor of Arts in French (Minor in Spanish)", school: "Thammasat University", grade: "First Class Honours | GPA: 3.65" }
      ],
      skills: [
        {
          title: "Technical & Development",
          icon: "fa-solid fa-laptop-code",
          items: ["HTML / CSS", "JavaScript", "React", "Node.js", "Git / GitHub", "Database Management"]
        },
        {
          title: "Project & Operations",
          icon: "fa-solid fa-list-check",
          items: ["Event Coordination", "B2B Networking", "Stakeholder Mgt.", "Resource Planning", "Target Group ID"]
        },
        {
          title: "Tools & Mindset",
          icon: "fa-solid fa-screwdriver-wrench",
          items: ["GenAI Literacy", "Logical Thinking", "Microsoft Office", "Canva / SAI", "Basic Data Scraping"]
        },
        {
          title: "Languages",
          icon: "fa-solid fa-earth-asia",
          items: ["Thai (Native)", "English (Fluent)", "French (DELF B1)", "Spanish (Intermediate)", "Vietnamese (Beginner)"]
        }
      ],
      awards: [
        {
          date: "2017",
          title: "Honorable Mention: Storytelling in French",
          desc: "Received an honorable mention in the 'Storytelling in French' contest hosted by The Association of French Teachers in Thailand (ATPF).",
          img: storyAwardImg
        },
        {
          date: "2020",
          title: "First Class Honours",
          desc: "Graduated with First Class Honours (GPA: 3.65) for a Bachelor of Arts in French from Thammasat University.",
          img: honoursImg
        }
      ]
    },
    FR: {
      headers: {
        bg: "Parcours et Rôles",
        prof: "Archives Professionnelles",
        eduSub: "Éducation",
        eduTitle: "Parcours Académique",
        capSub: "Capacités",
        capTitle: "Compétences Clés",
        accSub: "Distinctions",
        accTitle: "Prix et Réalisations"
      },
      jobs: [
        {
          date: "Jeune Diplômée",
          title: "Bootcamp Développeuse Logiciel Junior",
          company: "Generation Thailand",
          desc: "Reconversion dans la technologie grâce à un programme full-stack intensif. Création d'applications web réactives utilisant HTML/CSS, JavaScript, React, Node.js et Git."
        },
        {
          date: "2024 – 2026",
          title: "Assistante de Projet Expositions & Conférences",
          company: "DLG Markets Asia Pacific",
          desc: "Soutien à l'équipe projet pour AGRITECHNICA ASIA, HortEx et la conférence AGRIFUTURE. Coordination de campagnes de promotion, gestion des invitations et programmes d'acheteurs VIP. Gestion des réseaux sociaux."
        },
        {
          date: "2023 – 2024",
          title: "Assistante Événementielle",
          company: "Chambre de Commerce Thaï-Italienne",
          desc: "Production de propositions détaillées pour des événements, incluant les calendriers, lieux, sponsors et budgets. Création de webinaires et conception de supports visuels."
        },
        {
          date: "Fév 2021 – Mai 2021",
          title: "Professeure de Thaï Bénévole",
          company: "AIESEC (Thaïlande)",
          desc: "Planification de cours et création d'activités interactives sur une plateforme en ligne pour enseigner la langue et la culture thaïlandaises aux étrangers."
        },
        {
          date: "Nov 2020 – Déc 2020",
          title: "Guide Conférencière à Temps Partiel",
          company: "Bangkok Art Biennale, Dhospaak Co., Ltd.",
          desc: "Médiation autour d'œuvres d'art contemporain d'artistes emblématiques tels que Leandro Erlich, Anish Kapoor et Marina Abramovic, et explication des concepts aux visiteurs."
        }
      ],
      education: [
        { date: "Diplôme prévu en Juin 2025", title: "Master en Traduction Français-Thaï", school: "Université Thammasat", grade: "GPA: 3.76" },
        { date: "Juil 2020 – Sept 2020", title: "Bourse d'été", school: "École de Langue Polonaise Glossa", grade: "Programme d'immersion linguistique et culturelle." },
        { date: "Diplômée en Mai 2020", title: "Licence en Français (Mineure en Espagnol)", school: "Université Thammasat", grade: "Mention Très Bien | GPA: 3.65" }
      ],
      skills: [
        {
          title: "Technologie & Développement",
          icon: "fa-solid fa-laptop-code",
          items: ["HTML / CSS", "JavaScript", "React", "Node.js", "Git / GitHub", "Gestion de Base de Données"]
        },
        {
          title: "Projets & Opérations",
          icon: "fa-solid fa-list-check",
          items: ["Coordination d'Événements", "Réseautage B2B", "Gestion des Parties Prenantes", "Planification des Ressources", "Identification des Cibles"]
        },
        {
          title: "Outils & Méthodologie",
          icon: "fa-solid fa-screwdriver-wrench",
          items: ["Maîtrise de l'IA Générative", "Pensée Logique", "Microsoft Office", "Canva / SAI", "Extraction de Données de Base"]
        },
        {
          title: "Langues",
          icon: "fa-solid fa-earth-asia",
          items: ["Thaï (Maternel)", "Anglais (Courant)", "Français (DELF B1)", "Espagnol (Intermédiaire)", "Vietnamien (Débutant)"]
        }
      ],
      awards: [
        {
          date: "2017",
          title: "Mention Honorable : Conte en Français",
          desc: "Obtention d'une mention honorable au concours de 'Conte en Français' organisé par l'Association Thaïlandaise des Professeurs de Français (ATPF).",
          img: storyAwardImg
        },
        {
          date: "2020",
          title: "Mention Très Bien",
          desc: "Obtention d'une Licence en Français avec Mention Très Bien (GPA: 3.65) à l'Université Thammasat.",
          img: honoursImg
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
      
      {/* SECTION 1: PROFESSIONAL ARCHIVE */}
      <section>
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold">{t.headers.bg}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-gallery-900 dark:text-[#F5EBE1] transition-colors">{t.headers.prof}</h2>
          <div className="w-12 h-0.5 bg-gallery-gold mx-auto mt-4"></div>
        </div>

        {/* Updated Borders to be visible in dark mode (#4F3C2E) */}
        <div className="relative border-l border-gray-300 dark:border-[#4F3C2E] ml-4 md:ml-32 space-y-12 transition-colors">
          
          {t.jobs.map((job, idx) => (
            <div key={idx} className="relative pl-8 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gallery-50 dark:bg-[#1F1612] border-2 border-gallery-gold rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-xs uppercase tracking-widest text-gallery-gold font-medium">{job.date}</span>
              {/* Added distinct white/cream text for dark mode */}
              <h3 className="font-serif text-xl font-bold text-gallery-900 dark:text-[#F5EBE1] mt-1 transition-colors">{job.title}</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-[#A89F95] mb-3 transition-colors">{job.company}</p>
              <p className="text-sm text-gray-600 dark:text-[#D4C9C0] leading-relaxed max-w-2xl transition-colors">
                {job.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SECTION 2: ACADEMIC BACKGROUND */}
      <section>
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold">{t.headers.eduSub}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-gallery-900 dark:text-[#F5EBE1] transition-colors">{t.headers.eduTitle}</h2>
          <div className="w-12 h-0.5 bg-gallery-gold mx-auto mt-4"></div>
        </div>

        <div className="relative border-l border-gray-300 dark:border-[#4F3C2E] ml-4 md:ml-32 space-y-12 transition-colors">
          {t.education.map((edu, idx) => (
            <div key={idx} className="relative pl-8 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gallery-50 dark:bg-[#1F1612] border-2 border-gallery-gold rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-xs uppercase tracking-widest text-gallery-gold font-medium">{edu.date}</span>
              <h3 className="font-serif text-xl font-bold text-gallery-900 dark:text-[#F5EBE1] mt-1 transition-colors">{edu.title}</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-[#A89F95] mb-3 transition-colors">{edu.school}</p>
              <p className="text-sm text-gray-600 dark:text-[#D4C9C0] font-mono transition-colors">{edu.grade}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CORE COMPETENCIES (Cards now have a distinct dark background) */}
      <section>
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold">{t.headers.capSub}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-gallery-900 dark:text-[#F5EBE1] transition-colors">{t.headers.capTitle}</h2>
          <div className="w-12 h-0.5 bg-gallery-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.skills.map((category, idx) => (
            // Replaced dark:bg-[#1F1612] with dark:bg-[#2C201A] so the cards stand out from the main background
            <div key={idx} className="bg-white dark:bg-[#2C201A] border border-gray-200 dark:border-[#4F3C2E] p-8 shadow-sm hover:shadow-md transition-all group">
              <div className="text-gallery-gold text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">
                <i className={category.icon}></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-gallery-900 dark:text-[#F5EBE1] mb-6 border-b border-gray-100 dark:border-[#4F3C2E] pb-3 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-[#D4C9C0] transition-colors">
                    <span className="text-gallery-gold w-3 text-center text-xs">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: ACHIEVEMENTS & HONORS */}
      <section>
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold">{t.headers.accSub}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-gallery-900 dark:text-[#F5EBE1] transition-colors">{t.headers.accTitle}</h2>
          <div className="w-12 h-0.5 bg-gallery-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.awards.map((award, idx) => (
            <div key={idx} className="group border border-gray-200 dark:border-[#4F3C2E] bg-white dark:bg-[#2C201A] shadow-sm hover:shadow-md transition-all">
              <div className="h-48 md:h-64 bg-gallery-200 dark:bg-[#1A120E] overflow-hidden relative">
                <img 
                  src={award.img} 
                  alt={award.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" 
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs uppercase tracking-widest text-gallery-gold font-semibold mb-2 block">{award.date}</span>
                <h3 className="font-serif text-xl font-bold text-gallery-900 dark:text-[#F5EBE1] mb-3 transition-colors">{award.title}</h3>
                <p className="text-sm text-gray-600 dark:text-[#D4C9C0] leading-relaxed transition-colors">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Experiences;