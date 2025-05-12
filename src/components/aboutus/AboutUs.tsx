import FamilyImage from '../../assets/family_image.png';

export default function AboutUs() {
  return (
    <section id='about-us' className="bg-white">
      {/* Content Section - Centered Container */}
      <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto">
          {/* About Us Section - Centered Content */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wider mb-6 md:mb-8">
              ABOUT US
            </h2>
            
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 mx-auto max-w-3xl">
              <p className="text-left">
                Hashim consultancy provides psychological and social support, focusing on trauma recovery, depression, abuse, and other mental health concerns. Our call center serves as a lifeline for those in need, offering professional guidance and a compassionate ear.
              </p>
            </div>
          </div>

          {/* Mission Section - Centered Content */}
          <div className="my-8 md:my-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-center">
              {/* Image Section - Left */}
              <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img 
                  src={FamilyImage} 
                  alt="Hashim Consultancy Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Mission Section - Right */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-left relative">
                
                
                {/* Mission Heading with Lines */}
                <div className="flex items-center mb-4 md:mb-6 w-full">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 uppercase px-3 sm:px-4">MISSION</h3>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Our mission is to provide accessible, compassionate, and confidential mental health support through our dedicated call center services. We aim to empower individuals by offering immediate guidance, emotional support, and professional consultation—anytime, anywhere. Through compassionate care, we strive to promote mental well-being and prioritize help as it is within reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}