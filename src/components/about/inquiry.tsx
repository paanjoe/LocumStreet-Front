export default function Inquiry() {
  return (
    <div className='container mx-auto flex px-5 py-24'>
      <div className='relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3'>
        <h2 className='title-font mb-1 text-lg font-medium text-gray-900'>
          Do you have something to tell us?
        </h2>
        <p className='mb-5 leading-relaxed text-gray-600'>
          Please, send us a message about anything! Questions, suggestions, or
          critic, we accept everything to improve LocumStreet 🤩 🥳
        </p>
        <input
          className='mb-4 rounded border border-gray-400 bg-white px-4 py-2 text-base focus:border-indigo-500 focus:outline-none'
          placeholder='Email'
          type='email'
        />
        <textarea
          className='mb-4 h-32 resize-none rounded border border-gray-400 bg-white px-4 py-2 text-base focus:border-indigo-500 focus:outline-none'
          placeholder='Message'
        ></textarea>
        <button className='rounded border-0 bg-gradient-to-r from-violet-600 to-cyan-400 py-2 px-6 text-lg text-white transition duration-300 ease-in-out hover:-translate-y-0 hover:scale-95 hover:bg-indigo-600 hover:to-cyan-500 focus:outline-none'>
          Send Message 🚀
        </button>
        <p className='mt-3 text-xs text-gray-500'>
          Please note, we might take some time to response the message. Worry
          not, we will 100% read your message and try our best to respond.
        </p>
      </div>
    </div>
  );
}
