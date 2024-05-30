import Image from 'next/image';
import React from 'react';
import hero from '@/public/portrait-beautiful-woman-with-clear-skin-posing-with-leaf-copy-space 1.png';

export const Hero = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image className="w-full h-full object-cover" src={hero} alt="hero" />
      <div className="absolute inset-y-0 left-0 flex flex-col justify-center pl-10 md:pl-20">
        <div>
          <h1 className="text-gray-600 text-4xl md:text-6xl font-bold text-left italic uppercase">Life Healthier</h1>
          <h1 className="text-gray-600 text-4xl md:text-6xl font-bold text-left italic uppercase">and Happier</h1>
          <hr className="border-b-2 border-gray-600 w-24 md:w-48 mt-2" />
        </div>
        <div className="py-5 md:py-10">
          <h1 className="text-white text-2xl md:text-4xl font-semibold text-left">Start your day with</h1>
          <h1 className="text-white text-2xl md:text-4xl font-semibold text-left">healthy and natural care</h1>
        </div>
        <div className="pt-16 md:pt-32">
          <button className="rounded-full bg-pink-500 py-2 px-4 md:py-3 md:px-8 text-white text-lg md:text-2xl uppercase">See More</button>
        </div>
      </div>
    </div>
  );
};
