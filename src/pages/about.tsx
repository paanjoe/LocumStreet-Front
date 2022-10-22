/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import Contact from '@/components/about/contact';
import Feature from '@/components/about/feature';
import Top from '@/components/about/top';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import Footer from '@/pages/footer';
import Header from '@/pages/header';

export default function About() {
  return (
    <div>
      <Seo templateTitle='About' />
      <Header></Header>
      <Top></Top>
      <Feature></Feature>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
