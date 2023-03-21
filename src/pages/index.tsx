import Head from 'next/head';
import HeroSection from '~/components/Hero';
import Menu from '~/components/Menu';
import Testimonials from '~/components/Testimonials';
import Footer from '~/components/Footer';
import Featured from '~/components/Featured';
import Layout from '~/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Lemon Restaurant</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='og:title' content='Little Lemon Restaurant' />
        <meta
          name='og:description'
          content='Little Lemon Restaurant online food ordering service'
        />
        <meta name='og:image' content='/greek_salad.jpg' />

        <meta name='title' content='Little Lemon Restaurant' />
        <meta
          name='description'
          content='Little Lemon Restaurant online food ordering service'
        />
        <meta name='author' content='Navninder Singh Benipal' />
        <meta name='robots' content='index,nofollow' />
        <meta name='rating' content='safe for kids' />
        <meta name='HandheldFriendly' content='true' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta httpEquiv='default-style' />
        <meta name='language' content='english' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HeroSection />
        <Menu />
        <Testimonials />
        <Featured />
        <Footer />
      </Layout>
    </>
  );
}
