import React from 'react';
import { Mail, Phone, Globe, ArrowUp } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";
import StackedLogo from '../../assets/Focus TC Logo - Stacked (No BG, Light Text) (1).png';

// Partner logos
import PartnerLogo1 from '../../assets/partner1.jpg';
import PartnerLogo2 from '../../assets/partner2.jpg';
import PartnerLogo3 from '../../assets/partner3.jpg';
import PartnerLogo4 from '../../assets/partner4.jpg';
import PartnerLogo5 from '../../assets/partner5.jpg';

const Footer: React.FC = () => {
  const { texts } = useContext(LanguageContext);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact-us" className="bg-[#0A2740] text-white py-16 relative">
      <div className="container gap-16 mx-auto px-10 md:px-10 lg:px-10 grid grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {/* Logo and Tagline */}
        <div className="space-y-4">
          <div className="flex">
            <img src={StackedLogo} alt="Focus Training Center Logo" className="w-40 h-40" />
          </div>
          <p className="text-[#F9425F] text-xl font-semibold">{texts.hero.heading}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#F9425F] mb-4">{texts.links}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#F9425F]">{texts.navbar.home}</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">{texts.navbar.about}</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">{texts.navbar.courses}</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">{texts.navbar.register}</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">{texts.navbar.contact}</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">{texts.navbar.learnMore}</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div className="max-sm:col-span-2 max-am:flex max-sm:flex-col max-am:items-start">
          <h3 className="text-xl max-sm:text-sm font-semibold text-[#F9425F] mb-4">{texts.telegram}</h3>
          <div className="flex items-center space-x-2">
            <a 
              href="https://t.me/focustrainingcenter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-evenly bg-[#F9425F] text-white px-4 py-2 rounded-full hover:bg-[#D8314F]"
            >
              <div className="bg-blue-500 text-white p-0.5 rounded-full mr-2">
                <FaTelegramPlane className="text-lg" />
              </div> 
              @focustrainingcenter
            </a>
          </div>

          <div className="mt-6 montserrat space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="w-full">+251 96 308 1888</span>
            </div>
            <div className="flex max-sm:flex-row space-x-2">
              <Phone className="w-5 h-5" />
              <span>+251 96 309 9888</span>
            </div>

            {/* For Afan Oromo section */}
            
            <div className="pt-4">
              
              <p className="text-xl max-sm:text-sm font-semibold text-[#F9425F]">For Afan Oromo:</p>
          <div className="flex items-center space-x-2 pt-4 pb-4">
            <a 
              href="https://t.me/focusleenjii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-evenly bg-[#F9425F] text-white px-4 py-2 rounded-full hover:bg-[#D8314F]"
            >
              <div className="bg-blue-500 text-white p-0.5 rounded-full mr-2">
                <FaTelegramPlane className="text-lg" />
              </div> 
              @focusleenjii
            </a>
          </div>
              <div className="flex items-center space-x-2 mt-1">
                <Phone className="w-5 h-5" />
                <span>+251 96 317 1555</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+251 96 329 9888</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <Mail className="w-5 h-5" />
              <span>info@focustrainingcenter.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>www.focustrainingcenter.org</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="mt-16 border-t border-gray-600 mx-10 pt-8">
        <h3 className="text-xl font-semibold text-[#F9425F] mb-6 text-center">{texts.our_partner}</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <img src={PartnerLogo1} alt="Partner 1" className="w-24 h-24 object-contain" />
          <img src={PartnerLogo2} alt="Partner 2" className="w-24 h-24 object-contain" />
          <img src={PartnerLogo3} alt="Partner 3" className="w-24 h-24 object-contain" />
          <img src={PartnerLogo4} alt="Partner 4" className="w-24 h-24 object-contain" />
          <img src={PartnerLogo5} alt="Partner 5" className="w-24 h-24 object-contain" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 mx-10 mt-8 pt-8 text-left text-sm">
        © 2025 Focus Training Center by Juhar Yimer. All Rights Reserved
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#F9425F] text-white p-3 rounded-full shadow-lg hover:bg-[#D8314F] transition-all duration-300"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
