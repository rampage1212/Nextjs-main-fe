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