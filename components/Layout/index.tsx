import utilsStyles from "../../styles/Utils.module.scss";
import layoutStyles from "./Layout.module.scss";
import Copyright from "../Copyright";
import Navbar from "../Navbar";
import layoutPropsDatatype from "./dataTypes";

const Layout = (props: layoutPropsDatatype) => {
    return (
        <>
            <Navbar />
            <div className={layoutStyles.body_container}>
                <div className={utilsStyles.container}>
                    {props.children}
                </div>
            </div>
            <Copyright />
        </>
    );
};

export default Layout;