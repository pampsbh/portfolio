import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/17b89d4e64d171e4d60c6cf9f00d5d4a.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/274092892fac23572555d8270d504fda.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/f0a4054f862f128a8734e427b87d9163.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/c5846b66315065b339c1f98e081a8e83.jpg",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/a7e2d8dbaf6348f10f6b46d674a2f300.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/fd8dd87111d6054964d3ccc7ba82c1bb.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/839467bc29d6e4b477b7aaf337fdc086.webp",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/13d57f99da533b19d9448e92aa13b98e.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/1e124d3cbd3bae4612597296b0e2bcf3.webp",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/c1dca2e7f2879921793d2ea713720fe7.png"
];

const LogoCarousel = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden mt-24 relative py-4">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0E0E0E] via-transparent to-[#0E0E0E]"></div>
      <div className="flex animate-scroll-horizontal">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-24 flex items-center justify-center mx-8">
            <img
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;