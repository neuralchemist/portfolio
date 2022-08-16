import React from "react";
// custom styles
import { TitleBox, TitleTypography } from "./styledComponents";

type Props = {
  text: string;
};

function StoicTitle({ text }: Props) {
  const title = text.split("");
  return (
    <TitleBox>
      {title.map((character, index) => (
        <TitleTypography key={index} variant="h1">
          {character}
        </TitleTypography>
      ))}
    </TitleBox>
  );
}

export default StoicTitle;
