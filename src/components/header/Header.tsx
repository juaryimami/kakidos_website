import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* above blue rectangle */}
      <div className="flex justify-center items-center h-16">
        <div className="bg-white w-5/12 h-full"></div>
        <div className="bg-[#183F49] w-2/12 h-full"></div>
        <div className="bg-white w-5/12 h-full"></div>
      </div>
      {/* navbars */}
      <div className="flex justify-center items-center h-16">
        <div className="bg-[#183F49] text-white w-5/12 h-full flex items-center justify-around rounded-l-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Courses</Link>
        </div>
        <div className="bg-[#183F49] w-2/12 h-full"></div>
        <div className="bg-[#183F49] text-white w-5/12 h-full flex items-center justify-around rounded-r-xl">
          <Link to="/register">Register</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/learn-more">Learn More</Link>
        </div>
      </div>

      <div className="flex justify-center items-center h-16">
        <div className="bg-white w-5/12 h-full">
          <div className="bg-white p-8 md:p-16 lg:pl-20 lg:pt-20 max-w-lg">
            {/* Heading */}
            <h3 className="text-pink-500 text-lg font-semibold mb-2">
              Focused on Your Success
            </h3>
            <h1 className="text-4xl font-extrabold text-blue-900 leading-tight mb-4">
              A Convenient <br /> Online Learning <br /> Platform
            </h1>

            {/* Subtitle */}
            <p className="text-gray-700 mb-6">
              Carefully curated courses to upgrade yourself and achieve
              financial freedom by learning new skills for a guaranteed better
              job opportunity and making passive income.
            </p>

            {/* Call-to-Action Button */}
            <button className="btn bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-[#183F49] w-2/12 h-full">
          <div className="bg-[#183F49]  h-full"></div>
          <div className="bg-[#183F49]  h-full"></div>
          <div className="bg-[#183F49]  h-full"></div>
          <div className="bg-[#183F49]  h-full"></div>
          <div className="bg-[#183F49]  h-full"></div>
          <div className="bg-[#183F49]  h-full"></div>{" "}
          <div className="bg-[#183F49]  h-full"></div>{" "}
          <div className="bg-[#183F49]  h-full"></div>{" "}
          <div className="bg-[#183F49]  h-full"></div>{" "}
        </div>
        <div className="bg-white w-5/12 h-full">
          <div className="bg-white p-8 md:p-16 lg:pl-20 lg:pt-20 max-w-lg">
            <h2 className="text-pink-500 text-xl font-semibold mb-4">
              Our Courses
            </h2>
            <div className="flex items-center space-x-7 mb-5">
              <button className="text-pink-500 hover:text-pink-700 text-2xl font-bold">
                <span>&lt;</span>
              </button>
              <h3 className="text-xl font-bold text-gray-800">
                Content Creation
              </h3>
              <button className="text-pink-500 hover:text-pink-700 text-2xl font-bold">
                <span>&gt;</span>
              </button>
            </div>
            <button className="btn bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600">
              REGISTER
            </button>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p className="text-pink-500 font-bold text-lg">
              Ready to Upgrade Yourself?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
