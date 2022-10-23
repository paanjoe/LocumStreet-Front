export default function JobComponent() {
  return (
    <div className='flex '>
      <ul className='w-full border-transparent bg-white pb-8 text-gray-900'>
        <a href='/job-details'>
          <li className='w-full px-6 py-2  transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow'>
            <div className='flex flex-row'>
              <div className='basis-5/6'>
                <p className='text-xl font-semibold'>Job Name</p>
                <p className='mb-2 pr-5 text-sm'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s...
                </p>
                <div className='space-x-2'>
                  <span className='spacing-5 inline-block whitespace-nowrap rounded-md bg-violet-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white'>
                    Full-Time
                  </span>
                  <span className='inline-block whitespace-nowrap rounded-md bg-cyan-500 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white'>
                    Dentist
                  </span>
                  <span className='inline-block whitespace-nowrap rounded-md bg-indigo-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white'>
                    Selangor
                  </span>
                  <span className='inline-block whitespace-nowrap rounded-md py-1 px-2.5 text-center align-baseline text-xs leading-none text-green-600'>
                    Posted: 19 Hours Ago
                  </span>
                </div>
              </div>
              <div className='flex basis-1/6 items-center justify-center border-l-2 border-slate-100'>
                <span className='inline-block whitespace-nowrap rounded-md bg-green-200 px-2.5 py-2.5 text-center align-baseline leading-none text-green-700'>
                  RM 1000
                </span>
              </div>
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
}
