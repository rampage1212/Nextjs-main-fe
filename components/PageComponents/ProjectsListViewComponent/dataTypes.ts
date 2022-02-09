import { projectDataContainerPropsDataType } from "../../../data/projects/dataTypes";

export default interface projectsListViewComponentsPropsDataType {
    projectsData: projectDataContainerPropsDataType[];
    isHomePage: boolean;
}