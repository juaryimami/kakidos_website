const services = [
  {
    id: 1,
    title: "Anonymous Call Therapy",
    icon: "📞" // Placeholder, replace with actual icon component if needed
  },
  {
    id: 2,
    title: "Resource Development for Mental Health Education",
    icon: "📚" // Placeholder, replace with actual icon component if needed
  },
  {
    id: 3,
    title: "Organizational Training for Employee Well-Being",
    icon: "🏢" // Placeholder, replace with actual icon component if needed
  },
  {
    id: 4,
    title: "Training Workshops on Mental Health Awareness",
    icon: "👥" // Placeholder, replace with actual icon component if needed
  },
  {
    id: 5,
    title: "Psychological and Psychiatric Consultations",
    icon: "🧠" // Placeholder, replace with actual icon component if needed
  },
  {
    id: 6,
    title: "Tele-Counseling and Mental Health Support",
    icon: "💬" // Placeholder, replace with actual icon component if needed
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 text-center bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-2 tracking-widest">OUR SERVICES</h2>
        <h3 className="text-4xl font-extrabold text-gray-800 mb-12">WHAT WE OFFER</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="inline-block bg-[#e5e7eb] text-gray-600 text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                  SERVICE {service.id}
                </span>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-4 text-gray-800">{service.icon}</div>
                <h5 className="text-lg font-semibold text-gray-800">{service.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}