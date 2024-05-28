import Image from 'next/image';
import { Hero } from './components/Hero';
import { Navbar } from '@/components/Navbar';
import { ContentLink } from './components/ContentLink';
import { ContentHome } from './components/ContentHome';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContentLink />
      <ContentHome />
    </main>
  );
}
