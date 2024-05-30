import React from 'react';
import Image from 'next/image';
import about from '@/public/about.png';

export const HeroAbout = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image className="w-full h-full object-cover" src={about} alt="about" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">About Us</h1>
          <hr className="border-b-2 border-white w-36 md:w-72 mt-5 mx-auto" />
        </div>
        <div className="container max-w-4xl md:max-w-6xl py-6 md:py-10">
          <p className="text-white text-base md:text-xl text-center">
            We were founded in 2021, with the name PT. Kalisa Sehat Sejahtera has shown a different approach to business. We started with an innovative concept combined with high quality products and business opportunities that ordinary
            people can participate in as well as a profitable system.
          </p>
        </div>
        <div className="pt-4 md:pt-6">
          <button className="rounded-full bg-white py-2 md:py-3 px-6 md:px-8 text-black text-lg md:text-2xl uppercase">Let See More</button>
        </div>
      </div>
    </div>
  );
};
