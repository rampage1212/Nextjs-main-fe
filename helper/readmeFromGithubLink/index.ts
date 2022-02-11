const readmeFromGithubLink = ({ link, branch = "main" }: { link: string, branch?: string; }) => {
    // https://raw.githubusercontent.com/vaskrneup/GoogleSheetsClone/main/README_vaskrneup.md
    link = link.replace("https://github.com", "https://raw.githubusercontent.com");
    link = `${link}/${branch}/README_vaskrneup.md`;
    return link;
};

export default readmeFromGithubLink;