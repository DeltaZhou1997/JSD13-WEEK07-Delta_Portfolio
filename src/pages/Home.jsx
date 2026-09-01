import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import SkillCarousel from '../components/SkillCarousel';

import faoImg from '../Images/FAO.jpg';
import fao2Img from '../Images/FAO2.jpg';
import galaImg from '../Images/Gala-Dinner.JPG';
import montienImg from '../Images/Montien.jpg';
import profile2Img from '../Images/Profile_Delta2.JPG';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { language } = useOutletContext();

  const text = {
    EN: {
      explore: "Explore Projects",
      contact: "Get In Touch",
      fig: "Fig.",
      aboutSub: "The Curator",
      aboutTitle: "Pajchima Chaichanadara",
      aboutBio1: "I am a multilingual Software Developer and Project Specialist based in Thailand. Currently completing my Master's in French-Thai Translation at Thammasat University, I bring a unique blend of linguistic precision and technical logic to web development.",
      aboutBio2: "My background in managing complex logistics and VIP programs at DLG Markets Asia Pacific has honed my ability to deeply understand end-user needs. I am passionate about bridging the gap between front-line operations and backend code to build elegant, scalable digital experiences.",
      location: "Location",
      locationVal: "Nakhon Pathom, Thailand",
      education: "Education",
      educationVal: "Thammasat University",
      focus: "Current Focus",
      focusVal: "Full-Stack Web Development"
    },
    FR: {
      explore: "Explorer les projets",
      contact: "Contactez-moi",
      fig: "Fig.",
      aboutSub: "La Créatrice",
      aboutTitle: "Pajchima Chaichanadara",
      aboutBio1: "Je suis une développeuse de logiciels et spécialiste de projets multilingue basée en Thaïlande. Actuellement en master de traduction français-thaï à l'Université Thammasat, j'apporte un mélange unique de précision linguistique et de logique technique au développement web.",
      aboutBio2: "Mon expérience dans la gestion logistique complexe et les programmes VIP chez DLG Markets Asia Pacific a affiné ma capacité à comprendre les besoins des utilisateurs. Je suis passionnée par la création d'expériences numériques élégantes et évolutives qui relient les opérations au code.",
      location: "Localisation",
      locationVal: "Nakhon Pathom, Thaïlande",
      education: "Éducation",
      educationVal: "Université Thammasat",
      focus: "Spécialité Actuelle",
      focusVal: "Développement Web Full-Stack"
    }
  };

  const heroContent = {
    EN: [
      { title: "Bridging Operations With Code.", subtitle: "Software Developer & Project Specialist", desc: "Master's graduate equipped with full-stack capabilities from Generation Thailand, bridging technical web applications with business coordination.", image: faoImg },
      { title: "Curated Systems, Elegant Design.", subtitle: "Art, Museum & Modern Web", desc: "Applying structured logical problem-solving to React, Node.js, and database workflows, influenced by international arts management and project logistics.", image: montienImg },
      { title: "Global Stakeholder Management.", subtitle: "B2B Networking & Event Operations", desc: "Extensive background in executing VIP buyer programs, promotional campaigns, and end-to-end logistics for flagship international exhibitions.", image: galaImg },
      { title: "Multilingual Tech Communicator.", subtitle: "Native Thai • Fluent English • French B1", desc: "Leveraging cross-cultural communication to translate complex client requirements into scalable, precise digital solutions.", image: fao2Img }
    ],
    FR: [
      { title: "Associer les opérations au code.", subtitle: "Développeuse de logiciels et spécialiste de projets", desc: "Diplômée d'un master et dotée de compétences full-stack de Generation Thailand, associant les applications web techniques à la coordination commerciale.", image: faoImg },
      { title: "Systèmes organisés, design élégant.", subtitle: "Art, musée et web moderne", desc: "Application de la résolution de problèmes logiques structurés à React, Node.js et aux flux de travail de bases de données, influencée par la gestion internationale des arts et la logistique de projets.", image: montienImg },
      { title: "Gestion globale des parties prenantes.", subtitle: "Réseautage B2B et opérations événementielles", desc: "Vaste expérience dans l'exécution de programmes d'acheteurs VIP, de campagnes promotionnelles et de logistique de bout en bout pour des expositions internationales phares.", image: galaImg },
      { title: "Communicatrice technologique multilingue.", subtitle: "Thaï maternel • Anglais courant • Français B1", desc: "Tirer parti de la communication interculturelle pour traduire les exigences complexes des clients en solutions numériques évolutives et précises.", image: fao2Img }
    ]
  };

  const currentStatements = heroContent[language];
  const t = text[language];

  useEffect(() => {
    const timer = setInterval(() => { 
      setActiveSlide((prev) => (prev + 1) % currentStatements.length); 
    }, 5000);
    return () => clearInterval(timer);
  }, [currentStatements.length]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-12 relative overflow-hidden bg-gallery-50 dark:bg-[#1F1612] transition-colors duration-500">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gray-200 dark:bg-[#3E2E26] hidden lg:block transition-colors"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gray-200 dark:bg-[#3E2E26] hidden lg:block transition-colors"></div>

        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 z-10">
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
            <div className="min-h-[220px] md:min-h-[200px] flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gallery-gold font-semibold block mb-4">
                {currentStatements[activeSlide].subtitle}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gallery-900 dark:text-[#F5EBE1] leading-[1.15] mb-6 transition-colors">
                {currentStatements[activeSlide].title}
              </h1>
              <p className="text-gray-600 dark:text-[#D4C9C0] text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 transition-colors">
                {currentStatements[activeSlide].desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <Link to="/projects" className="w-full sm:w-auto px-8 py-4 border border-gallery-900 dark:border-[#5C4535] text-gallery-900 dark:text-[#F5EBE1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-gallery-900 hover:text-white dark:hover:bg-[#5C4535] dark:hover:text-[#F5EBE1] transition-all duration-300 text-center">
                {t.explore}
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 border border-transparent text-gallery-gold text-xs uppercase tracking-[0.2em] font-medium hover:underline transition-all duration-300 text-center">
                {t.contact}
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-3 mt-12">
              {currentStatements.map((_, idx) => (
                <button key={idx} onClick={() => setActiveSlide(idx)} className={`h-1 transition-all duration-500 ${activeSlide === idx ? 'w-8 bg-gallery-gold' : 'w-2 bg-gray-300 dark:bg-[#4F3C2E] hover:bg-gray-400'}`} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-4/5 bg-gallery-200 dark:bg-[#1A120E] p-4 border border-gray-200 dark:border-[#4F3C2E] shadow-sm transition-colors duration-500">
              {currentStatements.map((slide, idx) => (
                <img key={idx} src={slide.image} alt={slide.title} className={`absolute inset-0 w-full h-full object-cover p-4 transition-opacity duration-1000 ease-in-out filter grayscale hover:grayscale-0 ${activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
              ))}
              <div className="absolute inset-0 border border-gallery-gold/20 m-6 z-20 pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#2C201A] px-3 py-1 border border-gray-200 dark:border-[#4F3C2E] text-[10px] tracking-widest text-gray-500 dark:text-[#A89F95] font-mono z-30 uppercase hidden sm:block transition-colors">
                {t.fig} {activeSlide + 1}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section className="py-24 px-6 bg-white dark:bg-[#2C201A] border-y border-gray-200 dark:border-[#3E2E26] transition-colors duration-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* Framed Profile Image */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[350px] aspect-3/4 bg-gallery-200 dark:bg-[#1A120E] p-3 border border-gray-200 dark:border-[#4F3C2E] transition-colors">
              <img 
                src={profile2Img} 
                alt="Pajchima Chaichanadara" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 border border-gallery-gold/30 m-4 z-20 pointer-events-none"></div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="w-full md:w-7/12 flex flex-col text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold block mb-3">
              {t.aboutSub}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gallery-900 dark:text-[#F5EBE1] mb-6 transition-colors">
              {t.aboutTitle}
            </h2>
            <div className="w-12 h-0.5 bg-gallery-gold mx-auto md:mx-0 mb-8"></div>
            
            <p className="text-sm md:text-base text-gray-600 dark:text-[#D4C9C0] leading-relaxed mb-6 transition-colors">
              {t.aboutBio1}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-[#D4C9C0] leading-relaxed mb-10 transition-colors">
              {t.aboutBio2}
            </p>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 border-t border-gray-200 dark:border-[#4F3C2E] pt-8 transition-colors">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-gallery-gold mb-1">{t.location}</span>
                <span className="text-sm font-medium text-gallery-900 dark:text-[#F5EBE1]">{t.locationVal}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-gallery-gold mb-1">{t.education}</span>
                <span className="text-sm font-medium text-gallery-900 dark:text-[#F5EBE1]">{t.educationVal}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-[10px] uppercase tracking-widest text-gallery-gold mb-1">{t.focus}</span>
                <span className="text-sm font-medium text-gallery-900 dark:text-[#F5EBE1]">{t.focusVal}</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. SKILL CAROUSEL SECTION */}
      <SkillCarousel />
    </>
  );
};

export default Home;