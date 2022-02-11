import Head from "next/head";
import metaManagerPropsDataType from "./dataType";

const MetaManager = (props: metaManagerPropsDataType) => {
    return (
        <Head>
            <title>{props.title}</title>
            {
                props.baseMetaData?.description ? <meta
                    name="description"
                    content={props.baseMetaData.description}
                /> : undefined
            }
            {
                props.keywords ? (
                    <meta
                        name="keywords"
                        content={props.keywords.join(", ")}
                    />
                ) : undefined
            }
            {
                props.baseMetaData?.author ? (
                    <meta name="author" content={props.baseMetaData.author} />
                ) : undefined
            }
            {
                props.baseMetaData?.type ? (
                    <meta property="og:type" content={props.baseMetaData.type} />
                ) : undefined
            }
            {
                props.baseMetaData?.url ? (
                    <meta property="og:url" content={props.baseMetaData.url} />
                ) : undefined
            }

            {
                props.baseMetaData?.title ? (
                    <meta property="og:title" content={props.baseMetaData.title} />
                ) : undefined
            }

            {
                props.baseMetaData?.description ? (
                    <meta
                        property="og:description"
                        content={props.baseMetaData.description}
                    />
                ) : undefined
            }

            {
                props.baseMetaData?.imageUrl ? (
                    <meta property="og:image" content={props.baseMetaData.imageUrl} />
                ) : undefined
            }

            {
                props.twitterSpecificMetaData?.card ? (
                    <meta property="twitter:card" content={props.twitterSpecificMetaData.card} />
                ) : undefined
            }
            {
                props.baseMetaData?.url ? (
                    <meta property="twitter:url" content={props.baseMetaData.url} />
                ) : undefined
            }
            {
                props.baseMetaData?.title ? (
                    <meta property="twitter:title" content={props.baseMetaData.title} />
                ) : undefined
            }

            {
                props.baseMetaData?.description ? (
                    <meta
                        property="twitter:description"
                        content={props.baseMetaData.description}
                    />
                ) : undefined
            }
            {
                props.baseMetaData?.imageUrl ? (
                    <meta property="twitter:image" content={props.baseMetaData.imageUrl} />
                ) : undefined
            }

            {
                props.favIconUrl ? (
                    <link rel="icon" href={props.favIconUrl} />
                ) : undefined
            }
        </Head>
    );
};

export default MetaManager;