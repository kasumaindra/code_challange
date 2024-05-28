import Image from 'next/image';
import React from 'react';
import imgAbout from '@/public/about.png';
import imgService from '@/public/service.png';
import imgBusiness from '@/public/business.png';

export const ContentLink = () => {
  return (
    <div className="flex justify-between py-24 px-28 relative">
      <div className="basis-1/3 relative">
        <Image src={imgAbout} alt="about" className="w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex justify-center items-center w-full">
          <button className="rounded-xl bg-slate-400 p-4 w-80">ABOUT US</button>
        </div>
      </div>
      <div className="basis-1/3 relative">
        <Image src={imgService} alt="service" className="w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex justify-center items-center w-full">
          <button className="rounded-xl bg-slate-400 p-4 w-80">OUR SERVICE</button>
        </div>
      </div>
      <div className="basis-1/3 relative">
        <Image src={imgBusiness} alt="business" className="w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex justify-center items-center w-full">
          <button className="rounded-xl bg-slate-400 p-4 w-80">BUSINESS OPPORTUNITY</button>
        </div>
      </div>
    </div>
  );
};
