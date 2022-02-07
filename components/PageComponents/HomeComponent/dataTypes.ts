import { projectDataContainerPropsDataType } from "../../../data/projects/dataTypes";
import { technologiesWorkedWithPropsDataType } from "../../../data/technologiesWorkedWith/dataTypes";

export default interface homeComponentsPropsDataType {
    aboutMeData: technologiesWorkedWithPropsDataType[];
    projectsData: projectDataContainerPropsDataType[];
}