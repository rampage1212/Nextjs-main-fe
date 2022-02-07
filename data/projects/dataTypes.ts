import DataManager from "../manager";

export interface projectDataContainerPropsDataType {
    id: string | number;
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

class ProjectDataContainer extends DataManager {
    constructor(public data: projectDataContainerPropsDataType) {
        super(data);
    };
}

export default ProjectDataContainer;