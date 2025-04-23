import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import cental from "../../assets/Focus TC - Imagery (Low-Res).png";
import stackedlogo from "../../assets/Focus TC Logo - Stacked (No BG, Light Text) (1).png";
import { LanguageContext } from "../../locales/LanguageContext";

const Header: React.FC = () => {
  const { texts, switchLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [language, setLanguage] = useState<"en" | "am">("en");
  const courses_am = [
    "ሪልስቴት ሽያጭ <br/> ስልጠና",
    "የአመራር ስልጠና",
    "የአመራር ስልጠና",
    "ሽያጭ ስልጠና",
    "ኮንተንት ማርኬቲግ"
  ];

  const courses = [
    "Realstate <br/>Sales",
    "Business <br/>Startup",
    "Leadership",
    "Sales",
    "Content <br/>Marketing"
  ];

  const [index, setIndex] = useState(0);
  const currentCourses = language === "am" ? courses_am : courses;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToMainPage = () => {
    navigate("/"); // Navigate to the root route ("/")
  };
  
  const handleLearnMoreClick = () => {
    navigate("/courses"); // Navigate to the courses page
  };
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % currentCourses.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + currentCourses.length) % currentCourses.length);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  // contact-us
   const handleNavigationContactus = () => {
    const aboutSection = document.getElementById('contact-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = () => {
    const aboutSection = document.getElementById('aboutus-lg');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:w-11/12 lg:mx-auto">
      {/* above blue rectangle */}
      <nav className="p-1 bg-[#182F49] sm:hidden flex justify-between items-center">
        <div onClick={goToMainPage} className="text-xl font-bold">
          <img onClick={goToMainPage} src={stackedlogo} alt="Top Image" className="w-16 h-16 object-cover" />
        </div>
        <div className="">
          <button onClick={toggleMenu} className="md:hidden w-16 h-16 text-white object-cover text-2xl">
            ☰
          </button>
          {language == "en" ? (
            <button
              onClick={() => {
                setLanguage("am");
                switchLanguage("am");
              }}
              className={`px-2 py-1 text-[8px] mx-1 rounded ${
                "bg-blue-600 text-white" 
              }`}
            >
              አማ
            </button>
          ) : (
            <button
              onClick={() => {
                setLanguage("en");
                switchLanguage("en");
              }}
              className={`px-2 py-1 text-[8px] mx-1 rounded ${
                "bg-blue-600 text-white" 
              }`}
            >
              Eng
            </button>
          )}
        </div>
        
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#182F49] z-10">
            <div className="flex flex-col items-center">
              <Link to="/" className="p-2 text-white">{texts.navbar.home}</Link>
              <Link to="#aboutus-lg" onClick={handleNavigation} className="p-2 text-white">{texts.navbar.about}</Link>
              <Link to="/courses" className="p-2 text-white">{texts.navbar.courses}</Link>
              <Link to="https://t.me/Focussupport1" className="p-2 text-white">{texts.navbar.register}</Link>
              <Link to="" onClick={handleNavigationContactus} className="p-2 text-white">{texts.navbar.contact}</Link>
              <Link to="#learn-more" className="p-2 text-white">{texts.navbar.learnMore}</Link>
            </div>
          </div>
        )}
      </nav>

      <div className="max-sm:hidden absolute top-7 left-1/2 transform -translate-x-1/2 z-10">
        <img src={stackedlogo} alt="Top Image" className="w-36 h-36 object-cover" />
      </div>
      <div className="max-sm:hidden absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
         <img src={cental} alt="Central Image" className="w-[400px] h-[400px] object-cover" />
      </div>
      
      <div className="max-sm:hidden flex justify-center items-center h-16">
        <div className="bg-white w-5/12 h-full"></div>
        <div className="bg-[#182F49] w-2/12 h-full">
          <div className="flex w-full justify-between p-0">
            <button
              onClick={() => {
                setLanguage("en");
                switchLanguage("en");
              }}
              className={`px-2 py-1 text-[8px] mx-1 rounded ${
                language === "en" ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
            >
              Eng
            </button>
            <button
              onClick={() => {
                setLanguage("am");
                switchLanguage("am");
              }}
              className={`px-2 py-1 mx-1 text-[8px] rounded ${
                language === "am" ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
            >
              አማ
            </button>
          </div>
        </div>
        <div className="bg-white w-5/12 h-full"></div>
      </div>
      {/* navbars */}
      <div className="polygonal max-sm:hidden flex justify-center items-center h-16">
        <div className="bg-[#182F49] montserrat text-white w-5/12 h-full flex items-center justify-evenly ">
          <Link to="/">{texts.navbar.home}</Link>
          <Link to="#aboutus-lg" onClick={handleNavigation}>{texts.navbar.about}</Link>
          <Link to="/courses">{texts.navbar.courses}</Link>
        </div>
        <div className="bg-[#182F49] w-2/12 h-full flex  items-center">
            {/* <img src={Logo} alt="SVG Image" className="w-full h-full object-contain" /> */}
         </div>
        <div className="bg-[#182F49] montserrat text-white w-5/12 h-full flex items-center justify-evenly ">
          <Link to="https://t.me/Focussupport1">{texts.navbar.register}</Link>
          <Link to="#contact-us" onClick={handleNavigationContactus}>{texts.navbar.contact}</Link>
          <Link to="/courses">{texts.navbar.learnMore}</Link>
        </div>
      </div>
      <div>
        <div className="sm:hidden text-center p-8 bg-white text-[#182F49]">
          <h3 className="text-[#E2426C] chyta-font bg-transparent text-lg font-semibold mb-2">
              {texts.hero.heading}
            </h3>
          <h1 className="text-4xl bg-transparent montserrat font-extrabold text-[#182F49] leading-tight mb-4">
            {texts.hero.title} 
            </h1>
          <p className="text-gray-700 montserrat bg-transparent mb-6"
          dangerouslySetInnerHTML={{ __html: texts.hero.description }}
          >
           </p>
          <button onClick={handleLearnMoreClick} className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600">
           {texts.hero.learnMore}
          </button>
        </div>
        <div className="sm:hidden bg-[#182F49] mt-12 mb-12 h-24 w-full flex justify-center items-center">
          <div className="sm:hidden">
            <img src={cental} alt="Central Image" className="w-[300px] h-[300px] object-cover" />
          </div>
        </div>
        <div className="sm:hidden text-center items-center p-8 bg-white text-[#182F49]">
          <h2 className="text-[#E2426C] montserrat text-xl font-semibold mb-4">
                {texts.courses.title}
              </h2>
        <div className="flex items-center justify-center space-x-7 mb-5">
      <button
        onClick={handlePrev}
        className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold"
      >
        <span>&lt;</span>
      </button>
      <h3 className="text-xl montserrat font-bold text-[#182F49] text-center">
      {currentCourses[index].split("<br/>").map((line, i) => (
        <span key={i}>
          {line}
           {i !== currentCourses[index].split("<br/>").length - 1 && <br />}
         </span>
       ))}
        </h3>
      <button
        onClick={handleNext}
        className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold"
      >
        <span>&gt;</span>
      </button>
    </div>
              <button className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 mb-4"><a href="https://t.me/Focussupport1">{texts.courses.register}</a>
                
              </button>
              <p className="text-gray-600 montserrat text-base mb-4">
                {texts.courses.description}
              </p>
              <p className="text-[#E2426C] chyta-font font-bold text-lg">
                {texts.courses.upgrade}
              </p>
        </div>
      </div>

      <div className="max-sm:hidden flex justify-center items-center sm:h-16">
        <div className="max-sm:hidden w-5/12 sm:h-full">
          <div className="bg-transparent sm:p-8 md:p-16  lg:pl-20 lg:pt-20 max-w-lg sm:mx-auto sm:flex flex-col items-center justify-center text-center">
            {/* Heading */}
            <h3 className="text-[#E2426C] chyta-font bg-transparent text-lg font-semibold mb-2">
           {texts.hero.heading}
          </h3>
          <h1 className="text-4xl bg-transparent montserrat font-extrabold text-[#182F49] leading-tight mb-4">
          {texts.hero.title} 
          </h1>

         {/* Subtitle  {texts.hero.heading}  */}
          <p className="text-gray-700 montserrat bg-transparent mb-6"
          dangerouslySetInnerHTML={{ __html: texts.hero.description }}
          >
         </p>

         {/* Call-to-Action Button */}
         <button onClick={handleLearnMoreClick} className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600">
         {texts.hero.learnMore}
        </button>
      </div>
        </div>
        <div className="max-sm:hidden bg-[#182F49] w-2/12 h-full">
          <div className="bg-[#182F49] items-center  h-full flex justify-center items-center">
            {/* <img src={logof} alt="SVG Image" className="w-full h-full object-contain px-8 pb-2" /> */}
          </div>
          <div className="bg-[#182F49]  h-full"></div>
          <div className="bg-[#182F49]  h-full"></div>
          <div className="bg-[#182F49]  h-full"></div>
          <div className="bg-[#182F49]  h-full"></div>
          <div className="bg-[#182F49]  h-full"></div>{" "}
          <div className="bg-[#182F49]  h-full"></div>{" "}
          <div className="bg-[#182F49]  h-full"></div>{" "}
          <div className="bg-[#182F49]  h-full"></div>{" "}
        </div>
        <div className="max-sm:hidden bg-white w-5/12 h-full bg-transparent">
          <div className="max-sm:hidden bg-white p-8 md:p-16 pb-0 lg:pl-20 lg:pt-20 max-w-lg flex flex-col items-center justify-center text-center">
            <h2 className="text-[#E2426C] montserrat text-xl font-semibold mb-4">
              {texts.courses.title}
            </h2>
            <div className="flex items-center justify-center space-x-7 mb-5">
      <button
        onClick={handlePrev}
        className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold"
      >
        <span>&lt;</span>
      </button>
      <h3 className="text-xl montserrat font-bold text-[#182F49] text-center">
      {currentCourses[index].split("<br/>").map((line, i) => (
        <span key={i}>
          {line}
           {i !== currentCourses[index].split("<br/>").length - 1 && <br />}
         </span>
       ))}
        </h3>
      <button
        onClick={handleNext}
        className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold"
      >
        <span>&gt;</span>
      </button>
    </div>
            <button className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 mb-4">
              <a href="https://t.me/Focussupport1">{texts.courses.register}</a>
            </button>
            <p className="text-gray-600 montserrat text-base mb-4">
              {texts.courses.description}
            </p>
            <p className="text-[#E2426C] chyta-font font-bold text-lg">
              {texts.courses.upgrade}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;