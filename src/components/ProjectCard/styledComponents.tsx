// mui 5
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

type Props = {
  theme: Theme;
};

export const CustomCard = styled(Card)(({ theme }: Props) => ({
  width: "100%",
  height: "100%",
  // padding: theme.spacing(1),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: theme.spacing(2),

  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
}));

export const CustomCardContent = styled(CardContent)(({ theme }: Props) => ({
  height: "220px",
  padding: theme.spacing(2),
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "10px",
    height: "10px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },

  "&::-webkit-scrollbar-track": {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
}));

export const StyledCardActions = styled(CardActions)(({ theme }: Props) => ({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  padding: "16px 0",
}));

export const CustomButton = styled(Button)(({ theme }: Props) => ({
  borderRadius: theme.spacing(2),
  border: "1px solid rgba(0, 0, 0, 0.6)",
  fontSize: theme.spacing(1.5),
  color: "rgba(0, 0, 0, 0.6)",
  "&:hover": {
    fontWeight: "bold",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    color: "rgba(0, 0, 0, 0.8)",
  },
}));

export const StyledTechIcons = styled(CardActions)(({ theme }: Props) => ({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  padding: "8px 0",
}));

export const StyledIcon = styled(Box)(({ theme }: Props) => ({
  width: "15px",
  height: "15px",
  // transition
  transform: "scale(1)",
  filter: "grayscale(0.7)",
  transition: "filter, scale, 300ms ease",
  // hover
  "&:hover": {
    transform: "scale(1.1)",
    filter: "grayscale(0)",
    transition: "filter, scale, 300ms ease",
  },

  [theme.breakpoints.up("sm")]: {
    width: "20px",
    height: "20px",
  },
}));
