import React from "react";
// mui 5
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
// custom types
import { Project } from "../utils/types";
// custom components
import { CustomButton, CustomCard } from "./styledComponents";
import { CustomCardContent, StyledCardActions } from "./styledComponents";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <CustomCard>
      <CardHeader title={project.name} />

      <CustomCardContent>
        <Typography variant="body1" color="text.secondary" textAlign="justify" lineHeight="30px">
          {project.description}
        </Typography>
      </CustomCardContent>
      <StyledCardActions>
        <Link
          href={project.github}
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <CustomButton variant="outlined" startIcon={<GitHubIcon />}>
            github
          </CustomButton>
        </Link>

        <Link
          href={project.demo}
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <CustomButton variant="outlined" startIcon={project.icon}>
            demo
          </CustomButton>
        </Link>
      </StyledCardActions>
    </CustomCard>
  );
}

export default ProjectCard;
