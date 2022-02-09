import { GetStaticProps } from "next";
import ProjectsComponent from "../../components/PageComponents/HomeComponent/Projects";
import projectsListViewComponentsPropsDataType from "../../components/PageComponents/ProjectsListViewComponent/dataTypes";
import { getProjectData } from "../../data/projects";

const Projects = (props: projectsListViewComponentsPropsDataType) => {
    return (
        <ProjectsComponent
            {...props}
        />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            projectsData: getProjectData(99).map(data => data.data),
            isHomePage: false,
        }
    };
};

export default Projects;