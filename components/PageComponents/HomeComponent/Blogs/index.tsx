import Link from "next/link";
import viewAllBtnStyles from "../../../../styles/components/ViewAllButton.module.scss";
import utilsStyles from "../../../../styles/Utils.module.scss";
import layoutStyles from "../../../Layout/Layout.module.scss";
import homeComponentsPropsDataType from "../dataTypes";
import blogStyles from "./Blogs.module.scss";

const Blogs = (props: homeComponentsPropsDataType) => {
    return (
        <div className={`${layoutStyles.section} ${blogStyles.blogs_section}`}>
            <div className={utilsStyles.container}>
                <div className={layoutStyles.section_body}>
                    <h3 className={layoutStyles.section_title}>Blogs</h3>

                    <div className={blogStyles.section_body}>

                    </div>

                    <div className={viewAllBtnStyles.view_all_btn}>
                        <Link href={"/"}>
                            <a>
                                VIEW ALL
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;