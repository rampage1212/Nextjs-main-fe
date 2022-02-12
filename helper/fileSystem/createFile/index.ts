import getConfig from "next/config";
import fs from "fs";
import createFilePropsDataType from "./dataTypes";

const createFile = ({ folderPath, fileContent, fileName = "index.md" }: createFilePropsDataType) => {
    const _folderPath = `${getConfig().serverRuntimeConfig.basePath}${folderPath}`;
    const _filePath = `${_folderPath}/${fileName}`;

    if (!fs.existsSync(_folderPath)) {
        fs.mkdirSync(_folderPath, { recursive: true });
    }

    if (!fs.existsSync(_filePath)) {
        fs.writeFile(_filePath, fileContent, (err) => {
            if (err) throw err;

            console.log(`[+] "${_filePath}" created.`);
            return true;
        });
    }

    return false;
};

export default createFile;