import fs from "fs";
import getConfig from "next/config";

const getAllFilePath = (path: string) => {
    const addData = (_paths: string[]) => {
        const newFoldersToScrape: string[] = [];

        _paths.forEach(_path => {
            fs.readdirSync(_path).forEach((file: string) => {
                if (file.indexOf(".") === -1) {
                    newFoldersToScrape.push(`${_path}/${file}`);
                } else {
                    filePaths.push(`${_path}/${file}`);
                }
            });
        });

        foldersToScrape = newFoldersToScrape;
    };

    const baseDirPath = `${getConfig().serverRuntimeConfig.basePath}/${path}`;
    let foldersToScrape: string[] = [];
    const filePaths: string[] = [];

    addData([baseDirPath]);

    while (foldersToScrape.length !== 0) {
        addData(foldersToScrape);
    }

    return filePaths;
};

export default getAllFilePath;