export default function Footer() {
  return (
    <div className='bg-gray-200'>
      <div className='container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row '>
        <p className='text-center text-sm text-gray-500'>
          All Rights Reserved © {new Date().getFullYear()} LocumStreet —{' '}
          <a
            href='https://paanjoe.com/'
            className='text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
          >
            paanjoe.com
          </a>
        </p>
      </div>
    </div>
  );
}
