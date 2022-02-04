import Navbar from "../Navbar";
import layoutPropsDatatype from "./dataTypes";
import utilsStyles from "../../styles/Utils.module.scss";

const Layout = (props: layoutPropsDatatype) => {
    return (
        <>
            <Navbar />
            <div className={utilsStyles.container}>
                {props.children}
            </div>
        </>
    );
};

export default Layout;