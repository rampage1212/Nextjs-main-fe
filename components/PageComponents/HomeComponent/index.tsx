import AboutMe from "./AboutMe";
import homeComponentsPropsDataType from "./dataTypes";
import Intro from "./Intro";

const HomeComponent = (props: homeComponentsPropsDataType) => {
    return (
        <>
            <Intro />
            <AboutMe
                {...props}
            />
        </>
    );
};

export default HomeComponent;