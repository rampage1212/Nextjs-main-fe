import SiteMapGeneratorComponent from "../../../components/PageComponents/utils/SitemapGeneratorComponent";
import siteMapGenerator from "../../../helper/sitemapGenerator";

const SiteMapGenerator = (props: { sitemapRawData: string; }) => {
    return (
        <SiteMapGeneratorComponent
            sitemapRawData={props.sitemapRawData}
        />
    );
};

export const getStaticProps = () => {
    return {
        props: {
            sitemapRawData: siteMapGenerator()
        }
    };
};

export default SiteMapGenerator;