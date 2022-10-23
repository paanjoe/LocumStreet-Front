import LoginForm from '@/components/login/loginform';
import Seo from '@/components/Seo';
import Footer from './footer';
import Header from './header';

export default function Login() {
  return (
    <div>
      <Seo templateTitle='Login'></Seo>
      <Header></Header>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
}
