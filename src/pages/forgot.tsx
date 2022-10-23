import ForgotPasswordComponent from '@/components/login/forgotpassword';
import ForgotSuccess from '@/components/login/forgotsuccess';
import Seo from '@/components/Seo';
import Footer from './footer';
import Header from './header';

export default function Forgot() {
  return (
    <div>
      <Seo templateTitle='Forgot Password'></Seo>
      <Header></Header>
      <ForgotPasswordComponent></ForgotPasswordComponent>
      <ForgotSuccess></ForgotSuccess>
      <Footer></Footer>
    </div>
  );
}
