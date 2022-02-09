import { GetStaticProps } from "next";
import blogListViewPropsDataType from "../../components/PageComponents/BlogsListVIewComponent/dataType";
import BlogsComponent from "../../components/PageComponents/HomeComponent/Blogs";
import { getBlogsData } from "../../data/blogs";

const Blogs = (props: blogListViewPropsDataType) => {
    return (
        <BlogsComponent
            {...props}
        />
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            blogsData: getBlogsData({ numberOfBlogs: 99 }).map(data => data.data),
            isHomePage: false,
        }
    };
};

export default Blogs;