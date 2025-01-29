import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E2426C] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        
        {/* Hexagon Container (Left) */}
        <div className="flex flex-wrap justify-center gap-6 md:w-2/3">
          <Hexagon title="Courses with real world applications" subtitle="Carefully Curated" />
          <Hexagon title="Job & Passive Income Opportunities" subtitle="Guaranteed" />
          <Hexagon title="Payment Plans & Loan Systems" subtitle="Easy Flexible" />
        </div>

        {/* Title Section (Right) */}
        <div className="md:w-1/3 text-white text-right mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">What makes us different?</h2>
          <h3 className="text-3xl font-extrabold">Our unique Plans & Offerings</h3>
        </div>

      </div>
    </footer>
  );
};

const Hexagon: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="relative w-[200px] h-[300px] flex items-center justify-center text-center">
      <div className="w-full h-full bg-[#112c4a] text-white flex flex-col items-center justify-center px-4 py-6
                      clip-hexagon shadow-lg border-[3px] border-white">
        <p className="text-sm italic">{subtitle}</p>
        <p className="text-lg font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Footer;
