import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const Icon = Icons[service.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)' }}
      className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <Icon size={32} className="text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {service.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Características:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
              <Check size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-dark-700">
        {service.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
