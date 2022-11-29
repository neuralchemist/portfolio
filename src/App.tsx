import React, { useEffect } from "react";
// mui 5
import Stack from "@mui/material/Stack";
import { styled, Theme } from "@mui/material/styles";
// custom components
import Topbar from "./components/Topbar";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";
import AboutMe from "./components/AboutMe";
// firebase analytics
import { logEvent } from "firebase/analytics";
import { analytics } from "./Firebase/firebase-config";

type Props = {
  theme: Theme;
};

const AppStack = styled(Stack)(({ theme }: Props) => ({
  maxWidth: "1200px",
  margin: theme.spacing(8, "auto"),
}));

function App() {
  useEffect(() => {
    // firebase analytics on home page visit
    logEvent(analytics, "screen_view", {
      firebase_screen: "homepage_visit",
    });
  }, []);
  return (
    <AppStack direction="column">
      <Topbar />
      <Projects />
      <TechSkills />
      <AboutMe />
    </AppStack>
  );
}

export default App;
