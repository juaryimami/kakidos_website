import { useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";

const About = () => {
  const { texts } = useContext(LanguageContext);


  return (
    <div id="aboutus-lg" className="bg-[#182F49] text-white  py-16 px-8 w-12/12 mx-auto">
      <div className="container mx-auto flex flex-col  md:flex-col md:items-start lg:flex-row items-start lg:items-start">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:p-9">
          <h3 className="text-lg font-light chyta-font text-gray-300 mb-2"></h3>
          <h2 className="lg:text-4xl md:text-4xl text-2xl  font-bold text-[#F43F5E] mb-4 flex flex-col">
            {texts.about.heading} 
            {/* <span className=" text-[#F43F5E]  font-bold ">{texts.about.about}</span>
            
            <span className="text-[#F43F5E] montserrat">{texts.about.trainingCenter} </span> */}
          </h2>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:pl-12">
          <p className="text-gray-400 montserrat mb-4">
            {texts.about.p1}
          </p>
          <p className="text-gray-400 montserrat">
            {texts.about.p2}
          </p>
          <p className="text-gray-400 montserrat">
            {texts.about.p3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
