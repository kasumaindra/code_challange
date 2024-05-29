import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="bg-gray-600 p-10 w-screen flex justify-between">
      <div className="basis-1/2 flex flex-col justify-start pl-20">
        <Image src={logo} alt="logo" width={300} height={200} />
        <h1 className="text-white font-semibold text-xl text-left py-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quasi exercitationem, quod dolorum necessitatibus iure nihil quibusdam, hic odio consequatur nesciunt earum nisi tempora vitae quas maiores consectetur. Optio,
          tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo veniam repellat exercitationem reiciendis quae, recusandae possimus dolorum. Delectus odio cumque dicta enim modi error obcaecati magni quod iste
          corporis.
        </h1>
        <h1 className="text-white font-semibold text-xl text-left py-8">Copyright @Kasumaindra</h1>
      </div>
      <div className="flex flex-col justify-start items-end pr-20">
        <ul className="flex flex-row text-white text-4xl py-5">
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="pl-5">
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li className="pl-5">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="pl-5">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </ul>
        <div className="text-xl text-white">
          <div>About Us</div>
          <div>About Us</div>
          <div>About Us</div>
        </div>
        <div className="flex flex-row pt-10">
          <FontAwesomeIcon icon={faPhone} className="text-white text-2xl py-5" />
          <h1 className="py-5 pl-3 text-xl text-white">0823-4434-3456</h1>
        </div>
        <div className="text-xl text-white">
          <div>About Us</div>
          <div>About Us</div>
          <div>About Us</div>
        </div>
      </div>
    </div>
  );
};
