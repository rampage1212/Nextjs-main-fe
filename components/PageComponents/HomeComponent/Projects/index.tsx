import Link from "next/link";
import utilsStyles from "../../../../styles/Utils.module.scss";
import viewAllBtnStyles from "../../../../styles/components/ViewAllButton.module.scss";
import ProjectViewCard from "../../../cards/ProjectsViewCard";
import layoutStyles from "../../../Layout/Layout.module.scss";
import homeComponentsPropsDataType from "../dataTypes";
import projectStyles from "./Projects.module.scss";

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
                    <div className={viewAllBtnStyles.view_all_btn}>
                        <Link href={"/"}>
                            <a>
                                VIEW ALL
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;