import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import BlogDetailViewComponent from "../../../components/PageComponents/BlogDetailViewComponent";
import blogDetailViewPropsDataType from "../../../components/PageComponents/BlogDetailViewComponent/dataTypes";
import MetaManager from "../../../components/utils/MetaManager";
import BLOG_DATA, { getBlogsData } from "../../../data/blogs";

const BlogDetailPage = (props: blogDetailViewPropsDataType) => {
    return (
        <>
            <MetaManager
                title={props.blogData.blogTitle}
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: props.blogData.blogDescription,
                    // imageUrl: props.blogData.blogImage,
                    title: props.blogData.blogTitle,
                    type: "blog",
                    url: "https://vaskrneup.com"
                }}
                keywords={props.blogData.blogTags}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />

            <BlogDetailViewComponent
                {...props}
            />
        </>
    );
};


const getRawMarkdown = async (markdownPathOrUrl: string) => {
    let markdownData = undefined;
    markdownData = await fetch(markdownPathOrUrl).then(res => res.text());
    return markdownData;
};

export const getStaticProps: GetStaticProps = async (context) => {
    let rawMarkdown = "";
    let data = getBlogsData({
        numberOfBlogs: 1,
        query: {
            key: "id",
            value: context.params?.blogId as string
        }
    })[0];

    rawMarkdown = await getRawMarkdown(data.data.blogMarkdownLink);

    const parsedMarkdown = matter(rawMarkdown);

    return {
        props: {
            blogData: data.data,
            markdownData: {
                rawMarkdown: parsedMarkdown.content,
                data: parsedMarkdown.data,
                parsedMarkdownHTML: "",
            },
        }
    };
};


export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: BLOG_DATA.map(data => ({ params: { blogId: data.data.id } })),
        fallback: false
    };
};

export default BlogDetailPage;