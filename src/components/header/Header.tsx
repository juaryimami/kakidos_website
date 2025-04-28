import HashimLogo from '../../assets/hashim_logo.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-2 bg-white shadow-sm z-50 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={HashimLogo} alt="Hashim Logo" className="h-16" />
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-8 text-base text-gray-700">
        <a href="#" className="underline underline-offset-4 text-blue-500">Home</a>
        <a href="#" className="hover:underline underline-offset-4">About us</a>
        <a href="#" className="hover:underline underline-offset-4">Contact us</a>

        {/* Buttons */}
        <button className="px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-100 text-gray-700">
          Log in
        </button>
        <button className="px-4 py-1 bg-[#8ac4dd] text-white rounded-full hover:bg-[#6ea9c2]">
          Sign up
        </button>
      </nav>
    </header>
  );
}