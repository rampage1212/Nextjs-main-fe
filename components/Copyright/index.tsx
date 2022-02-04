import utilsStyles from "../../styles/Utils.module.scss";
import copyrightStyles from "./Copyright.module.scss";

const Copyright = () => {
    return (
        <div className={copyrightStyles.copyright_container}>
            <div className={utilsStyles.container}>
                <div className={copyrightStyles.copyright}>
                    &#169; Bhaskar Neupane {(new Date()).getFullYear()}
                </div>
            </div>
        </div>
    );
};

export default Copyright;