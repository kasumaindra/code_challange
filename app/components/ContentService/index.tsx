import React from 'react';
import Image from 'next/image';
import product1 from '@/public/product1.png';
import product2 from '@/public/product2.png';
import product3 from '@/public/product3.png';
import product4 from '@/public/product4.png';
import product5 from '@/public/product5.png';
import product6 from '@/public/product6.png';

export const ContentService = () => {
  return (
    <>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11 px-4 md:px-11">
        <div>
          <h1 className="text-black text-4xl md:text-6xl font-bold uppercase">Our Products</h1>
          <hr className="border-b-2 border-black mt-5" />
        </div>
        <div className="container max-w-4xl md:max-w-6xl py-6 md:py-10">
          <h1 className="text-black text-base md:text-xl text-center">With the results of the research developed to date, products have been created with high quality standards and tested on a scientific basis.</h1>
        </div>
      </div>
      {/* content service */}
      <div className="inset-0 flex flex-col justify-center items-center text-center pt-11 pb-16 px-4 md:px-11">
        <div className="flex flex-wrap justify-center md:justify-between py-6 md:px-56">
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pt-4 px-4 md:px-11">
              <Image src={product1} alt="product1" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl pt-7">
                <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Let See More</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={product2} alt="product2" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Let See More</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={product3} alt="product3" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Let See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0 flex flex-col justify-center items-center text-center pt-11 pb-16 px-4 md:px-11">
        <div className="flex flex-wrap justify-center md:justify-between py-6 md:px-56">
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pt-4 px-4 md:px-11">
              <Image src={product4} alt="product4" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl pt-7">
                <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Let See More</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={product5} alt="product5" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Let See More</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={product6} alt="product6" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-full bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Let See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end content service */}
    </>
  );
};
