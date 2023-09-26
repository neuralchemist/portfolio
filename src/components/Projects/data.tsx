import StorefrontIcon from "@mui/icons-material/Storefront";
import BugReportIcon from "@mui/icons-material/BugReport";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CloudIcon from "@mui/icons-material/Cloud";
import NavigationIcon from "@mui/icons-material/Navigation";

export const projects = [
  {
    name: "The Issue Tracker",
    github: "https://github.com/neuralchemist/issue-tracker-ts",
    demo: "https://issue-tracker-ts-a1c69.web.app/",
    description: [
      "Welcome to the Full-Stack Issue Tracking App!",
      "This project uses React and Firebase.",
      "With this application, you can collaborate on projects with your team members and keep track of issues that arise in the project.",
      "I've leveraged my expertise in modern software development practices and methodologies to create an application that's functional, maintainable, and secure.",
    ],
    icon: <BugReportIcon />,
    techStack: [
      "react",
      "typescript",
      "react-router",
      "material-ui",
      "react-hook-form",
      "react-query",
      "firebase",
      "github",
      "github-action",
      "css3",
    ],
  },

  {
    name: "Realtime Kanban",
    github: "https://github.com/neuralchemist/realtime-kanban-app",
    demo: "",
    description: [
      "Welcome to the Full-stack Real-time Kanban App with drag-and-drop!",
      "This project uses the MERN stack (MongoDB, Express, React & Nodejs).",
      "It is designed for freelancers and startups, but can also be used for almost any sized company.",
      "With this application, you can collaborate on projects with your team members from all over the world in real time.",
      "I've leveraged my expertise in modern software development practices and methodologies to create an application that's both functional and maintainable.",
    ],
    icon: <BugReportIcon />,
    techStack: [
      "react",
      "typescript",
      "react-router",
      "material-ui",
      "react-hook-form",
      "react-query",
      "react-testing-library",
      "socket.io",
      "github",
      "nodejs",
      "mongodb",
    ],
  },

  {
    name: "Buy Buy",
    github: "https://github.com/neuralchemist/BuyBuy",
    demo: "https://buybuy-e5a76.web.app/",
    description: [
      "It is a mobile-friendly e-commerce website that scales beautifully from small screens to big ones.",
      "The project requirements are designed using Agile methodology. Each of the feature is separated into module using SOLID and DRY design principle so that the functionality can be easily extended and reused in future.",
      "Used optimized react code and SVG images for faster page load time. The aesthetic of the UI is improved using Material UI and CSS animation to increase user engagement and conversion.",
      "The data is fetched from Rest Api. End-to-End tested with cypress. Documentation for high code maintainability.",
      "Implemented a fully automated CI / CD pipeline using github and github actions that resulted in error-free development-to-production code delivery. Complete elimination of manual deployment practice resulted in a reduction of average deployment time. Hosted on firebase.",
    ],
    icon: <StorefrontIcon />,
    techStack: [
      "react",
      "javascript",
      "react-router",
      "material-ui",
      "react-hook-form",
      "cypress",
      "github",
      "github-action",
      "rest-api",
      "css3",
    ],
  },
  {
    name: "The Social Network",
    github: "https://github.com/neuralchemist/the-social-network",
    demo: "https://the-social-network-5ea69.web.app/",
    description: [
      "It is a fully responsive social media platform to share content with people.",
      "The project requirements are designed using agile methodology. Features  are implemented and enhanced incrementally using SOLID and DRY design principles.",
      "Material UI is used to improve the aesthetic and accessibility of the UI for increased user engagement and conversions. 'Card Skeletons' are shown while loading data. Users can toggle between dark and light themes.",
      "Documented for high code maintainability. Used optimized react code and SVG images for faster page load time",
      "Implemented a fully automated CI / CD pipeline using github and github actions for rapid and  error-free development-to-production code delivery. Hosted on firebase.",
    ],
    icon: <ChildCareIcon />,
    techStack: [
      "react",
      "typescript",
      "material-ui",
      "github",
      "github-action",
      "css3",
    ],
  },
  {
    name: "Weather App",
    github: "https://github.com/neuralchemist/weather-app",
    demo: "https://weather-app-22faf.web.app/",
    description: [
      "It is a fully responsive weather app that shows a seven-day weather forecast.",
      "User location is accessed with permission using the geolocation api from the browser. Weather data is fetched from a third party Rest API.",
      "Materia UI and CSS animations are used to improve the UI aesthetic and accessibility for a better user experience. Data is cached in local storage to optimize network requests. Used SVG icons which are lightweight and look great in high density displays.",
      "End-to-End tested with cypress. Documented for high code maintainability. Implemented a fully automated CI / CD pipeline using github and github actions. Hosted on firebase.",
    ],
    icon: <CloudIcon />,
    techStack: [
      "react",
      "typescript",
      "material-ui",
      "cypress",
      "github",
      "github-action",
      "css3",
      "rest-api",
    ],
  },
  {
    name: "Euro Trip",
    github: "https://github.com/neuralchemist/p5-react-eurotrip",
    demo: "https://p5-react-eurotrip.web.app/",
    description: [
      "A graph engine to traverse connected routes using Breadth-First-Search and Depth-First-Search",
    ],
    icon: <NavigationIcon />,
    techStack: ["github", "github-action", "css3"],
  },
];
