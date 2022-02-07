import AboutMe from "./AboutMe";
import homeComponentsPropsDataType from "./dataTypes";
import Intro from "./Intro";
import Projects from "./Projects";

const HomeComponent = (props: homeComponentsPropsDataType) => {
    return (
        <>
            <Intro />
            <AboutMe
                {...props}
            />
            <Projects
                {...props}
            />
        </>
    );
};

export default HomeComponent;