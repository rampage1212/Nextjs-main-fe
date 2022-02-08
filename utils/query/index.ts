import { queryPropsDataType } from "./dataTypes";

// TODO: write better code !!
const query = (props: queryPropsDataType) => {
    const newData: any[] = [];

    for (let i = 0; i < props.data.length; i++) {
        const currentData: any = props.data[i].data;

        if ((<string>currentData[props.query.key]).startsWith(<string>props.query.value)) {
            if (props.wrapper) {
                newData.push(new props.wrapper(currentData));
            } else {
                newData.push(currentData);
            }
        }
    }

    return newData;
};

export default query;