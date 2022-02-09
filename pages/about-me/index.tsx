import { GetStaticProps } from "next";
import AboutMePagesComponentPropsDataType from "../../components/PageComponents/AboutMePageComponent/dataType";
import AboutMeComponent from "../../components/PageComponents/HomeComponent/AboutMe";
import TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST from "../../data/technologiesWorkedWith";

const AboutMe = (props: AboutMePagesComponentPropsDataType) => {
    return (
        <AboutMeComponent
            {...props}
        />
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