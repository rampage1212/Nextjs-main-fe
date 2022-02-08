import Link from "next/link";
import { blogDataContainerDataType } from "../../../data/blogs/dataTypes";
import Chip from "../../utils/Chip";
import Hr from "../../utils/Hr";
import blogViewCardStyles from "./BlogsViewCard.module.scss";

const BlogViewCard = (props: blogDataContainerDataType) => {
    return (
        <div className={blogViewCardStyles.card_container}>
            <div className={blogViewCardStyles.card_top}>
                <h3 className={blogViewCardStyles.title}>
                    <Link href={"/"}>
                        {props.blogTitle}
                    </Link>
                </h3>
                <p className={blogViewCardStyles.description}>{props.blogDescription}</p>
            </div>
            <div className={blogViewCardStyles.card_bottom}>
                <div className={blogViewCardStyles.bottom_top}>
                    {
                        props.blogTags.map(tag => {
                            return (
                                <Chip
                                    key={tag}
                                    value={tag}
                                />
                            );
                        })
                    }
                </div>
                <Hr />
                <div className={blogViewCardStyles.bottom_bottom}>
                    <span>{props.creationDate}</span>
                    <span>{props.readTime}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogViewCard;