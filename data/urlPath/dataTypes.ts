export default interface urlPathDataType {
    homePage: (_?: string) => string;
    aboutMe: (_?: string) => string;
    projectsListView: (_?: string) => string;
    projectsDetailView: (projectId: string) => string;
    blogsListView: (_?: string) => string;
    blogsDetailView: (blogId: string) => string;
    contactMe: (_?: string) => string;
}