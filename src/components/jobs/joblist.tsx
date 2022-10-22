import JobComponent from './jobcomponent';

export default function JobList() {
  return (
    <main className='ml-64 h-screen flex-1 overflow-y-scroll'>
      <div className='h-screen bg-white p-10'>
        <h2 className='mb-3'>Job List</h2>
        <p className='mb-2 text-slate-500'>Results: xx</p>
        <hr className='mb-5' />
        <JobComponent />
      </div>
    </main>
  );
}
