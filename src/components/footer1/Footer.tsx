import React from 'react';

const FooterAboveSection: React.FC = () => {
  return (
    <section className="bg-yellow-500 text-blue-900 py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl text-[#182F49] font-bold mb-4">About Us</h2>
          <h3 className="text-4xl text-[#182F49] font-extrabold mb-6">Know more about <span className="text-[#E2426C]">Focus Training Center</span></h3>
        </div>
        <div>
          <p className="mb-4 text-[#182F49]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-[#182F49]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterAboveSection;
