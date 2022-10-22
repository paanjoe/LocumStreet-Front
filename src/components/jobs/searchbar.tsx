export default function SearchBar() {
  return (
    <form>
      <div className='mb-4'>
        <input
          className='focus:shadow-outline w-full appearance-none rounded border border-gray-50  py-2 px-3 leading-tight text-gray-700 shadow transition-all duration-300 ease-in-out focus:border-cyan-200 focus:outline-none focus:ring-cyan-200'
          id='username'
          type='text'
          placeholder='Search'
        ></input>
      </div>
    </form>
  );
}
