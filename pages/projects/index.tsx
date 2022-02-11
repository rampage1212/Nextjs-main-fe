import { GetStaticProps } from "next";
import ProjectsComponent from "../../components/PageComponents/HomeComponent/Projects";
import projectsListViewComponentsPropsDataType from "../../components/PageComponents/ProjectsListViewComponent/dataTypes";
import MetaManager from "../../components/utils/MetaManager";
import { FAVICON_DEFAULT_URL, META_IMAGES } from "../../data/constants";
import { getProjectData } from "../../data/projects";

const Projects = (props: projectsListViewComponentsPropsDataType) => {
    return (
        <>
            <MetaManager
                title="Projects"
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: `${props.projectsData.length} projects from Bhaskar Neupane`,
                    imageUrl: META_IMAGES.projectImage,
                    title: `${props.projectsData.length} projects`,
                    type: "website",
                    url: "https://vaskrneup.com"
                }}
                keywords={["Projects", "Programming"]}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />
            <ProjectsComponent
                {...props}
            />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            projectsData: getProjectData({ numberOfProjects: 99 }).map(data => data.data),
            isHomePage: false,
        }
    };
};

export default Projects;