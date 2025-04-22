import React, { useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";
import Fake1 from '../../assets/fake/fake1.jpg';
import Fake2 from '../../assets/fake/fake2.jpg';
import Fake5 from '../../assets/fake/fake5.jpg';
import Fake4 from '../../assets/fake/fake4.jpg';


interface RibbonImageProps {
  src: string;
  alt: string;
  ribbonText?: string;
}

const RibbonImage: React.FC<RibbonImageProps> = ({ src, alt, ribbonText = "Fake" }) => {
  return (
    <div className="relative inline-block w-full">
      <img src={src} alt={alt} className="rounded-lg shadow-lg w-full" />
      <div className="absolute top-2 left-[-40px] bg-red-600 text-white text-xs font-bold transform rotate-[-45deg] w-40 text-center py-1 shadow-md">
        {ribbonText}
      </div>
    </div>
  );
};


const FooterAboveSection: React.FC = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section className="bg-yellow-500 text-blue-900 py-16 px-8">
      <div className="max-w-7xl montserrat mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl text-red-700 font-bold mb-4">
            {texts.fake.warning}
          </h2>
          <h3 className="text-4xl text-white font-extrabold mb-6">
            {texts.fake.heading}
          </h3>
          <p className="text-[#182F49] leading-relaxed">
            {texts.fake.p1}
            <br /><br />
            {texts.fake.p2}
            <br /><br />
            {texts.fake.p3}
          </p>
          <div className="grid mt-10 grid-cols-1 gap-8">
          <RibbonImage src={Fake5} alt="..." ribbonText="Fake" />
          <RibbonImage src={Fake4} alt="..." ribbonText="Fake" />
          
        </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <RibbonImage src={Fake1} alt="..." ribbonText="Fake" />
          <RibbonImage src={Fake2} alt="..." ribbonText="Fake" />
          
        </div>
      </div>
    </section>
  );
};

export default FooterAboveSection;
