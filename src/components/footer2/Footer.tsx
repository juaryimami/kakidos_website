import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import StackedLogo from '../../assets/Focus TC Logo - Stacked (No BG, Light Text) (1).png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2740] text-white py-16">
      <div className="container gap-16 mx-auto px-10 md:px-10 lg:px-10 grid grid-cols-2 lg:grid-cols-3 lg:gap-8">

        {/* Logo and Tagline */}
        <div className="space-y-4">
          <div className="flex ">
            <img src={StackedLogo} alt="Focus Training Center Logo" className="w-40 h-40" />
            
          </div>
          <p className="italic chyta-font text-sm">Focused on Your Success</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#F9425F] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#F9425F]">Home</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">About Us</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">Courses</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">Register</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#F9425F]">Learn More</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div >
          <h3 className="text-xl max-sm:text-sm font-semibold text-[#F9425F] mb-4">Subscribe to our Telegram Channel</h3>
          <div className="flex items-center space-x-2">
            <a 
              href="https://t.me/focustrainingcenter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-evenly  bg-[#F9425F] text-white px-4 py-2 rounded-full hover:bg-[#D8314F]"
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
              <span>+251 96 308 1888</span>
            </div>
            <div className="flex max-sm:flex-row items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+251 96 309 9888</span>
            </div>
            <div className="flex items-center space-x-2">
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

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 mx-10 mt-8  pt-8 text-left text-sm">
        © 2025 Focus Training Center by Juhar Yimer. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
