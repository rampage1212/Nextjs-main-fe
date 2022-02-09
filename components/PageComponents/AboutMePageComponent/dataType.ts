import { technologiesWorkedWithPropsDataType } from "../../../data/technologiesWorkedWith/dataTypes";

export default interface AboutMePagesComponentPropsDataType {
    aboutMeData: technologiesWorkedWithPropsDataType[];
    isHomePage?: boolean;
}