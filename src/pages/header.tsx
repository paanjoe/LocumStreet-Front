import { useState } from 'react';
import ButtonLink from '@/components/links/ButtonLink';



export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className='border-1 w-full bg-white shadow'>
        <div className='mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w'>
          <div>
            <div className='flex items-center justify-between py-3 md:block md:py-5'>
              <a href='/' className='flex items-center'>
                <svg
                  className='flex h-8 w-8 items-center'
                  viewBox='0 0 74 74'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M52.1601 21.2916C52.1601 26.6269 50.8344 33.5854 48.7956 32.5289C47.251 37.5774 42.5543 41.249 37 41.249C30.607 41.249 25.3502 36.3849 24.7282 30.1558C22.7044 26.6136 20.0492 19.518 26.8745 13.9855C26.9963 13.9452 27.0717 13.6132 27.1833 13.1224C27.6046 11.2678 28.5412 7.14579 34.4436 7.93272C38.9964 8.53974 52.1603 10.8896 52.1601 21.2916ZM46.2933 24.6543C46.2933 24.6543 45.5969 26.692 46.2498 28.9639C46.2239 34.0503 42.0926 38.1657 37 38.1657C32.0091 38.1657 27.9413 34.213 27.7566 29.2672C27.9803 28.4194 27.9794 26.9833 27.9783 25.3885C27.9765 22.5102 27.9743 19.115 29.292 17.7292C38.5245 23.8781 46.2933 24.6543 46.2933 24.6543Z'
                    fill='url(#paint0_linear_105_2)'
                  />
                  <path
                    d='M20.0417 55.5C20.0417 53.8315 20.9254 52.3692 22.2503 51.5558C22.2012 51.3703 22.1539 51.1769 22.1084 50.9781C21.8961 50.0507 21.7034 48.9225 21.5621 47.7898C21.4312 46.7406 21.3404 45.6558 21.3228 44.6975C14.8153 47.2519 9.25 51.7038 9.25 56.3786V64.75H64.75V56.3786C64.75 51.9019 59.6463 47.6296 53.4988 45.0322L53.5 45.0746C53.5264 46.0154 53.4736 47.0938 53.373 48.1328C53.28 49.0941 53.1429 50.0538 52.9783 50.875H53.9583C54.5423 50.875 55.076 51.2049 55.3372 51.7272L56.8789 54.8106C56.986 55.0246 57.0417 55.2607 57.0417 55.5V58.5833C57.0417 59.4348 56.3515 60.125 55.5 60.125H52.4167V57.0417H53.9583V55.864L53.0056 53.9583H48.7444L47.7917 55.864V57.0417H49.3333V60.125H46.25C45.3985 60.125 44.7083 59.4348 44.7083 58.5833V55.5C44.7083 55.2607 44.764 55.0246 44.8711 54.8106L46.4128 51.7272C46.674 51.2049 47.2077 50.875 47.7917 50.875H49.8193C49.8527 50.7426 49.8868 50.5957 49.9209 50.4347C50.075 49.7078 50.2119 48.787 50.3041 47.8359C50.3962 46.8836 50.4398 45.9386 50.4179 45.1611C50.4069 44.7717 50.3803 44.4483 50.3419 44.1994C50.3083 43.9808 50.2744 43.88 50.2671 43.8584C50.2671 43.8583 50.2671 43.8586 50.2671 43.8584C50.2657 43.8541 50.2653 43.8529 50.2665 43.8552C50.2667 43.8555 50.2663 43.8549 50.2665 43.8552L50.272 43.8536C49.4482 43.598 48.6185 43.3745 47.7917 43.1861C47.0165 43.0096 46.2153 44.0766 45.8635 44.7449H39.5979C38.2255 44.7452 37.5272 44.745 36.8409 44.7449H36.817C36.1157 44.7447 35.4179 44.7446 34.0152 44.7449H27.75C27.707 44.6632 27.663 44.5756 27.6176 44.485C27.2914 43.8344 26.8887 43.0312 26.2083 43.1861C25.6149 43.3213 25.0202 43.4745 24.4271 43.6447C24.4098 43.8731 24.4013 44.1453 24.4033 44.4578C24.4087 45.3102 24.4903 46.3547 24.6218 47.4081C24.753 48.4595 24.9292 49.4832 25.1139 50.2901C25.1676 50.5243 25.2203 50.733 25.2708 50.9142C27.5397 51.2102 29.2917 53.1505 29.2917 55.5C29.2917 58.0544 27.2211 60.125 24.6667 60.125C22.1123 60.125 20.0417 58.0544 20.0417 55.5Z'
                    fill='url(#paint1_linear_105_2)'
                  />
                  <path
                    d='M26.2083 55.5C26.2083 56.3852 25.4967 57.0643 24.6667 57.0643C23.8366 57.0643 23.125 56.3852 23.125 55.5C23.125 54.6148 23.8366 53.9357 24.6667 53.9357C25.4967 53.9357 26.2083 54.6148 26.2083 55.5Z'
                    fill='url(#paint2_linear_105_2)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_105_2'
                      x1='37.3202'
                      y1='7.83405'
                      x2='37.3202'
                      y2='41.249'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#22D3EE' />
                      <stop offset='1' stopColor='#4F46E5' />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_105_2'
                      x1='37'
                      y1='43.1667'
                      x2='37'
                      y2='64.75'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#22D3EE' />
                      <stop offset='1' stopColor='#4F46E5' />
                    </linearGradient>
                    <linearGradient
                      id='paint2_linear_105_2'
                      x1='24.6667'
                      y1='53.9357'
                      x2='24.6667'
                      y2='57.0643'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#22D3EE' />
                      <stop offset='1' stopColor='#4F46E5' />
                    </linearGradient>
                  </defs>
                </svg>
                {'  '}
                &nbsp;
                <span className='self-center whitespace-nowrap  text-slate-700'>
                  <h3>LocumStreet</h3>
                </span>
              </a>
              <div className='md:hidden'>
                <button
                  className='rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='/about'>Read More</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='/job-search'>Find Job</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <a href='/register'>Sign Up</a>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <ButtonLink
                    className='border-0 bg-gradient-to-r from-red-600 to-pink-400 transition duration-300 ease-in-out hover:-translate-y-0 hover:scale-110 hover:to-pink-500'
                    href='/donate'
                  >
                    Donate 😘
                  </ButtonLink>
                </li>
                <li className='text-gray-600 hover:text-blue-600'>
                  <ButtonLink
                    className='border-0 bg-gradient-to-r from-violet-600 to-cyan-400 transition duration-300 ease-in-out hover:-translate-y-0 hover:scale-110 hover:to-cyan-500'
                    href='/login'
                  >
                    Sign In 🥳
                  </ButtonLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
