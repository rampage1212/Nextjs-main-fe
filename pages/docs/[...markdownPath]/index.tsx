import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import getConfig from "next/config";
import layoutStyles from "../../../components/Layout/Layout.module.scss";
import MarkdownRenderer from "../../../components/utils/MarkdownRenderer";
import MetaManager from "../../../components/utils/MetaManager";
import metaManagerPropsDataType from "../../../components/utils/MetaManager/dataType";
import getAllFilePath from "../../../helper/getAllFilePath";
import { getTextFromUrlOrFilePath } from "../../../helper/network/getTextFromUrlOrFilePath";
import utilsStyles from "../../../styles/Utils.module.scss";

const Docs = (props: { rawMarkdown: string; metaData: metaManagerPropsDataType; }) => {
    return (
        <>
            <MetaManager
                {...props.metaData}
            />

            <div className={layoutStyles.section}>
                <div className={utilsStyles.container}>
                    <MarkdownRenderer
                        rawMarkdown={props.rawMarkdown}
                    />
                </div>
            </div>
        </>
    );
};


export const getStaticProps: GetStaticProps = async (context) => {
    const filePath = `/docs/${(context.params?.markdownPath as []).join("/")}/index.md`;
    const rawMarkdown = await getTextFromUrlOrFilePath({ filePathOrUrl: filePath, appendBasePath: true });

    const parsedMarkdown = matter(rawMarkdown);
    const metaData: metaManagerPropsDataType = {
        title: parsedMarkdown.data?.title || null,
        baseMetaData: {
            author: parsedMarkdown.data?.author || null,
            description: parsedMarkdown.data?.description || null,
            imageUrl: parsedMarkdown.data?.imageUrl || null,
            title: parsedMarkdown.data?.metaTitle || null,
            type: parsedMarkdown.data?.type || null,
            url: parsedMarkdown.data?.url || null,
        },
        favIconUrl: parsedMarkdown.data?.favIconUrl || null,
        keywords: parsedMarkdown.data?.keywords?.split(", ") || null,
        twitterSpecificMetaData: {
            card: parsedMarkdown.data?.twitterCard || "summary_large_image"
        }
    };

    return {
        props: {
            rawMarkdown: parsedMarkdown.content,
            metaData: metaData
        }
    };
};


export const getStaticPaths: GetStaticPaths = () => {
    const baseDirPath = getConfig().serverRuntimeConfig.basePath;
    const filePaths = getAllFilePath("docs")
        .map(path => path
            .replace(`${baseDirPath}/docs/`, "")
            .replace("/index.md", "")
            .replace(".md", "")
            .split("/")
        );
    // const fileIds: string[] = filePaths.map(file => file[file.length - 1]);
    // console.log(filePaths);
    return {
        paths: filePaths.map(path => ({ params: { markdownPath: path } })),
        fallback: false
    };
};


export default Docs;