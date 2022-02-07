import chipPropsDataType from "./dataTypes";
import chipStyles from "./Chip.module.scss";

const Chip = (props: chipPropsDataType) => {
    return (
        <div className={chipStyles.chip}>
            {props.value}
        </div>
    );
};

export default Chip;