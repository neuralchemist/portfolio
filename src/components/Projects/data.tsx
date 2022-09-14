import StorefrontIcon from "@mui/icons-material/Storefront";
import BugReportIcon from "@mui/icons-material/BugReport";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CloudIcon from "@mui/icons-material/Cloud";

export const projects = [
  {
    name: "Buy Buy",
    github: "https://github.com/neuralchemist/BuyBuy",
    demo: "https://buybuy-e5a76.web.app/",
    description:
      "It is a responsive mobile friendly e-commerce website that scales beautifully from small screens to big ones. The project requirements are designed using Agile methodology and written with progressively enhanced JavaScript code for features like Interactive Product Card, Animated Promotion Bar,  Marquee for recommendation, Multi-step checkout form with form validation and stripe payments. Aesthetic of the UI is improved using Material UI and CSS animation to increase users interaction and retention. End-to-End tested with cypress. Documentation for high code maintainability. Implemented fully automated CI / CD pipeline  using github and github actions that resulted in error free development-to-production code delivery. Complete elimination of manual deployment practice resulted in reduction of average deployment time.",
    icon: <StorefrontIcon />,
  },
  {
    name: "The Issue Tracker",
    github: "https://github.com/neuralchemist/the-issue-tracker",
    demo: "https://issue-tracker-7e447.web.app/",
    description: "track issues within project",
    icon: <BugReportIcon />,
  },

  {
    name: "The Social Network",
    github: "https://github.com/neuralchemist/the-social-network",
    demo: "https://the-social-network-5ea69.web.app/",
    description: "A social platform to share stories with friends",
    icon: <ChildCareIcon />,
  },
  {
    name: "Weather App",
    github: "https://github.com/neuralchemist/weather-app",
    demo: "https://weather-app-22faf.web.app/",
    description: "Weather app shows seven day weather forcast",
    icon: <CloudIcon />,
  },
  {
    name: "Euro Trip",
    github: "https://github.com/neuralchemist/p5-react-eurotrip",
    demo: "https://p5-react-eurotrip.web.app/",
    description: "A graph engine to traverse connected routes",
    icon: null,
  },
];
