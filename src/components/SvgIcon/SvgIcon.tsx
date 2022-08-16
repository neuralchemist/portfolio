import React from "react";
// mui 5

// custom component
import { IconStack, StyledIcon, StyledTypography } from "./styledComponents";

type Props = {
  text: string;
  icon: React.ReactNode;
};

function SvgIcon({ text, icon }: Props) {
  return (
    <IconStack>
      <StyledIcon>{icon}</StyledIcon>

      <StyledTypography variant="caption">{text}</StyledTypography>
    </IconStack>
  );
}

export default SvgIcon;
