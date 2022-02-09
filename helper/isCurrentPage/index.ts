import isBrowser from "../isBrowser";

const isCurrentPage = ({ pagePath, check, successReturnData = true, failureReturnData = false }: { pagePath: string, successReturnData?: any, failureReturnData?: any; check?: any; }) => {

    if (check) {
        if (!check()) {
            return failureReturnData;
        }
    }
    if (isBrowser()) {
        if (pagePath === window.location.pathname) {
            return successReturnData;
        }
    }
    return failureReturnData;
};

export default isCurrentPage;