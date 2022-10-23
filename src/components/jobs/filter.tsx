import JobField from './jobfield';
import JobType from './jobtype';
import Province from './province';
import SearchBar from './searchbar';

export default function Filter() {
  return (
    <aside className='absolute left-0  h-screen w-64 bg-slate-100 p-10'>
      <SearchBar />
      <hr />
      <br />
      <JobType />
      <br />
      <hr />
      <br />
      <JobField />
      <br />
      <hr />
      <br />
      <Province />
    </aside>
  );
}
