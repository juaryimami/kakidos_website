import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import HashimLogo from '../../assets/hashim_logo.png';
import { LanguageContext } from "../../locales/LanguageContext";


export default function Header() {
  const { texts, switchLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [language, setLanguage] = useState<"en" | "am">("en");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const goToMainPage = () => {
    navigate("/"); // Navigate to the root route ("/") 
  };

  const handleNavigationContactus = () => {
    const aboutSection = document.getElementById('contact-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const handleNavigationAboutus = () => {
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-8 py-2 bg-white shadow-sm z-50 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={HashimLogo} alt="Hashim Logo" className="h-16" />
      </div>

      {/* Hamburger Icon (visible on small screens) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links (visible on medium screens and above) */}
      <nav className="hidden md:flex items-center space-x-8 text-base text-gray-700">
        <a href="/" onClick={goToMainPage} className="hover:underline underline-offset-4 text-blue-500">{texts.navbar.home}</a>
        <a href="#about-us" onClick={handleNavigationAboutus} className="hover:underline underline-offset-4">{texts.navbar.about}</a>
        <a href="#contact-us" onClick={handleNavigationContactus} className="hover:underline underline-offset-4">{texts.navbar.contact}</a>
        <a href="#" className="hover:underline underline-offset-4">{texts.navbar.learnMore}</a>
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

       
      </nav>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white bg-opacity-90 rounded-l-lg shadow-md flex flex-col items-start space-y-4 p-4 md:hidden">
          <a href="/" onClick={goToMainPage} className="text-blue-500 underline underline-offset-4">{texts.navbar.home}</a>
          <a href="#about-us" onClick={handleNavigationAboutus} className="hover:underline underline-offset-4 text-gray-700">{texts.navbar.about}</a>
          <a href="#contact-us" onClick={handleNavigationContactus} className="hover:underline underline-offset-4 text-gray-700">{texts.navbar.contact}</a>
          <a href="#" className="hover:underline underline-offset-4">{texts.navbar.learnMore}</a>
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
        
      )}
    </header>
  );
}