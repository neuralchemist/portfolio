// mui 5
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

type Props = {
  theme: Theme;
};

export const StyledStack = styled(Stack)(({ theme }: Props) => ({
  // border: "1px dashed white",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(2),
}));

export const StyledAboutMe = styled(Box)(({ theme }: Props) => ({
  width: "350px",
//   height: "300px",
  padding: theme.spacing(2),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: theme.spacing(2),

  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",

  [theme.breakpoints.up("sm")]: {
    width: "550px",
  },
}));

export const StyledText = styled(Typography)(({ theme }: Props) => ({
  color: "rgba(0, 0, 0, 0.6)",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.8)",
  },
}));
