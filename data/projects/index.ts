import query from "../../helper/query";
import ProjectDataContainer, { getBlogsDataPropsDataType } from "./dataTypes";

export const PROJECT_DATA: ProjectDataContainer[] = [
    new ProjectDataContainer(
        {
            id: "spreadsheet",
            mainLink: "https://sheets.vaskrneup.com/",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/spreadsheet.png",
            projectName: "Spreadsheet",
            projectFor: "Leapfrog Technology, Internship",
            githubLink: "https://github.com/vaskrneup/GoogleSheetsClone",
            demoLink: "https://sheets.vaskrneup.com/",
            projectDescription: "I built this web application with plain HTML, CSS and Javascript during my internship in Leapfrog Technology. It have few features that is available in google sheets or in other words it have basic features and formulae for doing calculations in spreadsheet.",
            projectTags: ["project", "javascript", "html", "css", "spreadsheet"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "flappy-bird-game",
            mainLink: "https://flappybird.vaskrneup.com",
            projectImage: "/assets/images/project_demos/flappy_bird.png",
            projectName: "Flappy Bird Game",
            projectFor: "Leapfrog Technology, Internship",
            githubLink: "https://github.com/vaskrneup/FlappyBird",
            demoLink: "http://flappybird.vaskrneup.com/",
            projectDescription: "I developed this game with plain HTML, CSS and Javascript in a single day during my internship in Leapfrog Technology. As I have never worked on making games, it was a difficult task. But like everything else, if you give it a try you can accomplish that without any issue",
            projectTags: ["project", "javascript", "html", "css", "game", "flappy-bird"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "kpn-staff-management-app",
            mainLink: "https://kkpn.pythonanywhere.com/",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/kpn_admin.png",
            projectName: "KPN Admin",
            projectFor: "K.P.N. & Associates",
            demoLink: "https://kkpn.pythonanywhere.com/",
            projectDescription: "I developed this web application, to help my uncle better manage his office status, provide better visualization of what is happening, automate daily tasks and many more.",
            projectTags: ["project", "html", "css", "javascript", "product", "python", "django"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "phishing-site-destroyer",
            mainLink: "https://github.com/vaskrneup/PhishingSiteDestroyer",
            githubLink: "https://github.com/vaskrneup/PhishingSiteDestroyer",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/phishing_site_destroyer.jpg",
            projectName: "Phishing Site Destroyer",
            projectFor: "Personal Project",
            projectDescription: "I have seen many phishing sites ads appearing on my Facebook. Although, I can tell it’s a fake site but many Nepalese can’t.So, I have written this script to flood phishing sites' databases with fake data to make it harder for attackers to find real credentials.",
            projectTags: ["project", "python", "phishing", "script"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "nepse-data-analysis",
            mainLink: "https://github.com/vaskrneup/DataAnalysis",
            githubLink: "https://github.com/vaskrneup/DataAnalysis",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/NEPSE_analysis.jpg",
            projectName: "NEPSE Tools (Data Analysis)",
            projectFor: "Personal Project",
            projectDescription: "Nepal being a developing country doesn't have many facilities that Developed Nations have. One of them is easy access to historical data of the Financial Market. I have faced many issues when trying to get historical stock prices for analysis. So, I have written a few APIs for getting data from various sites, to do repetitive tasks on meroshare and many more. Also, I have created a few libraries to make market predictions using various indicators but they are not always accurate.",
            projectTags: ["project", "python", "finance", "automation", "api"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "command-based-discord-bot",
            mainLink: "https://github.com/vaskrneup/DiscordBot",
            githubLink: "https://github.com/vaskrneup/DiscordBot",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/discord_bot.jpg",
            projectName: "Discord Bot",
            projectFor: "Personal Project",
            projectDescription: "This simply makes writing, command based Discord bot really easy. It consists of predefined way of writing commands with access to all the things that you ever need from Discord Main package. Additionally, it automatically parses the command just using a simple decorator and it consists many more features.",
            projectTags: ["project", "python", "automation", "api", "bot"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "automated-ip-changer-using-tor",
            mainLink: "https://github.com/vaskrneup/IpChanger",
            githubLink: "https://github.com/vaskrneup/IpChanger",
            projectDetailsMarkdownLink: "https://raw.githubusercontent.com/vaskrneup/IpChanger/main/README.md",
            projectImage: "/assets/images/project_demos/ip_changer.jpg",
            projectName: "TOR IP Changer",
            projectFor: "Personal Project",
            projectDescription: "Want not to be seen on the internet? Then this is the perfect script for that purpose. Additionally, you will help the TOR network to be more anonymous. It's a win win for both. This script provides a way of managing how your TOR proxy will work so that you can focus on what you want rather than looking at technical issues.",
            projectTags: ["project", "python", "TOR", "proxy", "automation"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "js-bouncy-ball",
            mainLink: "https://vaskrneup.github.io/JsBouncyBall/",
            githubLink: "https://github.com/vaskrneup/JsBouncyBall",
            demoLink: "https://vaskrneup.github.io/JsBouncyBall/",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/js_bouncy_ball_image.png",
            projectName: "1D Bouncy Ball",
            projectFor: "Leapfrog Technology, Internship",
            projectDescription: "I made this simulation using plain Javascript, HTML and CSS during my internship in Leapfrog Technology. There were few maths involved here and there to make sure the collision happens in the best possible way, and making sure that the balls wont stuck. It was challenging and fun thing to figure out.",
            projectTags: ["project", "simulation", "html", "css", "js"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "bash-clone-for-windows",
            mainLink: "https://github.com/vaskrneup/bash_V4",
            githubLink: "https://github.com/vaskrneup/bash_V4",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/bash_v4.png",
            projectName: "Bash Clone for Windows",
            projectFor: "Personal Project",
            projectDescription: "Back in the days, Windows default Command Line Interface didn't used to have better visuals like that of linux based OS. So, I have made this replacement for the default terminal with several features like, providing support for custom commands, encryption/decryption of files and many more.",
            projectTags: ["project", "python", "CLI", "windows"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "facebook-messenger-automation-script",
            mainLink: "https://github.com/vaskrneup/Messenger",
            githubLink: "https://github.com/vaskrneup/Messenger",
            projectDetailsMarkdownLink: "https://raw.githubusercontent.com/vaskrneup/Messenger/master/README.md",
            projectImage: "/assets/images/project_demos/messenger_automation.jpg",
            projectName: "Facebook Messenger Automation",
            projectFor: "Personal Project",
            projectDescription: "A simple selenium based application to automate repetitive tasks in Facebook Messenger. It have many features like scheduling a message on Facebook, easy login, repeat messages, automatic reply and many more.",
            projectTags: ["project", "python", "automation", "api", "facebook-messenger", "selenium"]
        }
    ),
    new ProjectDataContainer(
        {
            id: "twitter-data-scraper",
            mainLink: "https://github.com/vaskrneup/TwitterScraperAPI",
            githubLink: "https://github.com/vaskrneup/TwitterScraperAPI",
            projectDetailsMarkdownLink: "",
            projectImage: "/assets/images/project_demos/twitter_scraping.jpg",
            projectName: "Twitter Data Scraper",
            projectFor: "Personal Project",
            projectDescription: "A easy to use simple script to extract data from twitter. It uses twitter's old website to extract data from the site without being blocked.",
            projectTags: ["project", "python", "automation", "scraper", "bot", "twitter"]
        }
    ),
];


export const getProjectData = (data: getBlogsDataPropsDataType): ProjectDataContainer[] => {
    if (data.query) {
        return <ProjectDataContainer[]>query({
            data: PROJECT_DATA,
            query: data.query,
            wrapper: ProjectDataContainer
        }).slice(0, data.numberOfProjects);
    } else {
        return PROJECT_DATA.slice(0, data.numberOfProjects);
    }
};