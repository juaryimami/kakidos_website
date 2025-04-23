import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";

const Footer: React.FC = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <footer className="bg-[#E2426C] py-16">
      <div className="container mx-auto flex items-end flex-col md:flex-col lg:flex-row lg:items-center md:items-center justify-between sm:justify-around lg:px-8">
        
        {/* Hexagon Container (Left) */}
        <div className="flex flex-wrap justify-center gap-6 md:w-2/3  order-2 md:order-1">
          <Hexagon title={texts.our_unique.box1.title} subtitle={texts.our_unique.box1.heading} />
          <Hexagon title={texts.our_unique.box2.title} subtitle={texts.our_unique.box2.heading} />
          <Hexagon title={texts.our_unique.box3.title} subtitle={texts.our_unique.box3.heading} />
        </div>

        {/* Title Section (Right) */}
        <div className="md:w-1/3 text-white text-right mt-8  md:mt-0 order-1 md:order-2">
          <h2 className="text-xl md:text-2xl chyta-font lg:text-2xl font-bold mb-4">{texts.our_unique.p1}</h2>
          <h3 className="lg:text-3xl md:text-3xl text-2xl text-[#182F49] font-extrabold">{texts.our_unique.p2}</h3>
        </div>

      </div>
    </footer>
  );
};

const Hexagon: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="relative w-[200px] h-[300px] flex items-center justify-center text-center">
      <div className="w-full h-full bg-[#112c4a] text-white flex flex-col items-center justify-center px-4 py-6
                      clip-hexagon shadow-lg ">
        <p className="text-sm chyta-font italic">{subtitle}</p>
        <p className="text-lg font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Footer;
