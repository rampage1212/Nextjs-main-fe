import ReactGA from "react-ga";

export const BASE_URL = "http://localhost:3000";

export const MY_PICTURE_URL = "/assets/images/personal/me.jpg";
export const FAVICON_DEFAULT_URL = "/favicon.ico";

export const GOOGLE_ANALYTICS_CODE = "G-LRL12W2DCJ";

export enum ANALYTICS_ACTION_TYPES {
    click = "click",
    formSubmission = "formSubmission"
}

export enum ANALYTICS_CATEGORY_TYPES {
    socialSiteLinkClick = "socialSiteLinkClick",
    resumeLinkClick = "resumeLinkClick",
    technologiesUsedClick = "technologiesUsedClick",
    projectGithubLinkClick = "projectGithubLinkClick",
    projectDemoLinkClick = "projectDemoLinkClick",
    sendEmailLinkClick = "sendEmailLinkClick",
    contactFormSubmission = "contactFormSubmission",
}

export const ANALYTICS_CATEGORIES_ACTIVATOR = {
    activator: (activator: ANALYTICS_CATEGORY_TYPES, label: string) => {
        return () => {
            ANALYTICS_CATEGORIES_ACTIVATOR[activator](label);
        };
    },
    [ANALYTICS_CATEGORY_TYPES.socialSiteLinkClick]: (label: string) => {
        ReactGA.event({
            category: ANALYTICS_CATEGORY_TYPES.socialSiteLinkClick,
            action: ANALYTICS_ACTION_TYPES.click,
            label: label
        });
    },
    [ANALYTICS_CATEGORY_TYPES.resumeLinkClick]: (label: string) => {
        ReactGA.event({
            category: ANALYTICS_CATEGORY_TYPES.resumeLinkClick,
            action: ANALYTICS_ACTION_TYPES.click,
            label: label
        });
    },
    [ANALYTICS_CATEGORY_TYPES.technologiesUsedClick]: (label: string) => {
        ReactGA.event({
            category: ANALYTICS_CATEGORY_TYPES.technologiesUsedClick,
            action: ANALYTICS_ACTION_TYPES.click,
            label: label
        });
    },
    [ANALYTICS_CATEGORY_TYPES.projectGithubLinkClick]: (label: string) => {
        ReactGA.event({
            category: ANALYTICS_CATEGORY_TYPES.projectGithubLinkClick,
            action: ANALYTICS_ACTION_TYPES.click,
            label: label
        });
    },
    [ANALYTICS_CATEGORY_TYPES.projectDemoLinkClick]: (label: string) => {
        ReactGA.event({
            category: ANALYTICS_CATEGORY_TYPES.projectDemoLinkClick,
            action: ANALYTICS_ACTION_TYPES.click,
            label: label
        });
    },
    [ANALYTICS_CATEGORY_TYPES.sendEmailLinkClick]: (label: string) => {
        ReactGA.event({
            category: ANALYTICS_CATEGORY_TYPES.sendEmailLinkClick,
            action: ANALYTICS_ACTION_TYPES.click,
            label: label
        });
    },
    [ANALYTICS_CATEGORY_TYPES.contactFormSubmission]: (label: string) => {
        ReactGA.event({
            category: ANALYTICS_CATEGORY_TYPES.contactFormSubmission,
            action: ANALYTICS_ACTION_TYPES.formSubmission,
            label: label
        });
    }
};

export const META_IMAGES = {
    projectImage: "/assets/images/metadata/project.jpg",
    contactImage: "/assets/images/metadata/contact.jpg",
    blogImage: "/assets/images/metadata/blog.jpg",
    aboutMeImage: "/assets/images/metadata/about-me.jpg",
};