import DataManager from "../manager";

export interface socialSiteDataContainerPropsDataType {
    link: string;
    iconClass?: string;
    iconImage?: string;
}

class SocialSiteDataContainer extends DataManager {
    constructor(public data: socialSiteDataContainerPropsDataType) {
        super(data);
    };
}

export default SocialSiteDataContainer;