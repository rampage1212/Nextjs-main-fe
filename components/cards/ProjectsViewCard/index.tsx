import Link from "next/link";
import { useState } from "react";
import { ANALYTICS_CATEGORIES_ACTIVATOR, ANALYTICS_CATEGORY_TYPES } from "../../../data/constants";
import { projectDataContainerPropsDataType } from "../../../data/projects/dataTypes";
import { URL_PATH } from "../../../data/urlPath";
import Chip from "../../utils/Chip";
import Hr from "../../utils/Hr";
import projectViewCardStyles from "./ProjectViewCard.module.scss";

const ProjectViewCard = (props: projectDataContainerPropsDataType) => {
    const [hover, setHover] = useState(false);
    let mainContainerStyle = undefined;

    if (hover) {
        mainContainerStyle = {
            backgroundImage: `linear-gradient(
                rgba(26, 55, 77, 1),
                rgba(26, 55, 77, 0.7),
                rgba(26, 55, 77, 0.5),
                rgba(26, 55, 77, 0.1),
                rgba(26, 55, 77, 0),
                rgba(26, 55, 77, 0)
            ),
            url(${props.projectImage})`
        };
    } else {
        mainContainerStyle = {
            backgroundImage: `url(${props.projectImage})`
        };
    }

    return (
        <div
            className={projectViewCardStyles.card_container}
            style={mainContainerStyle}
            onMouseEnter={() => { setHover(true); }}
            onMouseLeave={() => { setHover(false); }}
        >
            <div className={projectViewCardStyles.card_top}>
                <div className={projectViewCardStyles.top_left}>
                    <h3 className={projectViewCardStyles.project_name}>
                        <Link href={URL_PATH.projectsDetailView(props.id)}>
                            <a>
                                {props.projectName}
                            </a>
                        </Link>
                    </h3>
                    <h5 className={projectViewCardStyles.project_for}>{props.projectFor}</h5>
                </div>
                <div className={projectViewCardStyles.top_right}>
                    {
                        props.githubLink ?
                            (
                                <a
                                    href={props.githubLink}
                                    target={"_blank"}
                                    rel="noreferrer"
                                    onClick={ANALYTICS_CATEGORIES_ACTIVATOR.activator(ANALYTICS_CATEGORY_TYPES.projectGithubLinkClick, props.githubLink)}
                                >
                                    <i className="fab fa-github link-btn" aria-hidden></i>
                                </a>
                            )
                            :
                            null
                    }
                    {props.demoLink && props.githubLink ? (<>&nbsp;&nbsp;&nbsp;</>) : null}
                    {
                        props.demoLink ?
                            (
                                <>
                                    <a
                                        href={props.demoLink}
                                        target={"_blank"}
                                        rel="noreferrer"
                                        onClick={ANALYTICS_CATEGORIES_ACTIVATOR.activator(ANALYTICS_CATEGORY_TYPES.projectDemoLinkClick, props.demoLink)}
                                    >
                                        <i className="fas fa-external-link-alt link-btn" aria-hidden></i>
                                    </a>
                                </>
                            )
                            :
                            null
                    }
                </div>
            </div>
            <div className={projectViewCardStyles.card_bottom}>
                <p className={projectViewCardStyles.description}>
                    {props.projectDescription}
                </p>
                <Hr />
                <div className={projectViewCardStyles.chip_container}>
                    {
                        props.projectTags.map(tag => {
                            return (
                                <Chip value={tag} key={tag} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectViewCard;;