import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="bg-gray-600 p-10 w-screen flex flex-col md:flex-row justify-between">
      <div className="md:basis-1/2 flex flex-col justify-start md:pl-20 mb-10 md:mb-0">
        <Image src={logo} alt="logo" width={300} height={200} className="mx-auto md:mx-0" />
        <h1 className="text-white font-semibold text-base md:text-xl text-center md:text-left py-4 md:py-8">
          © PT. Kalisa Sehat dan Sejahtera. No reproduction in whole or in part without written permission. All Rights Reserved. All trademarks and clothing trade marks exhibited on this site, unless otherwise stated, are the property of
          PT. Kalisa Healthy and Prosperous.
        </h1>
        <h1 className="text-white font-semibold text-base md:text-xl text-center md:text-left py-4 md:py-8">Copyright 2024 | @Kasumaindra</h1>
      </div>
      <div className="flex flex-col justify-start items-center md:items-end md:pr-20">
        <ul className="flex flex-row text-white text-2xl md:text-4xl py-5">
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
        <div className="text-base md:text-xl text-white text-center md:text-right mb-5 md:mb-10">
          <div>About Us</div>
          <div>Our Services</div>
          <div>Business Opportunity</div>
        </div>
        <div className="flex flex-row items-center justify-center md:justify-end pt-5">
          <FontAwesomeIcon icon={faPhone} className="text-white text-2xl md:text-2xl py-2 md:py-5" />
          <h1 className="pl-3 text-base md:text-xl text-white">0823-4434-3456</h1>
        </div>
        <div className="text-base md:text-xl text-white text-center md:text-right pt-5">
          <div>Jl. Raya Kalipucang No.232, Kalipucang,</div>
          <div>Kec. Kalipucang, Kab. Pangandaran,</div>
          <div>Jawa Barat 46397</div>
        </div>
      </div>
    </div>
  );
};
