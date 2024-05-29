import React from 'react';
import Image from 'next/image';
import business1 from '@/public/business1.png';
import business2 from '@/public/business2.png';
import business3 from '@/public/business3.png';
import business4 from '@/public/business4.png';

export const ContenBusiness = () => {
  return (
    <>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11">
        <div className="container max-w-6xl py-10">
          <h1 className="text-black text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
          </h1>
        </div>
      </div>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11">
        <div>
          <h1 className="text-black text-4xl font-bold uppercase">About Us</h1>
          <hr className="border-b-2 border-black w-72 mt-5" />
        </div>
        <div className="container max-w-8xl py-10 w-auto">
          <h1 className="text-black text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
          </h1>
        </div>
      </div>
      {/* content image */}
      <div className="inset-0 flex flex-col justify-center items-center text-center pt-11 pb-3 px-11">
        <div className="flex justify-between flex-wrap px-56">
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center py-11 px-11">
              <Image src={business1} alt="business1" className="max-w-full max-h-full object-contain" />
              <div className="pt-11">
                <h1 className="text-black text-4xl font-bold uppercase">About Us</h1>
                <hr className="border-b-2 border-black w-72 mt-5" />
              </div>
              <div className="container max-w-6xl pt-7">
                <h1 className="text-black text-xl text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
                </h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center py-11 px-11">
              <Image src={business2} alt="business2" className="max-w-full max-h-full object-contain" />
              <div className="pt-11">
                <h1 className="text-black text-4xl font-bold uppercase">About Us</h1>
                <hr className="border-b-2 border-black w-72 mt-5" />
              </div>
              <div className="container max-w-6xl py-10">
                <h1 className="text-black text-xl text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap px-56">
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center py-11 px-11">
              <Image src={business3} alt="business3" className="max-w-full max-h-full object-contain" />
              <div className="pt-11">
                <h1 className="text-black text-4xl font-bold uppercase">About Us</h1>
                <hr className="border-b-2 border-black w-72 mt-5" />
              </div>
              <div className="container max-w-6xl py-10">
                <h1 className="text-black text-xl text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
                </h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center py-11 px-11">
              <Image src={business4} alt="business4" className="max-w-full max-h-full object-contain" />
              <div className="pt-11">
                <h1 className="text-black text-4xl font-bold uppercase">About Us</h1>
                <hr className="border-b-2 border-black w-72 mt-5" />
              </div>
              <div className="container max-w-6xl py-10">
                <h1 className="text-black text-xl text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end content image */}
      <div className="inset-0 flex flex-col justify-center items-center text-center pb-20">
        <div className="container max-w-6xl pt-7">
          <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-2xl uppercase text-center">Selengkapnya</button>
        </div>
      </div>
    </>
  );
};
