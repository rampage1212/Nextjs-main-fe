import Copyright from "../Copyright";
import Navbar from "../Navbar";
import layoutPropsDatatype from "./dataTypes";
import layoutStyles from "./Layout.module.scss";

const Layout = (props: layoutPropsDatatype) => {
    return (
        <>
            <Navbar />
            <div className={layoutStyles.body_container}>
                {props.children}
            </div>
            <Copyright />
        </>
    );
};

export default Layout;