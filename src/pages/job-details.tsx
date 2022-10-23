import Breadcrumb from '@/components/jobs/breadcrumb';
import Details from '@/components/jobs/details';
import Seo from '@/components/Seo';

import Footer from '@/pages/footer';
import Header from '@/pages/header';

export default function JobDetails() {
  return (
    <div>
      <Seo templateTitle='Job Details'></Seo>
      <Header></Header>
      <div className='bg-slate-100'>
        <div className='bg-white layout flex min-h-screen flex-col p-10'>
          <Breadcrumb />
          <br />
          <h3 className='mb-5'>View Job Details</h3>
          <Details />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
