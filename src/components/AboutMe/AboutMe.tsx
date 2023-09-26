import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
import { StyledStack, StyledAboutMe, StyledText } from "./styledComponents";

function AboutMe() {
  return (
    <StyledStack>
      <StyledText variant="h3">About Me</StyledText>
      <StyledAboutMe>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="justify"
          lineHeight="30px"
        >
          Some people want to conquer mountains, Some want to conquer space, but
          I am on a journey more ambitious than the rest - mastering the art and
          science of making great software.
          <br />
          Automating repetitive, soul-draining tasks with code makes me happy.
          Machines should work, so people can dream.
          <br />
          Each project is a unique conquest. Turning the once-impossible into
          reality through hard work is the most gratifying journey.
          <br />
          I want to tackle even more challenging projects. For me, life is
          either a daring adventure or nothing at all.
          <br />— The Stoic Developer
        </Typography>
      </StyledAboutMe>
    </StyledStack>
  );
}

export default AboutMe;
