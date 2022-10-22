export default function Details() {
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          Job Name
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
          Date Posted: 01-Jan-2022
        </p>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>
              Job Description
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <p>
                The Graph protocol started as IPFS based technology using IPLD
                subgraphs. This bounty is for an implementation of an adapter
                store that can be integrated with Swarm technology and have more
                than one datastore protocol for subgraphs in The Graph
                decentralized network.
              </p>
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Job Type</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              Full-Time
            </dd>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Job Field</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              Dentist
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Salary</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <div className='space-x-2'>
                <span className='text-md inline-block whitespace-nowrap bg-green-100 py-1 px-2.5 text-center align-baseline leading-none text-green-500'>
                  120,000 per day / $10 per hour
                </span>
                <span className='text-md inline-block whitespace-nowrap bg-cyan-100 py-1 px-2.5 text-center align-baseline leading-none text-cyan-500'>
                  40% Profit Sharing
                </span>
              </div>
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Location</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <p>
                B1-16-16, Danau Ria, Persiaran Bandar Gamuda Gardens, Gamuda
                Gardens, 48050 Rawang, Selangor.
              </p>
              <br />
              <a href='#' target='_blank'>
                <span className='text-md inline-block whitespace-nowrap bg-pink-100 py-1 px-2.5 text-center align-baseline leading-none text-pink-500'>
                  Waze / Google Location
                </span>
              </a>
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Job Date</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              From:&nbsp;
              <span className='text-md inline-block whitespace-nowrap bg-indigo-100 py-1 px-2.5 text-center align-baseline leading-none text-indigo-500'>
                01-Jan-2022
              </span>
              &nbsp; To: &nbsp;
              <span className='text-md inline-block whitespace-nowrap bg-indigo-100 py-1 px-2.5 text-center align-baseline leading-none text-indigo-500'>
                01-Jan-2022
              </span>
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Working Hour</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              From:&nbsp;
              <span className='text-md inline-block whitespace-nowrap bg-indigo-100 py-1 px-2.5 text-center align-baseline leading-none text-indigo-500'>
                10:00 AM
              </span>
              &nbsp; To: &nbsp;
              <span className='text-md inline-block whitespace-nowrap bg-indigo-100 py-1 px-2.5 text-center align-baseline leading-none text-indigo-500'>
                09:00 PM
              </span>
            </dd>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Contact</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              Mobile:{' '}
              <a href='tel:+60124940907'>
                <span className='text-md inline-block whitespace-nowrap bg-indigo-100 py-1 px-2.5 text-center align-baseline leading-none text-indigo-500'>
                  +60124940907
                </span>
              </a>
              <br />
              <br />
              Email:{' '}
              <a href='mailto:farhan.gunz@gmail.com'>
                <span className='text-md inline-block whitespace-nowrap bg-indigo-100 py-1 px-2.5 text-center align-baseline leading-none text-indigo-500'>
                  farhan.gunz@gmail.com
                </span>
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
