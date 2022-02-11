import sitemapGeneratorStyles from "./SitemapGeneratorComponent.module.scss";
import utilsStyles from "../../../../styles/Utils.module.scss";
import layoutStyles from "../../../Layout/Layout.module.scss";
import { fileDownloader } from "../../../../helper/fileDownloader";

const SiteMapGeneratorComponent = (props: { sitemapRawData: string; }) => {
    return (
        <div className={utilsStyles.container}>
            <div className={sitemapGeneratorStyles.container}>
                <h1 className={layoutStyles.section_title}>Generate and Download Sitemap</h1>
                <div className={`${layoutStyles.section_body} ${sitemapGeneratorStyles.body}`}>
                    <button
                        className="btn"
                        onClick={() => {
                            fileDownloader(
                                props.sitemapRawData,
                                "sitemap.xml",
                                "xml"
                            );
                        }}
                    >
                        Download Sitemap
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SiteMapGeneratorComponent;