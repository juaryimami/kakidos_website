import Map from '../../assets/map_picture.png';
import Linkedin from '../../assets/linkedin.png';
import Tiktok from '../../assets/tiktok.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
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
          <a href="#" className="text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Facebook_circle_pictogram.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </div>
          </a>
          <a href="#" className="text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src={Tiktok}
                alt="TikTok"
                className="w-5 h-5"
              />
            </div>
          </a>
          <a href="#" className="text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </div>
          </a>
          <a href="#" className="text-white">
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
    </footer>
  );
}