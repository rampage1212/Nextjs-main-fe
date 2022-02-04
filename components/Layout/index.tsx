import Copyright from "../Copyright";
import Navbar from "../Navbar";
import layoutPropsDatatype from "./dataTypes";
import layoutStyles from "./Layout.module.scss";

const Layout = ({ children, setMinHeightOfScreen = false }: layoutPropsDatatype) => {
    return (
        <>
            <Navbar />
            <div
                className={layoutStyles.body_container}
                style={{
                    minHeight: setMinHeightOfScreen === true ? "100vh" : undefined
                }}
            >
                {children}
            </div>
            <Copyright />
        </>
    );
};

export default Layout;