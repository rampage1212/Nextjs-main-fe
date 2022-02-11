import MasterErrorPage from "../components/errorPages/MasterErrorPage";

const Error404Page = () => {
    return (
        <MasterErrorPage
            errorCode="404"
            errorMessage="Page Not Found"
            errorDescription="Seems like you are lost. you'll surely find what you are looking for back home."
        />
    );
};

export default Error404Page;