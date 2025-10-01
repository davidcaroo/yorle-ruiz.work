import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks = ({ profile, variant = 'default' }) => {
  const links = [
    { icon: Linkedin, href: profile.contact.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile.contact.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${profile.contact.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${profile.contact.phone}`, label: 'Phone' }
  ];

  const variants = {
    default: 'bg-white/10 hover:bg-white/20 text-white',
    light: 'bg-primary-100 hover:bg-primary-200 text-primary-700 dark:bg-dark-700 dark:hover:bg-dark-600 dark:text-white'
  };

  return (
    <div className="flex gap-4">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={index}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full transition-colors ${variants[variant]}`}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
