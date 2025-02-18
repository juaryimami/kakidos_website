import { Link } from "react-router-dom";
import stackedlogo from "../../assets/Focus TC Logo - Stacked (No BG, Light Text) (1).png"

const CoursesPage = () => {
  return (
    <div className="lg:w-11/12 lg:mx-auto">
        <div className="max-sm:hidden absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <img src={stackedlogo} alt="Top Image" className="w-36 h-36 object-cover" />
      </div>
        <div className="max-sm:hidden flex justify-center items-center h-16">
        <div className="bg-white w-5/12 h-full"></div>
        <div className="bg-[#182F49] w-2/12 h-full"></div>
        <div className="bg-white w-5/12 h-full"></div>
      </div>
      {/* navbars */}
      <div className="polygonal max-sm:hidden flex justify-center items-center h-16">
        <div className="bg-[#182F49] montserrat text-white w-5/12 h-full flex items-center justify-evenly ">
          <Link to="/">Home</Link>
          <Link to="#about">About Us</Link>
          <Link to="/courses">Courses</Link>
        </div>
        <div className="bg-[#182F49] w-2/12 h-full flex  items-center">
            {/* <img src={Logo} alt="SVG Image" className="w-full h-full object-contain" /> */}
         </div>
        <div className="bg-[#182F49] montserrat text-white w-5/12 h-full flex items-center justify-evenly ">
          <Link to="#register">Register</Link>
          <Link to="#contact">Contact Us</Link>
          <Link to="#learn-more">Learn More</Link>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="max-sm:hidden w-5/12 sm:h-16"></div>
        <div className="max-sm:hidden bg-[#182F49] w-2/12 h-16"></div>
      </div>
      <div className="flex flex-row">
        <div className="max-sm:hidden w-5/12 sm:h-16"></div>
        <div className="max-sm:hidden bg-[#182F49] w-2/12 h-16"></div>
      </div>
      
        <div className="lg:w-11/12 lg:mx-auto p-6">

        
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#182F49]">Unlock Your Path to Success</h1>
        <p className="text-lg text-gray-700 mt-3 max-w-3xl mx-auto">
          Are you ready to transform your life and achieve financial freedom? Focus Training Center equips young, ambitious individuals with the tools to become successful real estate agents and business owners.
        </p>
      </div>
      
      {/* Why Choose Us */}
      <div className="bg-[#182F49] text-white p-8 rounded-xl text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Focus Training Center?</h2>
        <p className="mt-4 text-lg">We offer two high-demand training packages with 100% job opportunities and a chance to win a 200,000 Birr reward to fund your entrepreneurial dreams.</p>
      </div>
      
      {/* Course Sections */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Real Estate Sales Package */}
        <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-[#E2426C]">Real Estate Sales Package</h3>
          <ul className="mt-4 text-gray-700 space-y-3">
            <li>✅ Comprehensive real estate sales training.</li>
            <li>✅ Bonus: Basic sales & content marketing skills.</li>
            <li>✅ 100% Job Opportunity with partner real estate firms.</li>
          </ul>
        </div>
        
        {/* Business Startup Package */}
        <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-[#E2426C]">Business Startup Package</h3>
          <ul className="mt-4 text-gray-700 space-y-3">
            <li>✅ Expert business startup training.</li>
            <li>✅ Bonus: Content marketing & leadership training.</li>
            <li>✅ 200,000 Birr Reward for the best business model idea.</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-[#182F49]">Don't Miss Out – Take Action Now!</h3>
        <p className="mt-3 text-lg text-gray-700">Join Focus Training Center and gain access to life-changing opportunities.</p>
        <Link to="/register">
          <button className="mt-6 bg-[#E2426C] btn text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 text-lg">
            Register Now
          </button>
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default CoursesPage;