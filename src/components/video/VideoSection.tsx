import React from 'react';
import {  useContext } from "react";
import { LanguageContext } from "../../locales/LanguageContext";

interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
  description?: string;
  ctaText?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Default to a sample YouTube video
  }) => {

  const { texts } = useContext(LanguageContext);
  return (
    <section className="relative py-16 overflow-hidden bg-gray-100">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 50%,0 0,50%" fill="#E5E7EB" opacity="0.5" />
          <polygon points="100%,100% 50%,100% 100%,50%" fill="#D1D5DB" opacity="0.5" />
          <polygon points="25%,25% 50%,25% 25%,50%" fill="#9CA3AF" opacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {texts.video.heading}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {texts.video.subheading}
        </p>

        {/* Video Player */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={videoUrl}
                title="Web Hashim Consultancy Promotional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Promotional video for Web Hashim Consultancy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;