import ArrowLink from '../links/ArrowLink';
import ButtonLink from '../links/ButtonLink';

export default function Parallax() {
  return (
    <section className='border-t border-gray-200 bg-white text-gray-700'>
      <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
        {/* <Vercel className='text-5xl' /> */}
        <h1 className='mt-4 bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text font-extrabold text-transparent sm:text-5xl md:text-7xl lg:text-9xl'>
          LocumStreet
        </h1>
        <p className='mt-2 text-gray-800 sm:text-xl md:text-3xl lg:text-3xl'>
          Enabling healthcare professional to find or offer locum work in
          Malaysia 🇲🇾
        </p>
        <p className='mt-2 text-sm text-gray-700'>
          <ArrowLink className='bg-clip-text' href='/about'>
            Read More
          </ArrowLink>
        </p>
        <br />
        <ButtonLink
          className='border-0 bg-gradient-to-r from-violet-600 to-cyan-400 transition duration-300 ease-in-out hover:-translate-y-0 hover:scale-110 hover:to-cyan-500'
          href='/job-search'
          variant='primary'
        >
          See Locum Jobs
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='ml-1 h-4 w-4'
            viewBox='0 0 24 24'
          >
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </ButtonLink>
      </div>
    </section>
  );
}
