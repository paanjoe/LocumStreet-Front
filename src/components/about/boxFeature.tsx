export default function BoxFeature(_props: any) {
  return (
    <div className='p-4 md:w-1/3'>
      <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
        <div className='mb-3 flex items-center'>
          <div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 text-white'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='h-5 w-5'
              viewBox='0 0 24 24'
            >
              <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
            </svg>
          </div>
          <h2 className='title-font text-lg font-medium text-gray-900'>
            {_props._title}
          </h2>
        </div>
        <div className='flex-grow'>
          <p className='text-base leading-relaxed'>{_props._description}</p>
        </div>
      </div>
    </div>
  );
}
