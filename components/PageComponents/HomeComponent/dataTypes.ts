import { projectDataContainerPropsDataType } from "../../../data/projects/dataTypes";
import { technologiesWorkedWithPropsDataType } from "../../../data/technologiesWorkedWith/dataTypes";
import blogViewCardPropsDataType from "../../cards/BlogsViewCard/dataTypes";

export default interface homeComponentsPropsDataType {
    aboutMeData: technologiesWorkedWithPropsDataType[];
    projectsData: projectDataContainerPropsDataType[];
    blogsData: blogViewCardPropsDataType[];
}