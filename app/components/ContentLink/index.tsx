import Image from 'next/image';
import React from 'react';
import imgAbout from '@/public/about.png';
import imgService from '@/public/service.png';
import imgBusiness from '@/public/business.png';

export const ContentLink = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-10 md:py-24 px-5 md:px-28 relative">
      <div className="basis-full md:basis-1/3 relative mb-5 md:mb-0">
        <Image src={imgAbout} alt="about" className="w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex justify-center items-center w-full">
          <a href="/about">
            <button className="rounded-xl bg-slate-400 p-2 md:p-4 w-40 md:w-80 text-sm md:text-base">ABOUT US</button>
          </a>
        </div>
      </div>
      <div className="basis-full md:basis-1/3 relative mb-5 md:mb-0">
        <Image src={imgService} alt="service" className="w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex justify-center items-center w-full">
          <a href="/services">
            <button className="rounded-xl bg-slate-400 p-2 md:p-4 w-40 md:w-80 text-sm md:text-base">OUR SERVICE</button>
          </a>
        </div>
      </div>
      <div className="basis-full md:basis-1/3 relative">
        <Image src={imgBusiness} alt="business" className="w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex justify-center items-center w-full">
          <a href="/business">
            <button className="rounded-xl bg-slate-400 p-2 md:p-4 w-40 md:w-80 text-sm md:text-base">BUSINESS OPPORTUNITY</button>
          </a>
        </div>
      </div>
    </div>
  );
};
