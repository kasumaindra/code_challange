import Image from 'next/image';
import React from 'react';
import mission1 from '@/public/mission1.png';
import mission2 from '@/public/mission2.png';
import mission3 from '@/public/mission3.png';
import mission4 from '@/public/mission4.png';

export const ContontAbout = () => {
  return (
    <>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11 px-4 md:px-11">
        <div>
          <h1 className="text-black text-4xl md:text-6xl font-bold uppercase">Our Vision</h1>
          <hr className="border-b-2 border-black mt-5" />
        </div>
        <div className="container max-w-4xl md:max-w-6xl py-6 md:py-10">
          <h1 className="text-black text-base md:text-xl text-center">Achieving a bright future with a healthier and more prosperous life and creating quality products that meet current market demand that have benefits for others.</h1>
        </div>
      </div>
      {/* content image */}
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11">
        <div>
          <h1 className="text-black text-4xl md:text-6xl font-bold uppercase">Our Mission</h1>
          <hr className="border-b-2 border-black mt-5" />
        </div>
        <div className="flex flex-wrap justify-center md:justify-between py-6 md:px-56">
          <div className="basis-full md:basis-1/2 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pt-7 px-4 md:px-11">
              <Image src={mission1} alt="mission1" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl pt-7">
                <h1 className="text-black text-base md:text-xl text-center">
                  1. Introduce and educate about what digital era business is and how to master the digital market with material that is easy to understand and keeps up to date with updates.
                </h1>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/2 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={mission2} alt="mission2" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <h1 className="text-black text-base md:text-xl text-center">2. Create quality products with a lot of market demand so that they are easy to sell offline and online at economical prices, profits increase drastically.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between py-6 md:px-56">
          <div className="basis-full md:basis-1/2 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center px-4 md:px-11">
              <Image src={mission3} alt="mission3" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <h1 className="text-black text-base md:text-xl text-center">3. Achieve success together by living a healthier and more prosperous life and providing benefits to others.</h1>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/2 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-11 pt-7 px-4 md:px-11">
              <Image src={mission4} alt="mission4" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <h1 className="text-black text-base md:text-xl text-center">4. Creating an honest and trustworthy business in order to increase public trust.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end content image */}
      {/*content */}
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11 px-4 md:px-11">
        <div>
          <h1 className="text-black text-4xl md:text-6xl font-bold uppercase">OUR PRINCIPLES</h1>
          <hr className="border-b-2 border-black mt-5" />
        </div>
        <div className="container max-w-4xl md:max-w-6xl py-6 md:py-10">
          <h1 className="text-black text-base md:text-xl text-center">
            Creating a healthy business and increasing demand for products through our distributors spread across all major cities in Indonesia. We are committed to improving the economy of our customers. A network of distributors brings
            our products to the masses and makes them easily accessible to our customers.
          </h1>
        </div>
      </div>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11 px-4 md:px-11">
        <div>
          <h1 className="text-black text-4xl md:text-6xl font-bold uppercase">Our Team</h1>
          <hr className="border-b-2 border-black mt-5" />
        </div>
        <div className="container max-w-4xl md:max-w-6xl py-6 md:py-10">
          <h1 className="text-black text-base md:text-xl text-center">Our team comes from various business backgrounds and experiences with a young, burning spirit, combining brilliant ideas to create an extraordinary business system.</h1>
        </div>
      </div>
    </>
  );
};
