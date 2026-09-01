import { useOutletContext } from 'react-router-dom';
import profileImg from '../Images/Profile_Delta.png';

const Contact = () => {
  const { language } = useOutletContext();

  const text = {
    EN: {
      sub: "Connections",
      title: "Inquiries & Dialogue",
      desc: "Currently open to full-time Software Developer opportunities. Please feel free to reach out directly through any of the channels below.",
      vcardNote: "A multilingual full-stack developer bridging technical web applications with international business coordination and operations logic.",
      download: "Download Business Card"
    },
    FR: {
      sub: "Connexions",
      title: "Demandes & Dialogue",
      desc: "Actuellement ouverte aux opportunités de développement de logiciels à temps plein. N'hésitez pas à me contacter directement via l'un des canaux ci-dessous.",
      vcardNote: "Développeuse full-stack multilingue associant les applications web techniques à la coordination commerciale internationale.",
      download: "Télécharger la Carte de Visite"
    }
  };

  const t = text[language];

  const handleDownloadVcard = (e) => {
    e.preventDefault();
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Chaichanadara;Pajchima;;;
FN:Pajchima Chaichanadara
NICKNAME:Delta
TITLE:Software Developer & Project Specialist
EMAIL;type=INTERNET;type=WORK;type=pref:pajchima.ch@gmail.com
TEL;type=CELL;type=VOICE;type=pref:+66850602540
ADR;type=HOME:;;47/1125 Moo 5 Sahaporn 11, Salaya, Putthamonthon;Nakhon Pathom;;73170;Thailand
URL:https://www.linkedin.com/in/pajchima-chaichanadara-97a3451ab
URL:https://github.com/DeltaZhou1997
NOTE:${t.vcardNote}
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Pajchima_Business_Card.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-gallery-gold font-semibold">{t.sub}</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-gallery-900 dark:text-[#F5EBE1] transition-colors">{t.title}</h2>
        <div className="w-12 h-0.5 bg-gallery-gold mx-auto mt-4"></div>
      </div>

      <div className="border border-gray-200 dark:border-[#4F3C2E] bg-white dark:bg-[#2C201A] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm transition-colors duration-500">
        
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gallery-gold/30 p-1 hover:border-gallery-gold transition-colors duration-500">
            <img src={profileImg} alt="Pajchima Chaichanadara" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-[#D4C9C0] leading-relaxed mb-8 transition-colors">
          {t.desc}
        </p>

        <div className="space-y-4 text-sm font-medium">
          <div>
            <a href="mailto:pajchima.ch@gmail.com" className="text-gallery-900 dark:text-[#F5EBE1] hover:text-gallery-gold dark:hover:text-gallery-gold transition-colors flex items-center justify-center gap-3">
              <i className="fa-regular fa-envelope text-gallery-gold"></i>
              pajchima.ch@gmail.com
            </a>
          </div>
          <div>
            <a href="tel:+66850602540" className="text-gallery-900 dark:text-[#F5EBE1] hover:text-gallery-gold dark:hover:text-gallery-gold transition-colors flex items-center justify-center gap-3">
              <i className="fa-solid fa-phone text-gallery-gold"></i>
              (+66) 850 602 540
            </a>
          </div>
          <div className="text-gray-500 dark:text-[#A89F95] flex items-center justify-center gap-3 transition-colors">
            <i className="fa-solid fa-location-dot text-gallery-gold"></i>
            Nakhon Pathom, Thailand
          </div>
        </div>

        <div className="mt-12 mb-10">
          <a href="#" onClick={handleDownloadVcard} className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-gallery-900 dark:bg-[#F5EBE1] text-white dark:text-[#1F1612] text-xs uppercase tracking-[0.2em] font-medium hover:bg-gallery-gold dark:hover:bg-gallery-gold transition-colors shadow-md hover:shadow-lg">
            <i className="fa-solid fa-download"></i>
            {t.download}
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-8 border-t border-gray-100 dark:border-[#4F3C2E] text-lg transition-colors">
          <a href="https://www.linkedin.com/in/pajchima-chaichanadara-97a3451ab" target="_blank" rel="noreferrer" className="text-gallery-900 dark:text-[#F5EBE1] hover:text-gallery-gold dark:hover:text-gallery-gold transition-colors"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/DeltaZhou1997" target="_blank" rel="noreferrer" className="text-gallery-900 dark:text-[#F5EBE1] hover:text-gallery-gold dark:hover:text-gallery-gold transition-colors"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;