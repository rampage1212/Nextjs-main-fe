import { projectDataContainerPropsDataType } from "../../../data/projects/dataTypes";

export default interface projectDetailViewPropsDataType {
    projectData: projectDataContainerPropsDataType;
    markdownData: {
        parsedMarkdownHTML: string;
        rawMarkdown: string;
        data: any;
    };
}