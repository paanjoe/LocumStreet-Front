import DonateComponent from '@/components/donate/donatecomponent';
import Seo from '@/components/Seo';
import Footer from './footer';
import Header from './header';

export default function Donate() {
  return (
    <div>
      <Seo templateTitle='Donate'></Seo>
      <Header></Header>
      <DonateComponent></DonateComponent>
      <Footer></Footer>
    </div>
  );
}
