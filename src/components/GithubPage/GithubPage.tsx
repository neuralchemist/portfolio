import React from "react";
// mui 5
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
// custom component
import { GithubButton } from "./styledComponents";
import { Box } from "@mui/material";

function GithubPage() {
  return (
    <Box sx={{ width: { xs: "200px", sm: "400px" } }}>
      <Link
        href="https://github.com/neuralchemist?tab=repositories"
        target="_blank"
        rel="noopener"
        underline="none"
      >
        <GithubButton variant="outlined"  startIcon={<GitHubIcon />} fullWidth>
          Github
        </GithubButton>
      </Link>
    </Box>
  );
}

export default GithubPage;
