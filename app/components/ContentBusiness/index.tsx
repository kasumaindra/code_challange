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
            PT. Kalisa Sehat Sejahtera is not just an ordinary business in general. With the products we create, you can achieve your dream of becoming successful and increase awareness of healthy and prosperous living. Make a change in
            your life starting now and invite the people around you to help improve their lives.
          </h1>
        </div>
      </div>

      <div className="inset-0 flex flex-col justify-center items-center text-center py-11">
        <div>
          <h1 className="text-black text-4xl font-bold uppercase">Build Your Own Business</h1>
          <hr className="border-b-2 border-black w-72 mt-5 mx-auto" />
        </div>
        <div className="container max-w-8xl py-10">
          <h1 className="text-black text-xl text-center">
            Working with flexible hours is one of the goals of Kalisa Sehat Sejahtera. Free yourself from the 9 to 5 routine - design your schedule and set your own working hours. Build your business to fit your lifestyle When flexibility
            is proven to have a huge positive impact on work-life balance, an opportunity like this could be just what you need.
          </h1>
        </div>
      </div>

      <div className="inset-0 flex flex-col justify-center items-center text-center pt-11 pb-3 px-11">
        <div className="flex justify-between flex-wrap px-56">
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center py-11 px-11">
              <Image src={business1} alt="business1" className="max-w-full max-h-full object-contain" />
              <div className="pt-11">
                <h1 className="text-black text-4xl font-bold uppercase">Set Your Working Hours</h1>
                <hr className="border-b-2 border-black w-72 mt-5 mx-auto" />
              </div>
              <div className="container max-w-6xl pt-7">
                <h1 className="text-black text-xl text-center">You have the freedom to be your own boss and work your own hours. Work on a part-time or full-time basis - it is your choice.</h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center py-11 px-11">
              <Image src={business2} alt="business2" className="max-w-full max-h-full object-contain" />
              <div className="pt-11">
                <h1 className="text-black text-4xl font-bold uppercase">Product Diversity</h1>
                <hr className="border-b-2 border-black w-72 mt-5 mx-auto" />
              </div>
              <div className="container max-w-6xl py-10">
                <h1 className="text-black text-xl text-center">
                  Kalisa Sehat Sejahtera offers various product packages to run your business. Whether you have an interest in beauty, skin care or anything else tailored to your needs. It is your choice.
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
                <h1 className="text-black text-4xl font-bold uppercase">Business Training</h1>
                <hr className="border-b-2 border-black w-72 mt-5 mx-auto" />
              </div>
              <div className="container max-w-6xl py-10">
                <h1 className="text-black text-xl text-center">
                  With supporting tools and expert training, you wll find everything here to build your business. With this training you will be guided through the material provided until your business breaks ground.
                </h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center py-11 px-11">
              <Image src={business4} alt="business4" className="max-w-full max-h-full object-contain" />
              <div className="pt-11">
                <h1 className="text-black text-4xl font-bold uppercase">Website Support</h1>
                <hr className="border-b-2 border-black w-72 mt-5 mx-auto" />
              </div>
              <div className="container max-w-6xl py-10">
                <h1 className="text-black text-xl text-center">Having the website support provided will make your business more professional and increase traffic for your sales.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inset-0 flex flex-col justify-center items-center text-center pb-20">
        <div className="container max-w-6xl pt-7">
          <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-2xl uppercase text-center">Let See More</button>
        </div>
      </div>
    </>
  );
};
