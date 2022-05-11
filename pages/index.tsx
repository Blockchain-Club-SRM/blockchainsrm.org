import Head from 'next/head';
import About from '../components/home/about';
import Events from '../components/home/events';
import Landing from '../components/home/landing';
import Layout from '../components/shared/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>BLOCKCHAINSRM | Home</title>
      </Head>
      <Layout className="overflow-hidden bg-bghome bg-no-repeat relative bg-cover md:bg-fixed">
        <Landing />
        <About />
      </Layout>
      <Events />
    </>
  );
}
