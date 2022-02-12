import type { GetStaticProps } from 'next';
import HomeComponent from "../components/PageComponents/HomeComponent";
import homeComponentsPropsDataType from "../components/PageComponents/HomeComponent/dataTypes";
import MetaManager from "../components/utils/MetaManager";
import { getBlogsData } from "../data/blogs";
import { FAVICON_DEFAULT_URL, MY_PICTURE_URL } from "../data/constants";
import { getProjectData } from "../data/projects";
import TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST from "../data/technologiesWorkedWith";
import getAllFilePath from "../helper/getAllFilePath";

const Home = (props: homeComponentsPropsDataType) => {
  return (
    <div>
      <MetaManager
        title="Bhaskar Neupane"
        favIconUrl={FAVICON_DEFAULT_URL}
        keywords={["vaskrneup", "Bhaskar Neupane", "Freelancer", "Developer", "Programmer", "Photographer"]}
        twitterSpecificMetaData={{
          card: "summary_large_image"
        }}
        baseMetaData={{
          title: "Bhaskar Neupane",
          author: "Bhaskar Neupane",
          description: "I'm a recent A-Levels graduate and a Full-Stack Developer based in Kathmandu, Nepal. Currently, I am learning about Machine Learning and working as a Freelancer.",
          imageUrl: MY_PICTURE_URL,
          type: "website",
          url: "https://vaskrneup.com"
        }}
      />

      <HomeComponent
        {...props}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  getAllFilePath("docs");

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
