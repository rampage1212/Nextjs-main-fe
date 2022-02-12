import fs from "fs";
import getConfig from "next/config";
import getTextFromUrlOrFilePathDataType from "./dataTypes";

export const getTextFromUrlOrFilePath = async ({ filePathOrUrl, appendBasePath = false }: getTextFromUrlOrFilePathDataType) => {
    let finalData = "";

    if (filePathOrUrl.startsWith("http://") || filePathOrUrl.startsWith("https://")) {
        finalData = await fetch(filePathOrUrl).then(res => res.text());
    } else {
        if (appendBasePath) {
            filePathOrUrl = `${getConfig().serverRuntimeConfig.basePath}${filePathOrUrl}`;
        }

        finalData = fs.readFileSync(
            filePathOrUrl,
            "utf8"
        );
    }

    return finalData;
};