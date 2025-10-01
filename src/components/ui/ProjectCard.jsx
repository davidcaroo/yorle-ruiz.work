import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project, onViewDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden group">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-dark-700 animate-pulse" />
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 gap-4">
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-700 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary-50 transition-colors"
            >
              <ExternalLink size={16} />
              Ver Proyecto
            </a>
          )}
          <button
            onClick={() => onViewDetails(project)}
            className="bg-primary-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary-700 transition-colors"
          >
            <Eye size={16} />
            Detalles
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
            {project.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
