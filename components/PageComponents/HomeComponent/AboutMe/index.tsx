import { technologiesWorkedWithPropsDataType } from "../../../../data/technologiesWorkedWith/dataTypes";
import utilsStyles from "../../../../styles/Utils.module.scss";
import TechnologyViewCard from "../../../cards/TechnologyViewCard";
import layoutStyles from "../../../Layout/Layout.module.scss";
import AboutMePagesComponentPropsDataType from "../../AboutMePageComponent/dataType";
import homeComponentsPropsDataType from "../dataTypes";
import Section from "../Section";
import aboutMeStyles from "./AboutMe.module.scss";

const AboutMe = (props: homeComponentsPropsDataType | AboutMePagesComponentPropsDataType) => {
    return (
        <Section>
            <div className={`${aboutMeStyles.about_me_section} ${layoutStyles.section}`} id="about-me">
                <div className={utilsStyles.container}>
                    <div className={layoutStyles.section_body}>
                        {
                            props.isHomePage ? (
                                <h3 className={layoutStyles.section_title}>
                                    About Me
                                </h3>
                            ) : (
                                <h1
                                    className={layoutStyles.section_title}
                                    style={{
                                        fontSize: "2.5rem",
                                        marginBottom: "1rem"
                                    }}
                                >
                                    About Me
                                </h1>
                            )
                        }

                        <div className={`${aboutMeStyles.section_body}`}>
                            <div className={aboutMeStyles.data_section}>
                                <p>
                                    Hi! my name is Bhaskar Neupane. I am a recent A-Levels graduate and a Full-Stack software developer based in Kathmandu, Nepal. My passion for programming started back in 2015 when I wrote my first proper program using QBasic to solve quadratic equations. Turns out making computer do my maths homework was a fun place to start my journey as a problem solver.
                                </p>
                                <p>
                                    Currently, I am working as a Full-Stack Developer using several Technologies. Additionally, I am learning about Machine and Deep Learning and am looking forward to learn hardware side of things too.
                                </p>
                                <p>
                                    I love to capture memories, it helps to break pattern and helps me stay creative and have a fresh mind. I have few images that I have captured in my <a href="https://instagram.com/vaskrneup" target={"_blank"} className={utilsStyles.link} rel="noreferrer">instagram</a>.
                                </p>

                                <p className={aboutMeStyles.technologies_title}>
                                    Here are few Technologies I&apos;ve worked with:
                                </p>

                                <div className={aboutMeStyles.technologies_grid}>
                                    {
                                        props.aboutMeData
                                            .map((data: technologiesWorkedWithPropsDataType) => {
                                                return (
                                                    <a
                                                        href={data.url}
                                                        key={data.url}
                                                        target={"_blank"}
                                                        rel="noreferrer"
                                                    >
                                                        <TechnologyViewCard
                                                            image={data.icon}
                                                            imageAltText={`${data.name} Icon`}
                                                            name={data.name}
                                                        />
                                                    </a>
                                                );
                                            })
                                    }
                                </div>
                            </div>

                            <div className={aboutMeStyles.image_section}>
                                <img
                                    src="https://pbs.twimg.com/profile_images/1265216954408689665/IkEH5P_j_400x400.jpg"
                                    alt="Bhaskar Neupane"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutMe;