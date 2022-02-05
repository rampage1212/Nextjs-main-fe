import DataManager from "../manager";

export interface technologiesWorkedWithPropsDataType {
    name: string;
    icon: string;
    url: string;
}

class TechnologiesWorkedWith extends DataManager {
    constructor(public data: technologiesWorkedWithPropsDataType) {
        super(data);
    };
}

export default TechnologiesWorkedWith;