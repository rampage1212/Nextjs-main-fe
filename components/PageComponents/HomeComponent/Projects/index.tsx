import homeComponentsPropsDataType from "../dataTypes";
import layoutStyles from "../../../Layout/Layout.module.scss";
import utilsStyles from "../../../../styles/Utils.module.scss";
import projectStyles from "./Projects.module.scss";
import ProjectViewCard from "../../../cards/ProjectsViewCard";

const Projects = (props: homeComponentsPropsDataType) => {
    return (
        <div className={`${layoutStyles.section} ${projectStyles.projects_section}`}>
            <div className={utilsStyles.container}>
                <div className={layoutStyles.section_body}>
                    <h3 className={layoutStyles.section_title}>Projects</h3>

                    <div className={projectStyles.section_body}>
                        {
                            props.projectsData
                                .map(projectData => {
                                    return (
                                        <ProjectViewCard
                                            key={projectData.id}
                                            {...projectData}
                                        />
                                    );
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;