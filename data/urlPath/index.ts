import urlPathDataType from "./dataTypes";

export const URL_PATH: urlPathDataType = {
    aboutMe: () => "/about-me",
    projectsListView: () => "/projects",
    projectsDetailView: (projectId: string) => `/projects/${projectId}`,
    blogsListView: () => "/blogs",
    blogsDetailView: (blogId: string) => `/blogs/${blogId}`,
    contactMe: () => "/contact-me"
};