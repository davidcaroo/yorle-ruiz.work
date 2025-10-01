import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import skillsData from '../../data/skills.json';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Habilidades"
          subtitle="Tecnologías y competencias que domino para crear soluciones efectivas"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {skillsData.technical.title}
              </h3>
              <div className="space-y-6">
                {skillsData.technical.categories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h4 className="font-semibold text-lg text-primary-600 dark:text-primary-400 mb-3">
                      {category.name}
                    </h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className="bg-gradient-to-r from-primary-600 to-accent-500 h-full rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {skillsData.soft.title}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {skillsData.soft.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-700 rounded-lg"
                  >
                    <CheckCircle size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Siempre Aprendiendo
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Me mantengo actualizada con las últimas tendencias y tecnologías del
                  desarrollo web. Participo activamente en comunidades de desarrolladores
                  y busco constantemente oportunidades para expandir mis conocimientos.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
