import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      className={`bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
