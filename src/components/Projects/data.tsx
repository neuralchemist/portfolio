import StorefrontIcon from "@mui/icons-material/Storefront";
import BugReportIcon from "@mui/icons-material/BugReport";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CloudIcon from '@mui/icons-material/Cloud';

export const projects = [
  
  {
    name: "Buy Buy",
    github: "https://github.com/neuralchemist/BuyBuy",
    demo: "https://buybuy-e5a76.web.app/",
    description: "Ecommerce site with stripe payment",
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
