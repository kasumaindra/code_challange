import { Navbar } from '@/components/Navbar';
import React from 'react';
import { HeroAbout } from '../components/HeroAbout';
import { ContontAbout } from '../components/ContentAbout';
import { Footer } from '@/components/Footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function About() {
  return (
    <main>
      <Navbar />
      <HeroAbout />
      <ContontAbout />
      <Footer />
    </main>
  );
}
