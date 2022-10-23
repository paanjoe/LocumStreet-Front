import RegisterForm from '@/components/register/registerform';
import RegisterSuccess from '@/components/register/registersuccess';
import Seo from '@/components/Seo';
import Footer from './footer';
import Header from './header';

export default function Register() {
  return (
    <div>
      <Seo templateTitle='Register'></Seo>
      <Header></Header>
      <RegisterForm></RegisterForm>
      <RegisterSuccess></RegisterSuccess>
      <Footer></Footer>
    </div>
  );
}
