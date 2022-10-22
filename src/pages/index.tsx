import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Footer from '@/pages/footer';
import Header from '@/pages/header';
import Parallax from '@/components/home/parallax';

export default function HomePage() {
  return (
    <Layout>
      test
      <Seo templateTitle='Home' />
      <main>
        <section>
          <Header></Header>
        </section>
        <section>
          <Parallax></Parallax>
        </section>
        <section>
          <Footer></Footer>
        </section>
      </main>
    </Layout>
  );
}
