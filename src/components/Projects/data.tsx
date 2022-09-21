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
    description:
      "It is a responsive, mobile-friendly e-commerce website that scales beautifully from small screens to big ones. The project requirements are designed using Agile methodology and written with progressively enhanced JavaScript code for features like Interactive 'Product Card', 'Animated Promotion Bar', 'Marquee' for recommendation, 'Multi-Step Checkout Form' with validation and 'Stripe Payment'. The aesthetic of the UI is improved using Material UI and CSS animation to increase user interaction and retention. End-to-End tested with cypress. Documentation for high code maintainability. Implemented a fully automated CI / CD pipeline using github and github actions that resulted in error-free development-to-production code delivery. Complete elimination of manual deployment practice resulted in a reduction of average deployment time. Hosted on firebase.",
    icon: <StorefrontIcon />,
  },
  {
    name: "The Issue Tracker",
    github: "https://github.com/neuralchemist/the-issue-tracker",
    demo: "https://issue-tracker-7e447.web.app/",
    description:
      "It is a fully responsive website for teams and companies to track and resolve issues in their projects. The app is designed using agile methodology. Backend is implemented using firebase and firestore as backend-as-a-service. Issues are sorted and color coded according to priority. Data from the backend is cached to optimize network requests. Firestore security rules and permissions are implemented and tested using firestore CLI. Material UI is used to improve the aesthetic of the UI for a better user experience. Users can toggle between dark and light themes. Documented for high code maintainability. Implemented a fully automated CI / CD pipeline using github and github actions that resulted in error-free development-to-production code delivery. Hosted on firebase.",
    icon: <BugReportIcon />,
  },

  {
    name: "The Social Network",
    github: "https://github.com/neuralchemist/the-social-network",
    demo: "https://the-social-network-5ea69.web.app/",
    description:
      "It is a fully responsive social media platform to share content with people. The project requirements are designed using agile methodology. Features like 'Left Bar', 'Left Drawer', 'Feed Card', 'Group Avatar', 'Menu' and others are implemented and enhanced incrementally. 'Card Skeletons' are shown while loading data. Users can toggle between dark and light themes. Material UI is used to improve the aesthetic of the UI for increased user interaction and retention. Documented for high code maintainability. Implemented a fully automated CI / CD pipeline using github and github actions that resulted in error-free development-to-production code delivery. Hosted on firebase.",
    icon: <ChildCareIcon />,
  },
  {
    name: "Weather App",
    github: "https://github.com/neuralchemist/weather-app",
    demo: "https://weather-app-22faf.web.app/",
    description:
      "It is a fully responsive weather app that shows a seven-day weather forecast. User location is accessed with permission using the geolocation api from the browser. Weather data is fetched from a third party API. Materia UI and CSS animations are used to improve the UI aesthetic for a better user experience. Data is cached in local storage to optimize network requests. Used SVG icons which are lightweight and look great in high density displays. End-to-End tested with cypress. Documented for high code maintainability. Implemented a fully automated CI / CD pipeline using github and github actions that resulted in error-free development-to-production code delivery. Hosted on firebase.",
    icon: <CloudIcon />,
  },
  {
    name: "Euro Trip",
    github: "https://github.com/neuralchemist/p5-react-eurotrip",
    demo: "https://p5-react-eurotrip.web.app/",
    description: "A graph engine to traverse connected routes using Breadth-First-Search and Depth-First-Search",
    icon: <NavigationIcon />,
  },
];
