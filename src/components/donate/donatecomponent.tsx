
import { useState } from 'react';
import LogoComponent from '../logo';

const DonateComponent = () => {
  const [showModalBNB, setShowModalBNB] = useState(false);

  const copyBNB = async () => {
    await navigator.clipboard.writeText(
      process.env.Metamask_ID!
    );
    alert('BNB Address Copied');
  };

  return (
    <div className='flex min-h-screen items-center justify-center text-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-100'>
      <div className='w-full max-w-lg space-y-8 bg-white rounded-md shadow shadow-slate-300 py-10 px-10'>
        <LogoComponent></LogoComponent>
        <div>
          <h2 className='text-center text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r bg-clip-text from-green-600 to-green-200'>
            Support Us!
          </h2>
          <p className='text-gray-500 pt-5'>
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
            href='https://www.buymeacoffee.com/paanjoe'
            target={'_blank'}
            className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-600 to-cyan-400 group-hover:from-cyan-400 group-hover:to-violet-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-cyan-800'
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 hover:text-white text-violet-900'>
              Donate via BuyMeCoffee
            </span>
          </a>
          <button
            type='button'
            onClick={() => setShowModalBNB(true)}
            data-modal-toggle='defaultModal'
            className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-600 to-cyan-400 group-hover:from-cyan-400 group-hover:to-violet-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-cyan-800'
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 hover:text-white text-violet-900'>
              Donate via BNB & ETH Coin
            </span>
          </button>

        </div>
      </div>

      {/* BNB Modal */}
      {showModalBNB ? (
        <div
          id='BNBModal'
          className='flex items-baseline justify-center text-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'
        >
          <div className='relative p-4 w-full max-w-lg  h-full md:h-auto'>
            <div className='relative bg-white rounded-lg shadow '>
              <div className='flex justify-between items-center p-5 rounded-t border-b'>
                <h3 className='text-xl font-medium text-gray-900'>
                  Binance Coin (BNB)
                </h3>
                <button
                  onClick={() => setShowModalBNB(false)}
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  data-modal-toggle='BNBModal'
                >
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <div className='p-6 space-y-6'>
              <img
                  src={process.env.baseUrl + '/api/files/q5puijv412kcxpw/4g690a4nb258en5/ethqr_edqaWU4lYu.png'}
                  className='align-center'
                />
                <p className='text-base leading-relaxed text-gray-500 '>
                  👉 Only send Binance Coin (BNB) to this address. Make sure to
                  send this in Binance Smart Chain (BSC) network.
                </p>
                
                <span
                  onClick={copyBNB}
                  className='px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease'
                >
                 {process.env.Metamask_ID}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DonateComponent;
