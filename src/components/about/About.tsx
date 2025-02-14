const About = () => {
  return (
    <section className="bg-[#182F49] text-white  py-16 px-8 w-12/12 mx-auto">
      <div className="container mx-auto flex flex-col  md:flex-col md:items-start lg:flex-row items-start lg:items-start">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:p-9">
          <h3 className="text-lg font-light chyta-font text-gray-300 mb-2">About Us</h3>
          <h2 className="lg:text-4xl md:text-4xl text-2xl  font-bold text-white mb-4 flex flex-col">
            Know more 
            <span className=" text-white  font-bold ">about <span className="text-[#F43F5E] montserrat"> Focus </span></span>
            
            <span className="text-[#F43F5E] montserrat">Training Center </span>
          </h2>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:pl-12">
          <p className="text-gray-400 montserrat mb-4">
            At Focus Training Center, we are committed to shaping high-performing, ethical sales professionals who drive business success. Sales are the backbone of any industry, and having the right skills and mindset is crucial for growth.
          </p>
          <p className="text-gray-400 montserrat">
            Our primary focus is real estate sales training, a field with high demand for skilled professionals both locally and globally. We bridge the gap by providing top-tier training, hands-on expertise, and career opportunities to help individuals excel in this competitive industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
