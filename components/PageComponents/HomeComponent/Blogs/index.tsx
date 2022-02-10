import Link from "next/link";
import { URL_PATH } from "../../../../data/urlPath";
import viewAllBtnStyles from "../../../../styles/components/ViewAllButton.module.scss";
import utilsStyles from "../../../../styles/Utils.module.scss";
import BlogViewCard from "../../../cards/BlogsViewCard";
import layoutStyles from "../../../Layout/Layout.module.scss";
import blogListViewPropsDataType from "../../BlogsListVIewComponent/dataType";
import homeComponentsPropsDataType from "../dataTypes";
import blogStyles from "./Blogs.module.scss";

const Blogs = (props: homeComponentsPropsDataType | blogListViewPropsDataType) => {
    return (
        <div className={`${layoutStyles.section} ${blogStyles.blogs_section}`}>
            <div className={utilsStyles.container}>
                <div className={layoutStyles.section_body}>
                    {
                        props.isHomePage ? (
                            <h3
                                className={layoutStyles.section_title}
                            >
                                Blogs
                            </h3>
                        ) : (
                            <h1
                                className={layoutStyles.section_title}
                                style={{
                                    fontSize: "2.5rem",
                                    marginBottom: "1rem"
                                }}
                            >
                                Blogs
                            </h1>
                        )
                    }

                    <div className={blogStyles.section_body}>
                        {
                            props.blogsData
                                .map(blogData => {
                                    return (
                                        <BlogViewCard
                                            key={blogData.id}
                                            {...blogData}
                                        />
                                    );
                                })
                        }
                    </div>

                    {
                        props.isHomePage ? (
                            <div className={viewAllBtnStyles.view_all_btn}>
                                <Link href={URL_PATH.blogsListView()}>
                                    <a>
                                        VIEW ALL
                                    </a>
                                </Link>
                            </div>
                        ) : undefined
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;