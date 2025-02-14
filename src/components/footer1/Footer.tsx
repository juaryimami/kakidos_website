import React from 'react';

const FooterAboveSection: React.FC = () => {
  return (
    <section className="bg-yellow-500 text-blue-900 py-16 px-8">
      <div className="max-w-7xl montserrat mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl chyta-font text-[#182F49] font-bold mb-4">About Us</h2>
          <h3 className="text-4xl text-white font-extrabold mb-6">Know more about <span className="text-[#182F49]">Focus Training Center</span></h3>
        </div>
        <div>
          <p className="mb-4 text-[#182F49]">
            With our unique “Pay 30%, Get 70% Loan, and Job Opportunities” model, we make professional training affordable and accessible, ensuring our students get the best education while securing career pathways to repay their loans and succeed in sales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterAboveSection;
