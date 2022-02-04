import type { NextPage } from 'next';
import Head from 'next/head';
import HomeComponent from "../components/PageComponents/HomeComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bhaskar Neupane</title>
        <meta name="description" content="Hello! I'm a recent A-Levels graduate and a Full-Stack Developer based in Kathmandu, Nepal. Currently, I am learning about Machine Learning and working as a Freelancer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComponent />
    </div>
  );
};

export default Home;
