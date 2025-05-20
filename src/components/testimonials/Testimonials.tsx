import { useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";

export default function Testimonials() {
 const { texts } = useContext(LanguageContext);

  return (
    <section className="bg-[#33393F] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Title Area */}
        <div className="flex flex-col justify-center">
          <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight"
          dangerouslySetInnerHTML={{ __html: texts.testimonials.header }}
        />
          <div className="mt-6 flex items-center">
            {/* Placeholder for user icons */}
            <div className="flex -space-x-2 mr-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-[#33393F]"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-[#33393F]"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-[#33393F]"></div>
              <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-[#33393F]"></div>
            </div>
            <p className="text-lg text-blue-400">100+ {texts.testimonials.review}</p>
          </div>
        </div>

        {/* Right Section - Testimonial Card */}
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm">
          {/* Placeholder for image */}
          <div className="w-16 h-16 bg-gray-200 rounded mb-4"></div>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            {texts.testimonials.content}
          </p>
          {/* Star Rating */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.224 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </div>
          <div className="flex items-center">
           <p className="font-bold text-gray-900 uppercase" style={{ filter: "blur(6px)" }}>
        Kuman Tunman
      </p>
            <div className="ml-2 flex">
              <div className="w-2 h-4 bg-red-500 mr-1"></div>
              <div className="w-2 h-4 bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}