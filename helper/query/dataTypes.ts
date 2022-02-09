import BlogDataContainer from "../../data/blogs/dataTypes";
import ProjectDataContainer from "../../data/projects/dataTypes";
import SocialSiteDataContainer from "../../data/socialSite/dataTypes";

export default interface queryDataType {
    key: string;
    value: string | number;
}

export type querySupportedDataTypes = BlogDataContainer[] | ProjectDataContainer[] | SocialSiteDataContainer[];

export interface queryPropsDataType {
    query: queryDataType;
    data: querySupportedDataTypes;
    wrapper?: any;
}
