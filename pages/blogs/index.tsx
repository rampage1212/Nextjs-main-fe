import { GetStaticProps } from "next";
import blogListViewPropsDataType from "../../components/PageComponents/BlogsListVIewComponent/dataType";
import BlogsComponent from "../../components/PageComponents/HomeComponent/Blogs";
import MetaManager from "../../components/utils/MetaManager";
import { getBlogsData } from "../../data/blogs";
import { META_IMAGES } from "../../data/constants";

const Blogs = (props: blogListViewPropsDataType) => {
    return (
        <>
            <MetaManager
                title="Blogs from Bhaskar Neupane"
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: `${props.blogsData.length} blogs from Bhaskar Neupane`,
                    imageUrl: META_IMAGES.blogImage,
                    title: `${props.blogsData.length} blogs`,
                    type: "blog",
                    url: "https://vaskrneup.com"
                }}
                keywords={["Blogs", "Programming", "Programming Blogs", "Photography Blogs"]}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />

            <BlogsComponent
                {...props}
            />
        </>
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