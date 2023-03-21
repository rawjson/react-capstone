import Head from 'next/head';
import Header from '~/components/Header';
import Layout from '~/components/Layout';
import ReserveTable from '~/components/ReserveTable';

export default function Reservations() {
  return (
    <>
      <Head>
        <title>Reservations | Little Lemon Restaurant</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='og:title' content='Little Lemon Restaurant' />
        <meta
          name='og:description'
          content='Little Lemon Restaurant online food ordering service'
        />
        <meta name='og:image' content='/greek_salad.jpg' />
      </Head>
      <Layout>
        <ReserveTable />
      </Layout>
    </>
  );
}
