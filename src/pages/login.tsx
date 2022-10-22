import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/login/loginform';
import Seo from '@/components/Seo';
import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Login() {
  return (
    <div>
      <Layout>
        <Seo templateTitle='Login'></Seo>
        <Header></Header>
        <LoginForm></LoginForm>
        <Footer></Footer>
      </Layout>
    </div>
  );
}
