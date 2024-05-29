import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContentService } from '../components/ContentService';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const Services = () => {
  return (
    <main>
      <Navbar />
      <ContentService />
      <Footer />
    </main>
  );
};

export default Services;
