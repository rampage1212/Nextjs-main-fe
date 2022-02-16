import query from "../../helper/query";
import { URL_PATH } from "../urlPath";
import BlogDataContainer, { getBlogsDataPropsDataType } from "./dataTypes";

const BLOG_DATA: BlogDataContainer[] = [
    new BlogDataContainer({
        id: "first-blog",
        blogTitle: "First Blog",
        blogDescription: "Just a Test Blog, Nothing Much!!",
        blogTags: ["blog", "test"],
        creationDate: "Jan 17, 2022",
        readTime: "3 Min",
        blogMarkdownLink: URL_PATH.blogsDetailView("first-blog"),
        imageUrl: "/assets/images/blogs/first-blog.jpg"
    }),
    new BlogDataContainer({
        id: "development-of-nepse-tools",
        blogTitle: "Development of NEPSE Tools",
        blogDescription: "Automate tasks related to Nepalese share market. Supports meroshare and TMS.",
        blogTags: ["blog", "python", "data-analysis", "nepse", "stock"],
        creationDate: "Feb 16, 2022",
        readTime: "1 Min",
        blogMarkdownLink: URL_PATH.blogsDetailView("development-of-nepse-tools"),
        imageUrl: "/assets/images/project_demos/NEPSE_analysis.jpg"
    }),
];

export const getBlogsData = (data: getBlogsDataPropsDataType): BlogDataContainer[] => {
    if (data.query) {
        return <BlogDataContainer[]>query({
            data: BLOG_DATA,
            query: data.query,
            wrapper: BlogDataContainer
        }).slice(0, data.numberOfBlogs);
    } else {
        return BLOG_DATA.slice(0, data.numberOfBlogs);
    }
};

export default BLOG_DATA;