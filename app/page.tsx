import { Hero } from './components/Hero';
import { Navbar } from '@/components/Navbar';
import { ContentLink } from './components/ContentLink';
import { ContentHome } from './components/ContentHome';
import { Footer } from '@/components/Footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContentLink />
      <ContentHome />
      <Footer />
    </main>
  );
}
