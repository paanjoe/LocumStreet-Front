import Inquiry from './inquiry';
import Maps from './maps';

export default function Contact() {
  const src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127455.27217564783!2d101.53611339999999!3d3.35571445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4252cdeb045f%3A0xc2774ff883026e46!2sRawang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1665765475410!5m2!1sen!2smy';
  return (
    <section className='body-font relative text-gray-700'>
      <Maps _src={src} />
      <Inquiry />
    </section>
  );
}
