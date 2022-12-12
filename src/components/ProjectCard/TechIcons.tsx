import React from "react";

// node
import { ReactComponent as RestApiIcon } from "../../assets/svg/restful-api.svg";
// programming language
import { ReactComponent as JavascriptIcon } from "../../assets/svg/javascript.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/svg/typescript-icon.svg";
// git
import { ReactComponent as GithubIcon } from "../../assets/svg/github-icon.svg";
import { ReactComponent as GithubActionIcon } from "../../assets/svg/github-actions.svg";
// fireabase
import { ReactComponent as FirebaseIcon } from "../../assets/svg/firebase.svg";
// react
import { ReactComponent as ReactIcon } from "../../assets/svg/react.svg";
import { ReactComponent as ReactRouterIcon } from "../../assets/svg/react-router.svg";
import { ReactComponent as ReactQueryIcon } from "../../assets/svg/react-query-icon.svg";
import { ReactComponent as ReactHookFormIcon } from "../../assets/svg/react-hook-form.svg";
// styling
import { ReactComponent as MaterialIcon } from "../../assets/svg/material-ui.svg";
import { ReactComponent as CSS3Icon } from "../../assets/svg/css3.svg";
// testing
import { ReactComponent as CypressIcon } from "../../assets/svg/cypress-icon.svg";
// custom styles
import { StyledTechIcons, StyledIcon } from "./styledComponents";

// ["react", "javascript","react-router", "material-ui", "react-hook-form", "cypress",  "github", "github-action"],

function getIcon(name: string) {
  switch (name) {
    case "javascript":
    return <JavascriptIcon title="javascript" width="100%" height="100%" />;
    case "typescript":
    return <TypescriptIcon title="typescript" width="100%" height="100%" />;
    case "react":
      return <ReactIcon title="react" width="100%" height="100%" />;
    case "react-query":
      return <ReactQueryIcon title="react-query" width="100%" height="100%" />;
    case "react-router":
      return (
        <ReactRouterIcon title="react-router" width="100%" height="100%" />
      );
    case "react-hook-form":
      return (
        <ReactHookFormIcon title="react-hook-form" width="100%" height="100%" />
      );
    case "material-ui":
      return <MaterialIcon title="material-ui" width="100%" height="100%" />;
    case "css3":
      return <CSS3Icon title="css3" width="100%" height="100%" />;
    case "cypress":
      return <CypressIcon title="cypress" width="100%" height="100%" />;
    case "github":
      return <GithubIcon title="github" width="100%" height="100%" />;
    case "github-action":
      return (
        <GithubActionIcon title="github-action" width="100%" height="100%" />
      );
    case "firebase":
      return <FirebaseIcon title="firebase" width="100%" height="100%" />;
    case "rest-api":
      return <RestApiIcon title="rest-api" width="100%" height="100%" />;
  }
}

interface Props {
  techStack: string[];
}

function TechIcons({ techStack }: Props) {
  return (
    <StyledTechIcons>
      {techStack.map((name) => (
        <StyledIcon key={name}>{getIcon(name)}</StyledIcon>
      ))}
    </StyledTechIcons>
  );
}

export default TechIcons;
