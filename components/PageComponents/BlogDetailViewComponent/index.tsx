import blogDetailViewPropsDataType from "./dataTypes";
import utilsStyles from "../../../styles/Utils.module.scss";
import layoutStyles from "../../Layout/Layout.module.scss";
import MarkdownRenderer from "../../utils/MarkdownRenderer";

const BlogDetailViewComponent = (props: blogDetailViewPropsDataType) => {
    return (
        <div className={layoutStyles.section}>
            <div className={utilsStyles.container}>
                <MarkdownRenderer
                    rawMarkdown={props.markdownData.rawMarkdown}
                />
            </div>
        </div>
    );
};

export default BlogDetailViewComponent;