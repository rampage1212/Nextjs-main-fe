import sectionPropsDataType from "./dataTypes";
import sectionStyles from "./Section.module.scss";

const Section = (props: sectionPropsDataType) => {
    return (
        <div className={sectionStyles.section}>
            {props.children}
        </div>
    );
};

export default Section;