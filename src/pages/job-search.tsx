import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Footer from '@/pages/footer';
import Header from '@/pages/header';

import Filter from '@/components/jobs/filter';
import JobList from '@/components/jobs/joblist';

export default function JobSearch() {
  return (
    <Layout>
      <Seo templateTitle='Find Job' />
      <Header></Header>
      <div className='flex h-screen'>
        <Filter />
        <JobList />
      </div>
      <Footer></Footer>
    </Layout>
  );
}
