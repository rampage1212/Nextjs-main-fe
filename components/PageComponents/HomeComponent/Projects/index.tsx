import Link from "next/link";
import { URL_PATH } from "../../../../data/urlPath";
import viewAllBtnStyles from "../../../../styles/components/ViewAllButton.module.scss";
import utilsStyles from "../../../../styles/Utils.module.scss";
import ProjectViewCard from "../../../cards/ProjectsViewCard";
import layoutStyles from "../../../Layout/Layout.module.scss";
import projectsListViewComponentsPropsDataType from "../../ProjectsListViewComponent/dataTypes";
import homeComponentsPropsDataType from "../dataTypes";
import projectStyles from "./Projects.module.scss";

const Projects = (props: homeComponentsPropsDataType | projectsListViewComponentsPropsDataType) => {
    return (
        <div className={`${layoutStyles.section} ${projectStyles.projects_section}`}>
            <div className={utilsStyles.container}>
                <div className={layoutStyles.section_body}>
                    {
                        props.isHomePage ? (
                            <h3 className={layoutStyles.section_title}>
                                Projects
                            </h3>
                        ) : (
                            <h1
                                className={layoutStyles.section_title}
                                style={{
                                    fontSize: "2.5rem",
                                    marginBottom: "1rem"
                                }}
                            >
                                Projects
                            </h1>
                        )
                    }

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

                    {
                        props.isHomePage ?
                            (
                                <div className={viewAllBtnStyles.view_all_btn}>
                                    <Link href={URL_PATH.projectsListView()}>
                                        <a>
                                            VIEW ALL
                                        </a>
                                    </Link>
                                </div>
                            ) : undefined
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;