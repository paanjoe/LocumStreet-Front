export default function JobField() {
  return (
    <div className='form-check'>
      <input
        className='form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none'
        type='checkbox'
        value=''
        id='flexCheckChecked'
        checked
      ></input>
      <label
        className='form-check-label inline-block text-gray-800'
        htmlFor='flexCheckChecked'
      >
        Dentist
      </label>
    </div>
  );
}
