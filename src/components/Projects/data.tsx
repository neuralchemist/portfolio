import StorefrontIcon from "@mui/icons-material/Storefront";
import BugReportIcon from "@mui/icons-material/BugReport";

export const projects = [
  {
    name: "Euro Trip",
    github: "https://github.com/neuralchemist/p5-react-eurotrip",
    demo: "https://p5-react-eurotrip.web.app/",
    description: "A graph engine to traverse connected routes",
    icon: null,
  },

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
    description: "A SaaS to track issue within projects",
    icon: <BugReportIcon />,
  },
];
