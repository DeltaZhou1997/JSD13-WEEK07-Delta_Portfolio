import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gallery-50 dark:bg-[#120C09] mt-16 pt-16 pb-8 border-t border-gray-200 dark:border-[#3E2E26] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-10 max-w-xl">
          <h3 className="font-serif text-2xl font-bold text-gallery-900 dark:text-[#f4ece4] mb-3">
            Pajchima Chaichanadara (Delta)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            A multilingual full-stack developer bridging technical web applications with international business coordination and operations logic.
          </p>
          <div className="flex justify-center gap-6 text-xl">
            <a href="mailto:pajchima.ch@gmail.com" className="text-gallery-900 dark:text-[#f4ece4] hover:text-gallery-gold transition-colors"><i className="fa-regular fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/pajchima-chaichanadara-97a3451ab" target="_blank" rel="noreferrer" className="text-gallery-900 dark:text-[#f4ece4] hover:text-gallery-gold transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/DeltaZhou1997" target="_blank" rel="noreferrer" className="text-gallery-900 dark:text-[#f4ece4] hover:text-gallery-gold transition-colors"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-gallery-900 dark:text-[#f4ece4]">
          <Link to="/" className="hover:text-gallery-gold transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-gallery-gold transition-colors">Projects</Link>
          <Link to="/experiences" className="hover:text-gallery-gold transition-colors">Experiences</Link>
          <Link to="/contact" className="hover:text-gallery-gold transition-colors">Contact</Link>
        </div>
        <div className="w-full border-t border-gray-200 dark:border-[#3E2E26] pt-8">
          <p className="text-[10px] tracking-widest uppercase text-gray-400 font-mono">
            &copy; {currentYear} Pajchima Chaichanadara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;