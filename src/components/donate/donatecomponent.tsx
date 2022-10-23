import LogoComponent from '../logo';

export default function DonateComponent() {
  return (
    <div className='flex min-h-screen items-center justify-center text-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-100'>
      <div className='w-full max-w-lg space-y-8 bg-white rounded-md shadow shadow-slate-300 py-10 px-10'>
        <LogoComponent></LogoComponent>
        <div>
          <h2 className='text-center text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r bg-clip-text from-green-600 to-green-200'>
            Support Us!
          </h2>
          <p className='text-gray-500 text-lef pt-2'>
            We are a nonprofit movement, we are self-initiated, we are driven by
            the community. It is a platform to help professional healthcare to
            find locum job.
            <br />
            <br />
            Please consider helping us so we can continue to run this website &
            help the professional healthcare in Malaysia 🇲🇾
          </p>
        </div>
        <div className='text-md text-center'>
          <a
            href='#'
            className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-600 to-cyan-400 group-hover:from-cyan-400 group-hover:to-violet-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-cyan-800'
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 hover:text-white text-violet-900'>
              Donate via FPX
            </span>
          </a>
          <a
            href='#'
            className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-600 to-cyan-400 group-hover:from-cyan-400 group-hover:to-violet-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-cyan-800'
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 hover:text-white text-violet-900'>
              Donate via BNB Coin
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
