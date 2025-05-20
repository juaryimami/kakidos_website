import { useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";

export default function ServicesSection() {
  const { texts } = useContext(LanguageContext);

  const services = [
    { id: 1, titleKey: "service1", icon: "📞" }, // Maps to service1: "Anonymous Call Therapy"
    { id: 2, titleKey: "service2", icon: "📚" }, // Maps to service2: "Resource Development for Mental Health Education"
    { id: 3, titleKey: "service3", icon: "🏢" }, // Maps to service3: "Organizational Training for Employee Well-Being"
    { id: 4, titleKey: "service4", icon: "👥" }, // Maps to service4: "Training Workshops on Mental Health Awareness"
    { id: 5, titleKey: "service5", icon: "🧠" }, // Maps to service5: "Psychological and Psychiatric Consultations"
    { id: 6, titleKey: "service6", icon: "💬" }, // Maps to service6: "Tele-Counseling and Mental Health Support"
  ];

  return (
    <section className="py-16 px-4 text-center bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-2 tracking-widest">
          {texts.services.heading}
        </h2>
        <h3 className="text-4xl font-extrabold text-gray-800 mb-12">
          {texts.services.subHeading}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="inline-block bg-[#e5e7eb] text-gray-600 text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                  # {service.id}
                </span>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-4 text-gray-800">{service.icon}</div>
                <h5 className="text-lg font-semibold text-gray-800">
                  {texts.services[service.titleKey as keyof typeof texts.services]}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}