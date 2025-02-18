import { Link } from "react-router-dom";
import cental from "../../assets/Focus TC - Imagery (Low-Res).png";
import pattern from "../../assets/PatternGrid.png";
import stackedlogo from "../../assets/Focus TC Logo - Stacked (No BG, Light Text) (1).png";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  return (
    <div className="lg:w-11/12 lg:mx-auto">
      {/* above blue rectangle */}
      <nav className="p-1 bg-[#182F49] sm:hidden flex justify-between items-center">
        <div className="text-xl font-bold">
          <img
            src={stackedlogo}
            alt="Top Image"
            className="w-16 h-16 object-cover"
          />
        </div>
        <button className="md:hidden w-16 h-16 text-white object-cover text-2xl">
          ☰
        </button>
      </nav>

      <div className="max-sm:hidden absolute top-7 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={stackedlogo}
          alt="Top Image"
          className="w-36 h-36 object-cover"
        />
      </div>
      <div className="max-sm:hidden absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src={cental}
          alt="Central Image"
          className="w-[400px] h-[400px] object-cover"
        />
      </div>

      <div className="max-sm:hidden flex justify-center items-center h-16">
        <div className="bg-white w-5/12 h-full"></div>
        <div className="bg-[#182F49] w-2/12 h-full text-center p-2">
          <div
            className="relative w-20 h-8 bg-gray-300 rounded-md flex items-center cursor-pointer transition-all border border-gray-400"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "am" : "en")
            }
          >
            {/* Moving Rectangular Ball */}
            <div
              className={`absolute top-1 w-8 h-6 bg-white rounded-md shadow-md transition-transform ${
                i18n.language === "am" ? "translate-x-12" : "translate-x-1"
              }`}
            ></div>

            {/* Language Labels */}
            <span className="absolute left-2 text-xs font-semibold text-gray-700">
              EN
            </span>
            <span className="absolute right-2 text-xs font-semibold text-gray-700">
              አማ
            </span>
          </div>
        </div>
        <div className="bg-white w-5/12 h-full"></div>
      </div>
      {/* navbars */}
      <div className="polygonal max-sm:hidden flex justify-center items-center h-16">
        <div className="bg-[#182F49] montserrat text-white w-5/12 h-full flex items-center justify-evenly ">
          <Link to="/">{t("Home")}</Link>
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
      <div>
        <div className="sm:hidden text-center p-8 bg-white text-[#182F49]">
          <h3 className="text-[#E2426C] chyta-font bg-transparent text-lg font-semibold mb-2">
            Focused on Your Success
          </h3>
        <h1 className="text-4xl bg-transparent montserrat font-extrabold text-[#182F49] leading-tight mb-4">
          A Convenient <br /> Online Learning <br /> Platform
          </h1>
        <p className="text-gray-700 montserrat bg-transparent mb-6">
          Carefully curated courses to upgrade yourself and achieve financial freedom
          by learning new skills for a guaranteed better job opportunity and making
          passive income.
         </p>
        <button className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600">
         Learn More
        </button>
      </div>
      <div className="sm:hidden bg-[#182F49] mt-12 mb-12 h-24 w-full flex justify-center items-center">
        <div className="sm:hidden">
          <img src={cental} alt="Central Image" className="w-[300px] h-[300px] object-cover" />
        </div>
      </div>
      <div className="sm:hidden text-center items-center p-8 bg-white text-[#182F49]">
        <h2 className="text-[#E2426C] montserrat text-xl font-semibold mb-4">
              Our Courses
            </h2>
            <div className="flex items-center justify-center space-x-7 mb-5">
              <button className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold">
                <span>&lt;</span>
              </button>
              <h3 className="text-xl montserrat font-bold text-[#182F49] text-center">
                Content <br />Creation
              </h3>
              <button className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold">
              <span>&gt;</span>
              </button>
           </div>
            <button className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 mb-4">
              REGISTER
            </button>
            <p className="text-gray-600 montserrat text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p className="text-[#E2426C] chyta-font font-bold text-lg">
              Ready to Upgrade Yourself?
            </p>
      </div>
      </div>

      <div className="max-sm:hidden flex justify-center items-center sm:h-16">
        <div className="max-sm:hidden w-5/12 sm:h-full">
          <div
            className="bg-transparent sm:p-8 md:p-16  lg:pl-20 lg:pt-20 max-w-lg sm:mx-auto sm:flex flex-col items-center justify-center text-center"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Heading */}
            <h3 className="text-[#E2426C] chyta-font bg-transparent text-lg font-semibold mb-2">
              Focused on Your Success
            </h3>
            <h1 className="text-4xl bg-transparent montserrat font-extrabold text-[#182F49] leading-tight mb-4">
              Invest in your
              <br /> future with just 30%
            </h1>

            {/* Subtitle */}
            <p className="text-gray-700 montserrat bg-transparent mb-6">
              Pay only 30% of your course fee upfront and get a{" "}
              <strong>70% loan</strong> to cover the rest. Plus gain access to{" "}
              <strong>job opportunities</strong> that help you repay your loan
              while building your caree
            </p>

            {/* Call-to-Action Button */}
            <button className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600">
              Learn More
            </button>
          </div>
        </div>
        <div className="max-sm:hidden bg-[#182F49] w-2/12 h-full">
          <div className="bg-[#182F49] h-full flex justify-center items-center">
            {/* <img src={logof} alt="SVG Image" className="w-full h-full object-contain px-8 pb-2" /> */}
          </div>
          <div className="bg-[#182F49]  h-full"></div>
          <div className="bg-[#182F49]  h-full"></div>
          <div className="bg-[#101317]  h-full"></div>
          <div className="bg-[#182F49]  h-full"></div>
          <div className="bg-[#182F49]  h-full"></div>{" "}
          <div className="bg-[#182F49]  h-full"></div>{" "}
          <div className="bg-[#182F49]  h-full"></div>{" "}
          <div className="bg-[#182F49]  h-full"></div>{" "}
        </div>
        <div className="max-sm:hidden bg-white w-5/12 h-full bg-transparent">
          <div
            className="max-sm:hidden bg-white p-8 md:p-16 pb-0 lg:pl-20 lg:pt-20 max-w-lg flex flex-col items-center justify-center text-center"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-[#E2426C] montserrat text-xl font-semibold mb-4">
              Our Courses
            </h2>
            <div className="flex items-center space-x-7 mb-5">
              <button className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold">
                <span>&lt;</span>
              </button>
              <h3 className="text-xl montserrat font-bold text-[#182F49]">
                Content <br/>Creation
              </h3>
              <button className="text-[#E2426C] hover:text-pink-700 text-2xl font-bold">
                <span>&gt;</span>
              </button>
            </div>
            <button className="btn bg-[#E2426C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 mb-4">
              REGISTER
            </button>
            <p className="text-gray-600 montserrat text-base mb-4">
              This course is designed by experienced professionals who bring
              years of expertise to the table. They’ve crafted the content in a
              way that’s easy to understand for learners of all generations.
            </p>
            <p className="text-[#E2426C] chyta-font font-bold text-lg">
              Ready to Upgrade Yourself?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
