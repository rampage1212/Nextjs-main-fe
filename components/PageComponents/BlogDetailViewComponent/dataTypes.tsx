import { blogDataContainerDataType } from "../../../data/blogs/dataTypes";

export default interface blogDetailViewPropsDataType {
    blogData: blogDataContainerDataType;
    markdownData: {
        parsedMarkdownHTML: string;
        rawMarkdown: string;
        data: any;
    };
}