export interface baseMetaData {
    description?: string;
    author?: string;
    type?: "blog" | "website";
    url?: string;
    title?: string;
    imageUrl?: string;
}

export interface twitterSpecificMetaData {
    card?: string;
}

export default interface metaManagerPropsDataType {
    baseMetaData?: baseMetaData;
    twitterSpecificMetaData?: twitterSpecificMetaData;
    keywords?: string[];
    favIconUrl?: string;
    title: string;
}