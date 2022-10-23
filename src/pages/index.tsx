import * as React from 'react';

import Seo from '@/components/Seo';

import Footer from '@/pages/footer';
import Header from '@/pages/header';
import Parallax from '@/components/home/parallax';

export default function HomePage() {
  return (
    <div>
      <Seo templateTitle='Home' />
      <Header></Header>
      <Parallax></Parallax>
      <Footer></Footer>
    </div>
  );
}
