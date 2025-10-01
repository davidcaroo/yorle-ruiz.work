import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, href, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2';

  const variants = {
    primary: 'bg-white text-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-primary-700',
    outline: 'border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900',
    solid: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
  };

  const Component = href ? 'a' : motion.button;
  const extraProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};

  return (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...extraProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
