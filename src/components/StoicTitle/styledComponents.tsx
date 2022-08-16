// mui 5
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  theme: Theme;
};

export const TitleBox = styled(Box)(({ theme }: Props) => ({
  display: "flex",
  gap: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(1.5),
  },
}));

export const TitleTypography = styled(Typography)(({ theme }: Props) => ({
  fontSize: theme.spacing(2.5),
  fontWeight: "lighter",
  textTransform: "uppercase",
  color: "rgba(0, 0, 0, 0.5)",
  padding: theme.spacing(1, 0),
  transition: "300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",

  "&:hover": {
    transform: "scale(1.5)",
    color: "#fff",
    fontWeight: "bold",
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: theme.spacing(4),
    padding: theme.spacing(2, 0),
  },
}));
