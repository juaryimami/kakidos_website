import { ArrowUp } from 'lucide-react';
import Map from '../../assets/map_picture.png';
import Tiktok from '../../assets/tiktok.png';

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id='contact-us' className="bg-gray-900 text-white py-8 px-4">
      <div className="grid grid-cols-1 md:flex md:flex-row justify-between max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-6 items-start">
        {/* Languages Section */}
        <div className="col-span-1 md:w-1/3">
          <h4 className="font-semibold mb-2 uppercase">Languages</h4>
          <ul className="space-y-1">
            <li>*English</li>
            <li>*Amharic</li>
            <li>*Afan Oromo</li>
            <li>*Tigrigna</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="col-span-1 md:w-1/3">
          <h4 className="font-semibold mb-2 uppercase">Useful Link</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Booking</li>
          </ul>
        </div>

        {/* Address Section with Map */}
        <div className="col-span-2 md:w-1/3">
          <h4 className="font-semibold mb-2 uppercase">Address</h4>
          <img
            src={Map}
            alt="Map"
            className="w-full max-w-60 h-40 object-cover rounded"
          />
        </div>
      </div>

      {/* Social Media Icons and Copyright */}
      <div className="flex flex-col items-start mt-6 max-w-6xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          <a href="https://web.facebook.com/profile.php?id=61573601017584" className="text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Facebook_circle_pictogram.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </div>
          </a>
          <a href="https://www.tiktok.com/@hashim_consultanc" className="text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src={Tiktok}
                alt="TikTok"
                className="w-5 h-5"
              />
            </div>
          </a>
          <a href="https://t.me/hashim_consultancy_and_training" className="text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src="data:image/png;base64,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"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </div>
          </a>
          <a href="https://www.instagram.com/hashim_consultancy/" className="text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-5 h-5"
              />
            </div>
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl text-center text-sm border-t-2 border-gray-700 pt-4">
          <p>© Copyright. All Rights Reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
       <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#8ac4dd] text-white p-3 rounded-full shadow-lg hover:bg-[#72b3c5] transition-all duration-300"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}