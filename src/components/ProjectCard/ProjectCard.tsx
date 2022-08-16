import React from "react";
// mui 5
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
// custom types
import { Project } from "../utils/types";
// custom components
import { CustomButton, CustomCard } from "./styledComponents";
import { CustomCardContent } from "./styledComponents";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <CustomCard>
      <CardHeader title={project.name} />

      <CustomCardContent>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CustomCardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "8px",
          padding: "16px 0",
        }}
      >
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
      </CardActions>
    </CustomCard>
  );
}

export default ProjectCard;
