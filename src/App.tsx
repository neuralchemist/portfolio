import React from "react";
// mui 5
import Stack from "@mui/material/Stack";
import { styled, Theme } from "@mui/material/styles";
// custom components
import Topbar from "./components/Topbar";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";

type Props = {
  theme: Theme;
};

const AppStack = styled(Stack)(({ theme }: Props) => ({
  maxWidth: "1200px",
  margin: theme.spacing(8, 'auto'),
}));

function App() {
  const headline = "the  stoic  developer".split("");
  console.log(headline);
  return (
    <AppStack direction="column" >
      <Topbar />
      <Projects />
      <TechSkills />
    </AppStack>
  );
}

export default App;
