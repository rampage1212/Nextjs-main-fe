import css3Logo from "./assets/images/CSS_LOGO.png";
import djangoLogo from "./assets/images/DJANGO_LOGO.png";
import dockerLogo from "./assets/images/DOCKER_LOGO.png";
import djangoRestFrameworkLogo from "./assets/images/DRF_LOGO.png";
import gitLogo from "./assets/images/GIT_LOGO.png";
import html5Logo from "./assets/images/HTML_LOGO.png";
import javascriptLogo from "./assets/images/JAVASCRIPT_LOGO.png";
import materialUILogo from "./assets/images/MUI_LOGO.png";
import postgreSQLLogo from "./assets/images/POSTGRES_LOGO.png";
import pythonLogo from "./assets/images/PYTHON_LOGO.png";
import reactLogo from "./assets/images/REACT_JS_LOGO.png";
import tailwindCssLogo from "./assets/images/TAILWIND_CSS_LOGO.png";
import typeScriptLogo from "./assets/images/TYPESCRIPT_LOGO.png";
import TechnologiesWorkedWith from "./dataTypes";


const TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST: TechnologiesWorkedWith[] = [
    new TechnologiesWorkedWith({
        name: "Python",
        icon: pythonLogo.src,
        url: "https://www.python.org/"
    }),
    new TechnologiesWorkedWith({
        name: "Django",
        icon: djangoLogo.src,
        url: "https://www.djangoproject.com/"
    }),
    new TechnologiesWorkedWith({
        name: "Django Rest Framework",
        icon: djangoRestFrameworkLogo.src,
        url: "https://www.django-rest-framework.org/"
    }),
    new TechnologiesWorkedWith({
        name: "PostgreSQL",
        icon: postgreSQLLogo.src,
        url: "https://www.postgresql.org/"
    }),
    new TechnologiesWorkedWith({
        name: "Docker",
        icon: dockerLogo.src,
        url: "https://www.docker.com/"
    }),
    new TechnologiesWorkedWith({
        name: "HTML5",
        icon: html5Logo.src,
        url: "https://en.wikipedia.org/wiki/HTML5"
    }),
    new TechnologiesWorkedWith({
        name: "CSS3",
        icon: css3Logo.src,
        url: "https://en.wikipedia.org/wiki/CSS"
    }),
    new TechnologiesWorkedWith({
        name: "Javascript",
        icon: javascriptLogo.src,
        url: "https://en.wikipedia.org/wiki/JavaScript"
    }),
    new TechnologiesWorkedWith({
        name: "Typescript",
        icon: typeScriptLogo.src,
        url: "https://www.typescriptlang.org/"
    }),
    new TechnologiesWorkedWith({
        name: "React",
        icon: reactLogo.src,
        url: "https://reactjs.org/"
    }),
    new TechnologiesWorkedWith({
        name: "TailwindCSS",
        icon: tailwindCssLogo.src,
        url: "https://tailwindcss.com/"
    }),
    new TechnologiesWorkedWith({
        name: "Material-UI",
        icon: materialUILogo.src,
        url: "https://mui.com/"
    }),
    new TechnologiesWorkedWith({
        name: "GIT",
        icon: gitLogo.src,
        url: "https://git-scm.com/about"
    }),
];


export default TECHNOLOGIES_I_HAVE_WORKED_WITH_LIST;