import queryDataType from "../../helper/query/dataTypes";
import DataManager from "../manager";

export interface projectDataContainerPropsDataType {
    id: string;
    projectImage: string;
    projectName: string;
    projectFor: string;
    mainLink: string;
    projectDetailsMarkdownLink?: string;
    githubLink?: string;
    demoLink?: string;
    projectDescription: string;
    projectTags: string[];
}

export interface getBlogsDataPropsDataType {
    numberOfProjects: number;
    query?: queryDataType;
}
class ProjectDataContainer extends DataManager {
    constructor(public data: projectDataContainerPropsDataType) {
        super(data);
    };
}

export default ProjectDataContainer;