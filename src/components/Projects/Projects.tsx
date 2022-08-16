import React from "react";
// custom components
import Carousel from "../Carousel";
import { ProjectStack, ProjectText } from "./styledComponents";
// data
import { projects } from "./data";

function Projects() {
  return (
    <ProjectStack>
      <ProjectText variant="h3">Projects</ProjectText>
      <Carousel slides={projects} />
    </ProjectStack>
  );
}

export default Projects;
