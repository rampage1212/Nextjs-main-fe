import LogoMakerPropsDataType from "./dataTypes";
import logoMakerStyles from "./LogoMaker.module.scss";

const LogoMaker = (props: LogoMakerPropsDataType) => {
    return (
        <div className={logoMakerStyles.logo_maker} id="logo_maker">
            <div className={logoMakerStyles.main_letter_wrapper}>
                {props.mainChar}
            </div>
            <div className={logoMakerStyles.name_wrapper}>
                {props.name}
            </div>
        </div>
    );
};

export default LogoMaker;