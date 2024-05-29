import Navbar from '@/components/Navbar';
import React from 'react';
import { HeroBusiness } from '../components/HeroBusiness';
import { ContenBusiness } from '../components/ContentBusiness';
import { Footer } from '@/components/Footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const Business = () => {
  return (
    <main>
      <Navbar />
      <HeroBusiness />
      <ContenBusiness />
      <Footer />
    </main>
  );
};

export default Business;
