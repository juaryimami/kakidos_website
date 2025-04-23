import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";
import { useState } from "react";
import stackedlogo from "../../assets/Focus TC Logo - Stacked (No BG, Light Text) (1).png"

const CoursesPage = () => {
  const { texts } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();
  

  const goToMainPage = () => {
    navigate("/"); // Navigate to the root route ("/")
  };
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu open/close state
  };

  return (
    <div className="lg:w-11/12 lg:mx-auto">
        <nav className="p-1 bg-[#182F49] sm:hidden flex justify-between items-center">
        <div onClick={goToMainPage} className="text-xl font-bold">
          <img onClick={goToMainPage} src={stackedlogo} alt="Top Image" className="w-16 h-16 object-cover" />
        </div>
        <button onClick={toggleMenu} className="md:hidden w-16 h-16 text-white object-cover text-2xl">
        ☰
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#182F49] z-10">
          <div className="flex flex-col items-center">
            <Link to="/" className="p-2 text-white">{texts.navbar.home}</Link>
            <Link to="/" className="p-2 text-white">{texts.navbar.about}</Link>
            <Link to="/courses" className="p-2 text-white">{texts.navbar.courses}</Link>
            <Link to="https://t.me/Focussupport1" className="p-2 text-white">{texts.navbar.register}</Link>
            <Link to="/" className="p-2 text-white">{texts.navbar.contact}</Link>
            <Link to="/" className="p-2 text-white">{texts.navbar.learnMore}</Link>
          </div>
        </div>
      )}
      </nav>
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
          <Link to="/">{texts.navbar.home}</Link>
          <Link to="/">{texts.navbar.about}</Link>
          <Link to="/courses">{texts.navbar.courses}</Link>
        </div>
        <div className="bg-[#182F49] w-2/12 h-full flex  items-center">
            {/* <img src={Logo} alt="SVG Image" className="w-full h-full object-contain" /> */}
         </div>
        <div className="bg-[#182F49] montserrat text-white w-5/12 h-full flex items-center justify-evenly ">
          <Link to="https://t.me/Focussupport1">{texts.navbar.register}</Link>
          <Link to="/">{texts.navbar.contact}</Link>
          <Link to="/courses">{texts.navbar.learnMore}</Link>
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
        <h1 className="text-4xl font-extrabold text-[#182F49]">{texts.trainings.text1}</h1>
        <p className="text-lg text-gray-700 mt-3 max-w-3xl mx-auto">{texts.trainings.text2}
        </p>
      </div>
      
      {/* Why Choose Us */}
      <div className="bg-[#182F49] text-white p-8 rounded-xl text-center mb-12">
        <h2 className="text-3xl font-bold">{texts.trainings.why.h1}</h2>
        <p className="mt-4 text-lg">{texts.trainings.why.p1}</p>
      </div>
      
      {/* Course Sections */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Real Estate Sales Package */}
        <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-[#E2426C]">{texts.trainings.realstate.h1}</h3>
          <ul className="mt-4 text-gray-700 space-y-3">
            <li>✅ {texts.trainings.realstate.p1}</li>
            <li>✅ {texts.trainings.realstate.p2}</li>
            <li>✅ {texts.trainings.realstate.p3}</li>
          </ul>
        </div>
        
        {/* Business Startup Package */}
        <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-[#E2426C]">{texts.trainings.marketing.h1}</h3>
          <ul className="mt-4 text-gray-700 space-y-3">
            <li>✅ <span className="filter blur-sm">{texts.trainings.marketing.p1}</span></li>
            <li>✅ <span className="filter blur-sm">{texts.trainings.marketing.p2}</span></li>
            <li>✅ <span className="filter blur-sm">{texts.trainings.marketing.p3}</span></li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-[#182F49]">{texts.trainings.call_toaction.h3}</h3>
        <p className="mt-3 text-lg text-gray-700">{texts.trainings.call_toaction.p}</p>
        <Link to="https://t.me/Focussupport1">
          <button className="mt-6 bg-[#E2426C] btn text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 text-lg">
            {texts.trainings.call_toaction.btn}
          </button>
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default CoursesPage;