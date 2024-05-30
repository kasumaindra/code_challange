import Image from 'next/image';
import React from 'react';
import contenthome1 from '@/public/contenthome1.png';
import contenthome2 from '@/public/contenhome2.png';
import team1 from '@/public/Agustina.jpg';
import team2 from '@/public/HRD.jpg';
import team3 from '@/public/Iqbal.jpg';
import team4 from '@/public/Teacher1.jpg';
import team5 from '@/public/Teacher4.jpg';
import team6 from '@/public/Teacher9.jpg';
import testi1 from '@/public/Teacher7.jpg';
import testi2 from '@/public/Teacher8.jpg';
import testi3 from '@/public/Teacher10.jpg';

// TODO:
// 1. Use mobile navigation (maybe use side drawer and hide the desktop navbar on mobile view)
// 2. Content home's padding x is too big on mobile view
// 3. Contact section on footer needs to use flex-col instead of row
// 4. Link section should use flex-col on mobile OR horizontally scrollable
// 5. Add teams page & section on home
// 6. Give proper product description
// 7. Test the performance on pagespeed insight website

export const ContentHome = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mt-10 px-5 md:px-28">
        <div className="basis-full md:basis-1/2 flex flex-col justify-center pr-5 md:px-20">
          <h1 className="text-pink-500 text-2xl md:text-4xl font-bold text-left italic uppercase">Achieve the Dream of a Healthy and Prosperous Life</h1>
          <p className="text-base md:text-xl text-left uppercase py-5">
            What's the secret to staying young? Live each day with optimism and confidence to do what you love for the rest of your life. Through our innovative science, we uncover new ways to help you look and feel young. We bring these
            discoveries to life through fine personal care products and supplements.
          </p>
        </div>
        <div className="basis-full md:basis-1/2 mt-5 md:mt-0">
          <Image src={contenthome1} alt="contenthome1" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-0 px-5 md:px-28">
        <div className="basis-full md:basis-1/2 mt-5 md:mt-0">
          <Image src={contenthome2} alt="contenthome2" className="w-full h-full object-cover" />
        </div>
        <div className="basis-full md:basis-1/2 flex flex-col justify-center pl-5 md:pl-20 mt-5 md:mt-0">
          <h1 className="text-pink-500 text-2xl md:text-4xl font-bold text-left italic uppercase">Mix it with the Perfect Combination of Lab Research Results</h1>
          <p className="text-base md:text-xl text-left uppercase py-5">
            Harnessing the best of nature to provide the best results is our personal mission. We combine beneficial ingredients with innovative science and technology. The result? World class products that provide real benefits.
          </p>
        </div>
      </div>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-16 px-4 md:px-11">
        <div>
          <h1 className="text-black text-4xl md:text-6xl font-bold uppercase">Our Team</h1>
          <hr className="border-b-2 border-black mt-5" />
        </div>
      </div>
      {/* team */}
      <div className="inset-0 flex flex-col justify-center items-center text-center pt-11 pb-0 px-4 md:px-11">
        <div className="flex flex-wrap justify-center md:justify-between py-6 md:px-56">
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pt-4 px-4 md:px-11">
              <Image src={team1} alt="team1" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl pt-7">
                <button className="rounded-sm bg-pink-500 py-3 px-8 text-white text-base md:text-2xl text-center">Project Lead</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={team2} alt="team2" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-sm bg-pink-500 py-3 px-8 text-white text-base md:text-2xl text-center">Manager product</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={team3} alt="team3" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-sm bg-pink-500 py-3 px-8 text-white text-base md:text-2xl text-center">Product Design</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0 flex flex-col justify-center items-center text-center pt-0 pb-16 px-0 md:px-11">
        <div className="flex flex-wrap justify-center md:justify-between py-0 md:px-56">
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pt-4 px-4 md:px-11">
              <Image src={team4} alt="team4" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl pt-7">
                <button className="rounded-sm bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Manager Staff</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={team5} alt="team5" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-sm bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Product Staff</button>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/3 px-5 py-5 md:py-0">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-4 md:px-11">
              <Image src={team6} alt="team6" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-4xl md:max-w-6xl py-10">
                <button className="rounded-sm bg-pink-500 py-3 px-8 text-white text-base md:text-2xl uppercase text-center">Product Tester</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end team */}
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11 px-4 md:px-11">
        <div>
          <h1 className="text-black text-4xl md:text-6xl font-bold uppercase">Testimonial</h1>
          <hr className="border-b-2 border-black mt-5" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-11 mt-10 px-5 md:px-28">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mr-4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image className="h-48 w-full object-cover md:w-48" src={testi1} alt="Person" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Customer Testimonial</div>
              <p className="mt-2 text-black">"This product has completely transformed the way we do business. The ease of use and excellent customer service have made all the difference. Highly recommended!"</p>
              <div className="mt-4">
                <p className="text-gray-800 font-semibold">Jane Smith</p>
                <p className="text-gray-500">CTO, XYZ Corporation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mr-4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image className="h-48 w-full object-cover md:w-48" src={testi2} alt="Person" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Customer Testimonial</div>
              <p className="mt-2 text-black">"I've been using this service for over a year now and I couldn't be happier. The team is always responsive and the product delivers as promised. Exceptional experience!"</p>
              <div className="mt-4">
                <p className="text-gray-800 font-semibold">Michael Johnson</p>
                <p className="text-gray-500">Founder, Startup Inc.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image className="h-48 w-full object-cover md:w-48" src={testi3} alt="Person" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Customer Testimonial</div>
              <p className="mt-2 text-black">"Outstanding service and fantastic results. The team went above and beyond to ensure our needs were met, and we saw immediate improvements in our workflow. Five stars!"</p>
              <div className="mt-4">
                <p className="text-gray-800 font-semibold">Emily Davis</p>
                <p className="text-gray-500">Manager, Creative Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
