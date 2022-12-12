import StorefrontIcon from "@mui/icons-material/Storefront";
import BugReportIcon from "@mui/icons-material/BugReport";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CloudIcon from "@mui/icons-material/Cloud";
import NavigationIcon from "@mui/icons-material/Navigation";

export const projects = [
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
  },
  {
    name: "The Issue Tracker",
    github: "https://github.com/neuralchemist/the-issue-tracker",
    demo: "https://issue-tracker-7e447.web.app/",
    description: [
      "It is a fully responsive website for teams and companies to track and resolve issues in their projects.",
      "The app is designed using agile methodology. Used industry-standard software development  SOLID and DRY design principles so that features can be easily reused and extended in the future.",
      "Authorization, Authentication and Session is implemented using firebase. Firestore is used for data storage.",
      "Issues are sorted and color coded according to priority. Data from the backend is cached to optimize network requests. Firestore security rules and permissions are implemented and tested using firestore CLI.", 
      "Material UI is used to improve the aesthetic and accessibility of the UI for a better user experience. Users can toggle between dark and light themes. Documented for high code maintainability.", 
      "Implemented a fully automated CI / CD pipeline using github and github actions that resulted in error-free development-to-production code delivery. Hosted on firebase.",
    ],
    icon: <BugReportIcon />,
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
  },
  {
    name: "Euro Trip",
    github: "https://github.com/neuralchemist/p5-react-eurotrip",
    demo: "https://p5-react-eurotrip.web.app/",
    description: [
      "A graph engine to traverse connected routes using Breadth-First-Search and Depth-First-Search",
    ],
    icon: <NavigationIcon />,
  },
];
