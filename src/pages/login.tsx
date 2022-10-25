import LoginForm from '@/components/login/loginform';
import Seo from '@/components/Seo';
import { production } from 'environment';
import Footer from './footer';
import Header from './header';
import PocketBase from 'pocketbase';

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
