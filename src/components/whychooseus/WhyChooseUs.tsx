import Call_center_icon from '../../assets/call_center_icon.png';

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col md:flex-row justify-between  bg-white py-16 px-6 max-w-6xl mx-auto gap-8 md:gap-12">
      {/* Image Section - Adjusted for perfect alignment */}
      <div className="w-full md:w-5/12 flex justify-center">
        <img 
          src={Call_center_icon} 
          alt="Call center illustration" 
          className="w-full max-w-md h-auto object-cover" 
        />
      </div>
      
      {/* Content Section - Precise text styling */}
      <div className="w-full md:w-7/12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
          Why you choose us?
        </h2>
        
        <ul className="space-y-5">
          {[
            "Available 24/7",
            "100% Anonymous",
            "Professional Therapists",
            "Youth-Focused & Inclusive",
            "Easy Booking, Simple Access"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-6 h-6 mr-4 mt-0.5">
                <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
                  <path 
                    fill="currentColor" 
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </span>
              <span className="text-lg md:text-xl text-gray-700 font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}