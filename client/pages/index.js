import Head from 'next/head';
import Home from '@/components/Home';

export default function index() {
  return (  
    <>
      <Head>
        <title>Ehsan Ellahi || Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}