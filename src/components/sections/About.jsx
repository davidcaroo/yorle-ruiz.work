import { motion } from 'framer-motion';
import { Code, Briefcase, Users, Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import profileData from '../../data/profile.json';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Años de Experiencia', value: '1+' },
    { icon: Code, label: 'Proyectos Completados', value: '15+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '10+' },
    { icon: Award, label: 'Tecnologías Dominadas', value: '12+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Sobre mí"
          subtitle="Conoce más sobre mi trayectoria y pasión por el desarrollo web"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={profileData.image}
                alt={profileData.name}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {profileData.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {profileData.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Me especializo en crear experiencias web modernas, funcionales y visualmente
              atractivas. Mi enfoque combina un sólido conocimiento técnico con una pasión
              por el diseño centrado en el usuario.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Constantemente busco aprender nuevas tecnologías y mejores prácticas para
              ofrecer soluciones de alta calidad que superen las expectativas de mis clientes.
            </p>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 pt-4">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{profileData.location}</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
