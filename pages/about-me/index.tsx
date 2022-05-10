import { GetStaticProps } from "next";
import AboutMePagesComponentPropsDataType from "../../components/PageComponents/AboutMePageComponent/dataType";
import AboutMeComponent from "../../components/PageComponents/HomeComponent/AboutMe";
import MetaManager from "../../components/utils/MetaManager";
import { META_IMAGES } from "../../data/constants";
import TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST from "../../data/technologiesWorkedWith";

const AboutMe = (props: AboutMePagesComponentPropsDataType) => {
    return (
        <>
            <MetaManager
                title="About Me"
                keywords={["about", "Bhaskar Neupane", "vaskrneup"]}
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: "I am a recent A-Levels graduate and a Full-Stack software developer based in Toronto, Canada.",
                    title: "About Me",
                    imageUrl: META_IMAGES.aboutMeImage,
                    type: "blog",
                }}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />
            <AboutMeComponent
                {...props}
            />
        </>
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            aboutMeData: TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST.map(data => data.data),
            isHomePage: false,
        }
    };
};

export default AboutMe;