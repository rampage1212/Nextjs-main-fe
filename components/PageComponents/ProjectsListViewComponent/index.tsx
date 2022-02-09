import projectListViewComponentStyles from "./ProjectListViewComponent.module.scss";
import { getProjectData } from "../../../data/projects";
import ProjectViewCard from "../../cards/ProjectsViewCard";
import projectsListViewComponentsPropsDataType from "./dataTypes";

const ProjectsListView = (props: projectsListViewComponentsPropsDataType) => {
    return (
        <div className={projectListViewComponentStyles.container}>
            <h1 className={projectListViewComponentStyles.title}>Projects</h1>

            <div className={projectListViewComponentStyles.projects_grid}>
                {
                    props.projectsData.map(data => {
                        return (
                            <ProjectViewCard
                                key={data.id}
                                {...data}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ProjectsListView;