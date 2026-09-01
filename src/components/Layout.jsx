import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('EN'); // Changed to English (EN) by default

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLanguage(language === 'EN' ? 'FR' : 'EN'); // Toggle EN / FR

  return (
    // Applied Dark Brown Background: #1F1612
    <div className="flex flex-col min-h-screen bg-gallery-50 dark:bg-[#1F1612] transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
      <main className="grow pt-20 text-gallery-900 dark:text-gray-100 transition-colors duration-500">
        <Outlet context={{ language }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;