import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import projectsData from '../../data/projects.json';
import { PROJECT_CATEGORIES } from '../../utils/constants';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'Todos'
    ? projectsData.projects
    : projectsData.projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Proyectos"
          subtitle="Explora algunos de los proyectos en los que he trabajado"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PROJECT_CATEGORIES.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-dark-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white dark:bg-dark-900 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <X size={24} className="text-gray-900 dark:text-white" />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 px-4 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {selectedProject.year}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Visitar Proyecto
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
