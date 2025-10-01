import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import servicesData from '../../data/services.json';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Servicios"
          subtitle="Soluciones profesionales adaptadas a tus necesidades"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
