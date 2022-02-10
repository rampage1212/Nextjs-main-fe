import { GetStaticPaths, GetStaticProps } from "next";
import ProjectDetailViewComponent from "../../../components/PageComponents/ProjectDetailView";
import projectDetailViewPropsDataType from "../../../components/PageComponents/ProjectDetailView/dataTypes";
import { getProjectData, PROJECT_DATA } from "../../../data/projects";
import matter from 'gray-matter';
import Head from "next/head";
import markdownRenderer from "../../../helper/markdownRenderer";

const ProjectDetailView = (props: projectDetailViewPropsDataType) => {
    return (
        <>
            <Head>
                <title>{props.projectData.projectName}</title>
                <meta
                    name="description"
                    content={props.projectData.projectDescription}
                />
            </Head>

            <ProjectDetailViewComponent
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
                parsedMarkdownHTML: await markdownRenderer(parsedMarkdown.content),
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