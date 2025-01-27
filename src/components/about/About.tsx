const About = () => {
  return (
    <section className="bg-[#0F172A] text-white  py-16 px-8 w-11/12 mx-auto">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 p-9">
          <h3 className="text-lg font-light text-gray-300 mb-2">About Us</h3>
          <h2 className="text-4xl font-bold text-white mb-4 flex flex-col">
            Know more
            <span className="text-[#F43F5E]">about Focus </span>
            <span className="text-[#F43F5E]">Training Center </span>
          </h2>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:pl-12">
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-400">
            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
