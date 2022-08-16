import React from "react";
// mui 5
import Grid from "@mui/material/Grid";
// custom components
import SvgIcon from "../SvgIcon/SvgIcon";
import { StyledGridContainer } from "./styledComponents";

type TechStack = {
  name: string;
  icon: React.ReactNode;
};

type Props = {
  techStacksData: TechStack[];
};

function IconStacks({ techStacksData }: Props) {
  return (
    <StyledGridContainer container spacing={2}>
      {techStacksData.map((data) => (
        <Grid item key={data.name} xs={6} sm={4}>
          <SvgIcon text={data.name} icon={data.icon} />
        </Grid>
      ))}
    </StyledGridContainer>
  );
}

export default IconStacks;
