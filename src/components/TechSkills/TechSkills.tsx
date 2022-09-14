import React from "react";
// custom components
import SkillsTab from "../SkillsTab";
import { StyledStack, SkillsText } from "./styledComponents";

function TechSkills() {
  return (
    <StyledStack>
      <SkillsText variant="h3">Tech Skills</SkillsText>

      <SkillsTab />
    </StyledStack>
  );
}

export default TechSkills;
