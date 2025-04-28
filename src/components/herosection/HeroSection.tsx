import HeroImage from '../../assets/hero_section_image.png';

export default function Hero() {
  return (
    <section
      className="relative w-full h-[400px] flex items-center px-8 md:px-16"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay with minimized transparency length */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8ac4dd] via-[#8ac4dd]/70 to-transparent [background-image:linear-gradient(to_right,#8ac4dd_0%,#8ac4dd66_40%,transparent_60%)]"></div>

      {/* Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.2] text-[#2D2D2D]">
          Your voice matters.<br />
          <span className="text-white">We’re here</span><br />
          <span className="text-[#2D2D2D]">to listen.</span>
        </h1>

        <p className="text-white text-sm md:text-base max-w-lg">
          Hashim Consultancy and Training offers 24/7 mental health support through anonymous calls and professional
          one-on-one therapy. Whether you’re in crisis or just need someone to talk to — we’re here for you, always.
        </p>
      </div>
    </section>
  );
}