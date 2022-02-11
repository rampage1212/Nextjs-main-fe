import MasterErrorPage from "../components/errorPages/MasterErrorPage";

const Error500Page = () => {
    return (
        <MasterErrorPage
            errorCode="500"
            errorMessage="Internal Server Error"
            errorDescription="We are having some issues. Please come back later."
        />
    );
};

export default Error500Page;