import { Heart } from 'lucide-react';
import SocialLinks from '../common/SocialLinks';
import profileData from '../../data/profile.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Yorleidys Ruiz</h3>
            <p className="text-gray-400 mb-4">
              Ingeniera Informática especializada en desarrollo web full-stack.
              Transformando ideas en soluciones digitales.
            </p>
            <SocialLinks profile={profileData} variant="default" />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${profileData.contact.email}`} className="hover:text-primary-400 transition-colors">
                  {profileData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profileData.contact.phone}`} className="hover:text-primary-400 transition-colors">
                  {profileData.contact.phone}
                </a>
              </li>
              <li>{profileData.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart size={16} className="text-red-500 fill-current" /> por Yorleidys Ruiz © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
