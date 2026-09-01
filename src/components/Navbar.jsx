import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import myLogo from '../Images/Delta_Center_Logo-rmbg.png';

const Navbar = ({ theme, toggleTheme, language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); 

  const linkClass = ({ isActive }) =>
    `text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-1 border-b-2 ${
      isActive
        ? 'text-gallery-gold border-gallery-gold'
        : 'text-gallery-900 dark:text-[#f4ece4] border-transparent hover:text-gallery-gold dark:hover:text-gallery-gold'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block text-sm uppercase tracking-[0.2em] py-4 transition-all duration-300 ${
      isActive ? 'text-gallery-gold font-bold' : 'text-gallery-900 dark:text-[#f4ece4] hover:text-gallery-gold'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gallery-50/95 dark:bg-[#120C09]/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-[#3E2E26] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <img src={myLogo} alt="Pajchima Chaichanadara Logo" className="h-40 w-auto" />
          <span className="font-serif text-lg sm:text-xl tracking-[0.25em] uppercase font-bold text-gallery-900 dark:text-[#f4ece4] hidden sm:block">
            | Pajchima C.
          </span>
        </NavLink>

        <ul className="hidden md:flex items-center space-x-8">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/experiences" className={linkClass}>Experiences</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Gallery</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>

        <div className="flex items-center gap-5 sm:gap-6">
          <button 
            onClick={toggleLanguage}
            className="text-[11px] font-bold uppercase tracking-widest text-gallery-900 dark:text-[#f4ece4] hover:text-gallery-gold transition-colors"
          >
            {language === 'EN' ? 'FR' : 'EN'}
          </button>

          <button 
            onClick={toggleTheme}
            className="text-lg text-gallery-900 dark:text-[#f4ece4] hover:text-gallery-gold transition-colors"
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <button className="md:hidden text-gallery-900 dark:text-[#f4ece4] text-2xl focus:outline-none" onClick={toggleMenu}>
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-gallery-50 dark:bg-[#120C09] border-b border-gray-200 dark:border-[#3E2E26] transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${isOpen ? 'max-h-96 border-b' : 'max-h-0 border-transparent'}`}>
        <ul className="flex flex-col text-center divide-y divide-gray-100 dark:divide-[#3E2E26] px-6">
          <li><NavLink to="/" onClick={closeMenu} className={mobileLinkClass}>Home</NavLink></li>
          <li><NavLink to="/experiences" onClick={closeMenu} className={mobileLinkClass}>Experiences</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu} className={mobileLinkClass}>Gallery</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu} className={mobileLinkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;