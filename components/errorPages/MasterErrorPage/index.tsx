import Link from "next/link";
import { URL_PATH } from "../../../data/urlPath";
import masterErrorPagePropsDataType from "./dataTypes";
import utilsStyle from "../../../styles/Utils.module.scss";
import masterErrorPageStyle from "./MasterErrorPage.module.scss";

const MasterErrorPage = (props: masterErrorPagePropsDataType) => {
    return (
        <div className={utilsStyle.container}>
            <div className={masterErrorPageStyle.error_container}>
                <h1 className={masterErrorPageStyle.title}>
                    {props.errorCode}
                </h1>
                <h2 className={masterErrorPageStyle.message}>
                    {props.errorMessage}
                </h2>
                <p className={masterErrorPageStyle.description}>
                    {props.errorDescription}
                </p>
                <Link
                    href={URL_PATH.homePage()}
                >
                    <a className="btn">
                        Go Home
                    </a>
                </Link>
            </div>
        </div >
    );
};

export default MasterErrorPage;