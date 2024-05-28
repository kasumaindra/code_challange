import Image from 'next/image';
import React from 'react';
import mission1 from '@/public/mission1.png';
import mission2 from '@/public/mission2.png';
import mission3 from '@/public/mission3.png';
import mission4 from '@/public/mission4.png';

export const ContontAbout = () => {
  return (
    <>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11">
        <div>
          <h1 className="text-black text-6xl font-bold uppercase">About Us</h1>
          <hr className="border-b-2 border-black w-72 mt-5" />
        </div>
        <div className="container max-w-6xl py-10">
          <h1 className="text-black text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
          </h1>
        </div>
      </div>
      {/* content image */}
      <div className="inset-0 flex flex-col justify-center items-center text-center pt-11 pb-16 px-11">
        <div>
          <h1 className="text-black text-6xl font-bold uppercase">About Us</h1>
          <hr className="border-b-2 border-black w-72 mt-5" />
        </div>
        <div className="flex justify-between flex-wrap px-56">
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center pt-7 px-11">
              <Image src={mission1} alt="mission1" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-6xl pt-7">
                <h1 className="text-black text-xl text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
                </h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center pb-8 pt-1 px-11">
              <Image src={mission2} alt="mission2" className="max-w-full max-h-full object-contain" />
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
            <div className="flex flex-col justify-center items-center text-center px-11">
              <Image src={mission3} alt="mission3" className="max-w-full max-h-full object-contain" />
              <div className="container max-w-6xl py-10">
                <h1 className="text-black text-xl text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
                </h1>
              </div>
            </div>
          </div>
          <div className="basis-1/2 px-5">
            <div className="flex flex-col justify-center items-center text-center pb-11 pt-7 px-11">
              <Image src={mission4} alt="mission4" className="max-w-full max-h-full object-contain" />
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
      {/*content */}
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11">
        <div>
          <h1 className="text-black text-6xl font-bold uppercase">About Us</h1>
          <hr className="border-b-2 border-black w-72 mt-5" />
        </div>
        <div className="container max-w-6xl py-10">
          <h1 className="text-black text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
          </h1>
        </div>
      </div>
      <div className="inset-0 flex flex-col justify-center items-center text-center py-11">
        <div>
          <h1 className="text-black text-6xl font-bold uppercase">About Us</h1>
          <hr className="border-b-2 border-black w-72 mt-5" />
        </div>
        <div className="container max-w-6xl py-10">
          <h1 className="text-black text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste officiis tempore vel ipsam, saepe ex aperiam pariatur, similique dolor obcaecati adipisci cupiditate, ab corrupti odit quas nam magni at.
          </h1>
        </div>
      </div>
    </>
  );
};
