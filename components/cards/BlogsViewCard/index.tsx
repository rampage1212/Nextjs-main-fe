import blogViewCardStyles from "./BlogsViewCard.module.scss";
import blogViewCardPropsDataType from "./dataTypes";

const BlogViewCard = (props: blogViewCardPropsDataType) => {
    return (
        <div className={blogViewCardStyles.card_container}>
            <div className={blogViewCardStyles.card_top}>

            </div>
            <div className={blogViewCardStyles.card_bottom}>

            </div>
        </div>
    );
};

export default BlogViewCard;