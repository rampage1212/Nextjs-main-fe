import HrPropsDataType from "./dataTypes";
import hrStyles from "./Hr.module.scss";

const Hr = (props: HrPropsDataType) => {
    return (
        <div className={hrStyles.hr} {...props}></div>
    );
};

export default Hr;