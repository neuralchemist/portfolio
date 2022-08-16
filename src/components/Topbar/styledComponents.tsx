// mui 5
import { styled, Theme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

type Props = {
  theme: Theme;
};

export const TopbarStack = styled(Stack)(({ theme }: Props) => ({
  // border: "1px dashed white",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3, 0),
  height: "100%",
}));

