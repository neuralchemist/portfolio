// mui 5
import { styled, Theme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
  theme: Theme;
};

export const IconStack = styled(Stack)(({ theme }: Props) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "70px",
  height: "100px",

  gap: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.6)",

  "&:hover": {
    color: "rgba(0, 0, 0, 0.8)",
  },

  [theme.breakpoints.up("sm")]: {
    width: "100px",
    height: "100px",
  },
}));

export const StyledIcon = styled(Box)(({ theme }: Props) => ({
  width: "30px",
  height: "30px",
  "&:hover": {
    transform: "scale(1.1)",
  },

  [theme.breakpoints.up("sm")]: {
    width: "40px",
    height: "40px",
  },
}));

export const StyledTypography = styled(Typography)(({ theme }: Props) => ({
  width: "100%",
  textAlign: "center",
  fontSize: theme.spacing(1.25),
  fontWeight: "bold",

  [theme.breakpoints.up("sm")]: {
    fontSize: theme.spacing(1.5),
  },
}));
