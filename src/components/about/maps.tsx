export default function Maps(_props: any) {
  return (
    <div className='absolute inset-0 bg-gray-300'>
      <iframe
        src={_props._src}
        width='100%'
        height='100%'
        className='border:0;'
        loading='lazy'
        title='test'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
