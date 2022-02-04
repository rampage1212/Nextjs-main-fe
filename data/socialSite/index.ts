import SocialSiteDataContainer from "./dataTypes";

const SOCIAL_SITES: SocialSiteDataContainer[] = [
    new SocialSiteDataContainer({
        link: "https://www.linkedin.com/in/vaskrneup/",
        iconClass: "fab fa-linkedin"
    }),
    new SocialSiteDataContainer({
        link: "https://stackoverflow.com/users/10212936/vaskrneup",
        iconClass: "fab fa-stack-overflow"
    }),
    new SocialSiteDataContainer({
        link: "https://github.com/vaskrneup",
        iconClass: "fab fa-github"
    }),
    new SocialSiteDataContainer({
        link: "https://instagram.com/vaskrneup",
        iconClass: "fab fa-instagram"
    }),
    new SocialSiteDataContainer({
        link: "https://twitter.com/vaskrneup",
        iconClass: "fab fa-twitter"
    }),
    new SocialSiteDataContainer({
        link: "mailto:bhaskar@vaskrneup.com",
        iconClass: "far fa-envelope"
    }),
];

export default SOCIAL_SITES;