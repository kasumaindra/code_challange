import React from 'react';
import Image from 'next/image';
import business from '@/public/business.png';

export const HeroBusiness = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image className="w-full h-full object-cover" src={business} alt="business" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">Business Opportunity</h1>
          <hr className="border-b-2 border-white mt-5 w-72 md:w-96 mx-auto" />
        </div>
        <div className="container max-w-4xl md:max-w-6xl py-6 md:py-10">
          <h1 className="text-white text-base md:text-xl text-center">
            We open a business opportunity for our customers with flexibility from PT. Kalisa Sehat dan Sejahtera. Join and create a fun business network with various profitable plan packages.
          </h1>
        </div>
        <div className="pt-4 md:pt-6">
          <button className="rounded-full bg-white py-2 px-6 md:py-3 md:px-8 text-black text-base md:text-2xl uppercase">Business Opportunity</button>
        </div>
      </div>
    </div>
  );
};
