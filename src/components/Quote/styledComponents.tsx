// mui 5
import { styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

type Props = {
  theme: Theme;
};

export const QuoteTypography = styled(Typography)(({ theme }: Props) => ({
  fontSize: theme.spacing(1.5),
  fontWeight: "lighter",
  color: "rgba(0, 0, 0, 0.5)",
  padding: theme.spacing(2),
  letterSpacing: "1px",
  transition: "300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",

  "&:hover": {
    transform: "scale(1.1)",
    fontWeight: "bold",
  },

  "&::before": {
    content: "open-quote",
  },

  "&::after": {
    content: "close-quote",
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: theme.spacing(2),
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
