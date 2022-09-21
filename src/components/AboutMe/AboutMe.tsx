import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
import { StyledStack, StyledAboutMe, StyledText } from "./styledComponents";

function AboutMe() {
  return (
    <StyledStack>
      <StyledText variant="h3">About Me</StyledText>
      <StyledAboutMe>
        <Typography variant="body1" color="text.secondary" textAlign="justify" lineHeight="30px">
          Some people want to conquer the mountains, some want to conquer the
          space. I want to embark on a journey which is much more ambitious than
          the rest - mastering the art and science of making great software.
          <br />
          Boring, repetitive tasks which make people miserable, automating them
          with software makes me happy. Machines should do the work so that
          people have time to think.
          <br />
          Each project is a conquest of its own. What seemed impossible before,
          then working hard on it and seeing it work is the most satisfying
          experience of working on any project.
          <br />
          My goal is to keep working on projects which are even more challenging
          than the ones before. After all, life is either a daring adventure or
          nothing at all.
          <br />— The Stoic Developer
        </Typography>
      </StyledAboutMe>
    </StyledStack>
  );
}

export default AboutMe;
