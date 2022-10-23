export default function LoginForm() {
  return (
    <div className='flex min-h-screen items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-100'>
      <div className='w-full max-w-lg space-y-8 bg-white rounded-md shadow shadow-slate-300 py-10 px-10'>
        <div className='text-md text-center'>
          <a
            href='/'
            className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-violet-600 to-cyan-400 group-hover:from-cyan-400 group-hover:to-violet-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-cyan-800'
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 hover:text-white text-violet-900'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='inline-flex mr-2 h-6 stroke-violet-800'
              >
                <path
                  d='M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z'
                  fill='#333333'
                />
                <path
                  d='M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066'
                  stroke='#333333'
                  stroke-width='2'
                />
              </svg>
              Back to Home
            </span>
          </a>
        </div>
        <div>
          <h2 className='text-left text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r bg-clip-text from-violet-600 to-cyan-400'>
            Sign In
          </h2>
          <p className='text-gray-500 text-lef pt-2'>
            Welcome Back Explorer! 👋
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900 md:text-sm sm:text-sm xs:text-xs
                '
              >
                Remember me
              </label>
            </div>

            <div className='md:text-sm sm:text-sm xs:text-xs'>
              <a
                href='/forgot'
                className='font-medium  text-violet-600 hover:text-violet-500'
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='border-0 bg-gradient-to-r from-violet-600 to-cyan-400 transition duration-300 ease-in-out hover:-translate-y-0 hover:scale-90 hover:to-cyan-500 group relative flex w-full justify-center rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-violet-500 group-hover:text-violet-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                    clip-rule='evenodd'
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
        <div className='inline-flex justify-center items-center w-full'>
          <hr className='w-full h-px bg-gray-300 border-0 ' />
          <span className='absolute left-1/2 px-3 text-gray-500 bg-white -translate-x-1/2 '>
            Or Continue With
          </span>
        </div>

        <div
          className='inline-flex justify-center items-center w-full rounded-md shadow-sm'
          role='group'
        >
          <button
            type='button'
            className='transition-all ease-in duration-200 inline-flex w-full justify-center text-center items-center py-2 px-4 text-sm font-medium text-violet-600 bg-transparent rounded-l-lg border border-violet-600 hover:bg-violet-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-violet-600 focus:text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='32px'
              height='32px'
              className='inline'
            >
              <path
                fill='#FFC107'
                d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
              />
              <path
                fill='#FF3D00'
                d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
              />
              <path
                fill='#4CAF50'
                d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
              />
              <path
                fill='#1976D2'
                d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
              />
            </svg>
            <div className='sm: hidden md:inline pl-3 text-xs'>
              Login with Google
            </div>
          </button>
          <button
            type='button'
            className='border-l-0 transition-all ease-in duration-200 inline-flex w-full text-center justify-center items-center py-2 px-4 text-sm font-medium text-violet-600 bg-transparent rounded-r-md border border-violet-600 hover:bg-violet-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-violet-600 focus:bg-violet-700 focus:text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='32px'
              height='32px'
            >
              <linearGradient
                id='Ld6sqrtcxMyckEl6xeDdMa'
                x1='9.993'
                x2='40.615'
                y1='9.993'
                y2='40.615'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stop-color='#2aa4f4' />
                <stop offset='1' stop-color='#007ad9' />
              </linearGradient>
              <path
                fill='url(#Ld6sqrtcxMyckEl6xeDdMa)'
                d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
              />
              <path
                fill='#fff'
                d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'
              />
            </svg>
            <div className='sm:hidden md:inline pl-3 text-xs'>
              Login with Facebook
            </div>
          </button>
        </div>

        <div className='text-center justify-center text-violet-600'>
          Not Registered yet?{' '}
          <a href='/register' className='font-bold text-violet-600 underline'>
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
