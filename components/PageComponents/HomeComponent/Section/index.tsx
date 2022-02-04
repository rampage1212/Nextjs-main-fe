import sectionPropsDataType from "./dataTypes";

const Section = (props: sectionPropsDataType) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Section;