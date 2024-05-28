import Image from 'next/image';
import React from 'react';
import contenthome1 from '@/public/contenthome1.png';
import contenthome2 from '@/public/contenhome2.png';

export const ContentHome = () => {
  return (
    <>
      <div className="flex justify-between mt-16 px-28">
        <div className="basis-1/2 flex flex-col justify-center pl-20">
          <h1 className="text-pink-500 text-4xl font-bold text-left italic uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
          <h1 className="text-xl text-left uppercase py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quasi exercitationem, quod dolorum necessitatibus iure nihil quibusdam, hic odio consequatur nesciunt earum nisi tempora vitae quas maiores consectetur. Optio,
            tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo veniam repellat exercitationem reiciendis quae, recusandae possimus dolorum. Delectus odio cumque dicta enim modi error obcaecati magni quod iste
            corporis.
          </h1>
        </div>
        <div className="basis-1/2">
          <Image src={contenthome1} alt="contenhome1" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex justify-between px-28">
        <div className="basis-1/2">
          <Image src={contenthome2} alt="contenhome2" className="w-full h-full object-cover" />
        </div>
        <div className="basis-1/2 flex flex-col justify-center pl-20">
          <h1 className="text-pink-500 text-4xl font-bold text-left italic uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
          <h1 className="text-xl text-left uppercase py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quasi exercitationem, quod dolorum necessitatibus iure nihil quibusdam, hic odio consequatur nesciunt earum nisi tempora vitae quas maiores consectetur. Optio,
            tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo veniam repellat exercitationem reiciendis quae, recusandae possimus dolorum. Delectus odio cumque dicta enim modi error obcaecati magni quod iste
            corporis.
          </h1>
        </div>
      </div>
    </>
  );
};
