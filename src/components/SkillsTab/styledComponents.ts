// mui 5
import { styled, Theme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

type Props = {
  theme: Theme;
};

export const StyledSkillsTab = styled(Box)(({ theme }: Props) => ({
  display: "flex",
  flexDirection: "row",
  width: "350px",
  height: "300px",

  border: "1px solid rgba(255, 255, 255, 0.3)",
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  borderRadius: theme.spacing(4),

  [theme.breakpoints.up("sm")]: {
    width: "550px",
  },
}));

export const StyledTabs = styled(Tabs)(({ theme }: Props) => ({

  borderRight: "2px solid rgba(255, 255, 255, 0.3)",
  maxWidth: "150px",
}));

export const StyledPanelBox = styled(Box)(({ theme }: Props) => ({
  padding: theme.spacing(1),
  width: "100%",
  height: "100%",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
}));

export const StyledGridContainer = styled(Grid)(({ theme }: Props) => ({
  height: "auto",
  [theme.breakpoints.up("sm")]: {
    // width: "550px",
  },
}));
