// mui 5
import { styled, Theme, keyframes } from "@mui/material/styles";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

type Props = {
  theme: Theme;
};

const floatAnimation = keyframes`

  0% {
    box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
  }
  50% {
    box-shadow: 0 24px 16px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-20px);
  }
  100% {
    box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
  }
`;

export const MonkAvatar = styled(SelfImprovementIcon)(({ theme }: Props) => ({
  width: "100px",
  height: "100px",
  color: "rgba(0, 0, 0, 0.4)",
  border: "4px solid rgba(236, 228, 228, 0.2)",
  borderRadius: "50%",
  margin: theme.spacing(1, 0),

  boxShadow: "0 4px 16px 0px rgba(0, 0, 0, 0.6)",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.6)",
    border: "4px solid rgba(236, 228, 228, 0.4)",
  },

  transform: "translateY(0px)",
  animation: `${floatAnimation} 8s ease-in-out infinite`,

  [theme.breakpoints.up("sm")]: {
    width: "140px",
    height: "140px",
  },
}));
