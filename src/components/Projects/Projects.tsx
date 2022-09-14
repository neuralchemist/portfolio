import React from "react";
// custom components
import Carousel from "../Carousel";
import { StyledStack, StyledText } from "./styledComponents";
// data
import { projects } from "./data";

function Projects() {
  return (
    <StyledStack>
      <StyledText variant="h3">Projects</StyledText>
      <Carousel slides={projects} />
    </StyledStack>
  );
}

export default Projects;
