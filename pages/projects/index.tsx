import { GetStaticProps } from "next";
import ProjectsComponent from "../../components/PageComponents/HomeComponent/Projects";
import projectsListViewComponentsPropsDataType from "../../components/PageComponents/ProjectsListViewComponent/dataTypes";
import MetaManager from "../../components/utils/MetaManager";
import { META_IMAGES } from "../../data/constants";
import { getProjectData, PROJECT_DATA } from "../../data/projects";
import { URL_PATH } from "../../data/urlPath";
import createFile from "../../helper/fileSystem/createFile";

const Projects = (props: projectsListViewComponentsPropsDataType) => {
    return (
        <>
            <MetaManager
                title="Projects"
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: `${props.projectsData.length} projects from Bhaskar Neupane`,
                    imageUrl: META_IMAGES.projectImage,
                    title: `${props.projectsData.length} projects`,
                    type: "website",
                }}
                keywords={["Projects", "Programming"]}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />
            <ProjectsComponent
                {...props}
            />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    let fileCreationCount = 0;

    PROJECT_DATA.forEach(data => {
        const fileContent: string = `
---
title: ${data.data.projectName}
author: Bhaskar Neupane
description: ${data.data.projectDescription}
imageUrl: ${data.data.projectImage}
metaTitle: ${data.data.projectName}
type: blog
keywords: ${data.data.projectTags.join(", ")}
---
# ${data.data.projectName}
`.trim();

        if (createFile({
            fileContent: fileContent,
            folderPath: URL_PATH.projectsDetailView(data.data.id)
        })) {
            fileCreationCount++;
        }
    });

    if (fileCreationCount > 0) {
        console.log(`[!] ${fileCreationCount} files created.`);
    }

    return {
        props: {
            projectsData: getProjectData({ numberOfProjects: 99 }).map(data => data.data),
            isHomePage: false,
        }
    };
};

export default Projects;