// mui 5
import { styled, Theme, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";

type Props = {
  theme: Theme;
};

const forwardSlide = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const backwardSlide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const StyledCarousel = styled(Box)(({ theme }: Props) => ({
  width: "100%",
  height: "430px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1.5),

  [theme.breakpoints.up("sm")]: {
    width: "550px",
  },
}));

export const StyledCardContainer = styled(Box)(({ theme }: Props) => ({
  width: "100%",
  height: "80%",
  overflow: "hidden",
  position: "relative",
}));

export const StyledForwardSlide = styled(Box)(({ theme }: Props) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  transform: "translateX(0%)",
  animation: `${forwardSlide} 800ms ease-in-out`,
}));

export const StyledBackwardSlide = styled(Box)(({ theme }: Props) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  transform: "translateX(0%)",
  animation: `${backwardSlide} 800ms ease-in-out`,
}));

export const StyledMobileStepper = styled(MobileStepper)(
  ({ theme }: Props) => ({
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(0, 0, 0, 0.6)",
    color: "white",
  })
);
