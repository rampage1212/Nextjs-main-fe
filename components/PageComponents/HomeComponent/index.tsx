import AboutMe from "./AboutMe";
import Blogs from "./Blogs";
import Contact from "./Contact";
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
            <Blogs
                {...props}
            />
            <Contact />
        </>
    );
};

export default HomeComponent;