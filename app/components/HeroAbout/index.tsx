import React from 'react';
import Image from 'next/image';
import about from '@/public/about.png';

export const HeroAbout = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image className="w-full h-full object-cover" src={about} alt="about" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div>
          <h1 className="text-white text-6xl font-bold uppercase">About Us</h1>
          <hr className="border-b-2 border-white w-72 mt-5" />
        </div>
        <div className="container max-w-6xl py-10">
          <h1 className="text-white text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
          </h1>
        </div>
        <div className="pt-6">
          <button className="rounded-full bg-white py-3 px-8 text-black text-2xl uppercase">Selengkapnya</button>
        </div>
      </div>
    </div>
  );
};
