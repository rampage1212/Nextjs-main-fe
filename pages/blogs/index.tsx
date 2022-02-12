import { GetStaticProps } from "next";
import getConfig from "next/config";
import blogListViewPropsDataType from "../../components/PageComponents/BlogsListVIewComponent/dataType";
import BlogsComponent from "../../components/PageComponents/HomeComponent/Blogs";
import MetaManager from "../../components/utils/MetaManager";
import BLOG_DATA, { getBlogsData } from "../../data/blogs";
import { META_IMAGES } from "../../data/constants";
import { URL_PATH } from "../../data/urlPath";
import fs from "fs";
import createFile from "../../helper/fileSystem/createFile";

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
    let fileCreationCount = 0;

    BLOG_DATA.forEach(data => {
        const fileContent: string = `
---
title: ${data.data.blogTitle}
author: Bhaskar Neupane
description: ${data.data.blogDescription}
imageUrl: ${data.data.imageUrl}
metaTitle: ${data.data.blogTitle}
type: blog
keywords: ${data.data.blogTags.join(", ")}
---
# ${data.data.blogTitle}
`.trim();

        if (createFile({
            fileContent: fileContent,
            folderPath: URL_PATH.blogsDetailView(data.data.id)
        })) {
            fileCreationCount++;
        }
    });

    if (fileCreationCount > 0) {
        console.log(`[!] ${fileCreationCount} files created.`);
    }

    return {
        props: {
            blogsData: getBlogsData({ numberOfBlogs: 99 }).map(data => data.data),
            isHomePage: false,
        }
    };
};

export default Blogs;