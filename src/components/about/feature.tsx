import BoxFeature from './boxFeature';

export default function Feature() {
  const title_1 = 'Easy Access';
  const desc_1 =
    'With our platform, you now have the easy access to view available locum job available in your area! With just few steps, you now can get a job much more faster and secured 😋.';

  const title_2 = 'Connect';
  const desc_2 =
    'We help medical professional to connect between supply and demand of the locum job in Malaysia!';

  const title_3 = 'Real-Time Request';
  const desc_3 =
    'LocumStreet allow our user to make a real-time job request or offer via our applications in just few steps!';

  return (
    <section className='body-font border-t border-gray-200 text-gray-700'>
      <div className='container mx-auto px-5 py-24'>
        <div className='mb-20 flex w-full flex-col text-center'>
          <h1 className='text-bold bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text pb-5 text-transparent sm:text-6xl md:text-7xl lg:text-8xl'>
            Amazing Feature
          </h1>
        </div>
        <div className='-m-4 flex flex-wrap'>
          <BoxFeature _title={title_1} _description={desc_1} />
          <BoxFeature _title={title_2} _description={desc_2} />
          <BoxFeature _title={title_3} _description={desc_3} />
        </div>
      </div>
    </section>
  );
}
