import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from "next";
import ProjectDetailViewComponent from "../../../components/PageComponents/ProjectDetailView";
import projectDetailViewPropsDataType from "../../../components/PageComponents/ProjectDetailView/dataTypes";
import MetaManager from "../../../components/utils/MetaManager";
import { getProjectData, PROJECT_DATA } from "../../../data/projects";
import fs from "fs";
import getConfig from "next/config";

const ProjectDetailView = (props: projectDetailViewPropsDataType) => {
    return (
        <>
            <MetaManager
                title={props.projectData.projectName}
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: props.projectData.projectDescription,
                    imageUrl: props.projectData.projectImage,
                    title: props.projectData.projectName,
                    type: "blog",
                    url: "https://vaskrneup.com"
                }}
                keywords={props.projectData.projectTags}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />

            <ProjectDetailViewComponent
                {...props}
            />
        </>
    );
};

const getRawMarkdown = async (markdownPathOrUrl: string) => {
    let markdownData = undefined;

    if (markdownPathOrUrl.startsWith("/")) {
        const filePath = `${getConfig().serverRuntimeConfig?.basePath}\\public\\${markdownPathOrUrl}`.replaceAll("\\", "/");

        markdownData = fs.readFileSync(
            filePath,
            "utf8"
        );
        console.log(markdownData);
    } else {
        markdownData = await fetch(markdownPathOrUrl).then(res => res.text());
    }
    return markdownData;
};

export const getStaticProps: GetStaticProps = async (context) => {
    let rawMarkdown = "";
    let data = getProjectData({
        numberOfProjects: 1,
        query: {
            key: "id",
            value: context.params?.projectId as string
        }
    })[0];

    if (data.data.projectDetailsMarkdownLink) {
        rawMarkdown = await getRawMarkdown(data.data.projectDetailsMarkdownLink);
    }
    const parsedMarkdown = matter(rawMarkdown);

    return {
        props: {
            projectData: data.data,
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
        paths: PROJECT_DATA.map(data => ({ params: { projectId: data.data.id } })),
        fallback: false
    };
};

export default ProjectDetailView;