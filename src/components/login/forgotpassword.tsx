export default function ForgotPasswordComponent() {
  return (
    <div className='flex min-h-screen items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-100'>
      <div className='w-full max-w-lg space-y-8 bg-white rounded-md shadow shadow-slate-300 py-10 px-10'>
        <div className='text-md text-center'>
          <a
            href='/login'
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
              Back to Login
            </span>
          </a>
        </div>
        <div>
          <h2 className='text-left text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r bg-clip-text from-violet-600 to-cyan-400'>
            Forgot Password
          </h2>
          <p className='text-gray-500 text-lef pt-2'>
            Don't worry, we will help you to recover your account! 🤩
          </p>
        </div>
        <div>
          <form>
            <div className='relative z-0 mb-6 w-full group'>
              <input
                required
                type='email'
                name='floating_email'
                id='floating_email'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer'
                placeholder=' '
              />
              <label
                htmlFor='floating_email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Email address
              </label>
            </div>
            <button
              type='submit'
              className='border-0 bg-gradient-to-r from-violet-600 to-cyan-400 transition duration-300 ease-in-out hover:-translate-y-0 hover:scale-90 hover:to-cyan-500 group relative flex w-full justify-center rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
