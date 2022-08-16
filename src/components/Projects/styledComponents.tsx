// mui 5
import { styled, Theme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Props = {
  theme: Theme;
};

export const ProjectStack = styled(Stack)(({ theme }: Props) => ({
  // border: "1px dashed white",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  marginTop: theme.spacing(8),
}));

export const ProjectText = styled(Typography)(({ theme }: Props) => ({
  color: "rgba(0, 0, 0, 0.6)",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.8)",
  },
}));
