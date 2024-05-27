import Image from 'next/image';
import React from 'react';
import hero from '@/public/portrait-beautiful-woman-with-clear-skin-posing-with-leaf-copy-space 1.png';

export const Hero = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image className="w-full h-full object-cover" src={hero} alt="hero" />
      <div className="absolute inset-y-0 left-0 flex flex-col justify-center pl-20">
        <div>
          <h1 className="text-gray-600 text-6xl font-bold text-left italic">HIDUP LEBIH SEHAT</h1>
          <h1 className="text-gray-600 text-6xl font-bold text-left italic">DAN SEJAHTERA</h1>
          <hr className="border-b-2 border-gray-600 w-150 mt-2" />
        </div>
        <div className="py-10">
          <h1 className="text-white text-4xl font-semibold text-left">Mulailah hari anda dengan</h1>
          <h1 className="text-white text-4xl font-semibold text-left">perawatan yang sehat dan alami</h1>
        </div>
        <div className="pt-32">
          <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-2xl">SELENGKAPNYA</button>
        </div>
      </div>
    </div>
  );
};
