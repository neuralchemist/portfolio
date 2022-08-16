import React from "react";
// custom components
import SkillsTab from "../SkillsTab";
import { StyledTechSkills, SkillsText } from "./styledComponents";

function TechSkills() {
  return (
    <StyledTechSkills>
      <SkillsText variant="h3">Tech Skills</SkillsText>

      <SkillsTab />
    </StyledTechSkills>
  );
}

export default TechSkills;
