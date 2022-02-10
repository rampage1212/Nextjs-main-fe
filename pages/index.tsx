import type { GetStaticProps } from 'next';
import Head from 'next/head';
import HomeComponent from "../components/PageComponents/HomeComponent";
import homeComponentsPropsDataType from "../components/PageComponents/HomeComponent/dataTypes";
import { getBlogsData } from "../data/blogs";
import { getProjectData } from "../data/projects";
import TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST from "../data/technologiesWorkedWith";

const Home = (props: homeComponentsPropsDataType) => {
  return (
    <div>
      <Head>
        <title>Bhaskar Neupane</title>
        <meta name="description" content="Hello! I'm a recent A-Levels graduate and a Full-Stack Developer based in Kathmandu, Nepal. Currently, I am learning about Machine Learning and working as a Freelancer." />
        <meta name="keywords" content="vaskrneup, Bhaskar Neupane, Freelancer, Developer, Programmer" />
        <meta name="author" content="Bhaskar Neupane" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaskrneup.com" />
        <meta property="og:title" content="Bhaskar Neupane" />
        <meta property="og:description" content="Hello! I'm a recent A-Levels graduate and a Full-Stack Developer based in Kathmandu, Nepal. Currently, I am learning about Machine Learning and working as a Freelancer" />
        <meta property="og:image" content="/me.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vaskrneup.com" />
        <meta property="twitter:title" content="Bhaskar Neupane" />
        <meta property="twitter:description" content="Hello! I'm a recent A-Levels graduate and a Full-Stack Developer based in Kathmandu, Nepal. Currently, I am learning about Machine Learning and working as a Freelancer" />
        <meta property="twitter:image" content="/me.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComponent
        {...props}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      aboutMeData: TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST.map(data => data.data),
      projectsData: getProjectData({ numberOfProjects: 4 }).map(data => data.data),
      blogsData: getBlogsData({
        numberOfBlogs: 4,
        query: {
          key: "blogTitle",
          value: "First"
        },
      }).map(data => data.data),
      isHomePage: true,
    }
  };
};

export default Home;
