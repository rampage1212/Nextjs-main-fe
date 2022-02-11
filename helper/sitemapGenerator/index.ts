import BLOG_DATA from "../../data/blogs";
import { PROJECT_DATA } from "../../data/projects";
import { URL_PATH } from "../../data/urlPath";

export const getFullUrl = (path: string) => {
    return `https://vaskrneup.com${path}`;
};

const SITEMAP_CREATION_DATA = [
    { url: getFullUrl(""), priority: "1" },
    { url: getFullUrl(URL_PATH.aboutMe()) },
    { url: getFullUrl(URL_PATH.projectsListView()) },
    { url: getFullUrl(URL_PATH.blogsListView()) },
    { url: getFullUrl(URL_PATH.contactMe()) },
    ...PROJECT_DATA.map(data => ({ url: getFullUrl(URL_PATH.projectsDetailView(data.data.id)) })),
    ...BLOG_DATA.map(data => ({ url: getFullUrl(URL_PATH.blogsDetailView(data.data.id)) })),
];

export const getSitemapUrl = (
    {
        loc, lastmod = "2022-01-26", changefreq = "weekly", priority = "0.80"
    }: {
        loc: string,
        lastmod?: string,
        changefreq?: string,
        priority?: string;
    }
): string => {
    let url = "<url>";
    url += `<loc>${loc}</loc>`;

    if (lastmod !== undefined) url += `<lastmod>${lastmod}</lastmod>`;
    if (changefreq !== undefined) url += `<changefreq>${changefreq}</changefreq>`;
    if (priority !== undefined) url += `<priority>${priority}</priority>`;

    url += "</url>";

    return url;
};

const siteMapGenerator = () => {
    let sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    `;

    const date = new Date();

    SITEMAP_CREATION_DATA.map(data => {
        sitemap += getSitemapUrl({
            loc: data.url,
            priority: data.priority,
            lastmod: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
        });
    });

    sitemap += "</urlset>";
    sitemap = sitemap.trim();

    return sitemap;
};

export default siteMapGenerator;