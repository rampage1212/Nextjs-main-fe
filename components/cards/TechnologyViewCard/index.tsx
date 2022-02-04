import technologyViewCardPropsDataType from "./dataTypes";
import technologyViewCardStyles from "./TechnologyViewCard.module.scss";

const TechnologyViewCard = (props: technologyViewCardPropsDataType) => {
    return (
        <div className={technologyViewCardStyles.technology_view}>
            <img
                src={props.image}
                alt={props.imageAltText}
            />
            <span className={technologyViewCardStyles.technology_name}>
                {props.name}
            </span>
        </div>
    );
};

export default TechnologyViewCard;