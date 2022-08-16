// mui 5
import { styled, Theme } from "@mui/material/styles";
import Button from "@mui/material/Button";

type Props = {
  theme: Theme;
};

export const GithubButton = styled(Button)(({ theme }: Props) => ({
  borderRadius: theme.spacing(2),
  border: "1px solid rgba(0, 0, 0, 0.5)",
  color: "rgba(0, 0, 0, 0.5)",
  fontSize: theme.spacing(2),
  fontWeight: "bold",
  textTransform: "uppercase",
  marginTop: theme.spacing(2),
  "&:hover": {
    fontWeight: "bold",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    color: "rgba(0, 0, 0, 0.8)",
  },
}));
