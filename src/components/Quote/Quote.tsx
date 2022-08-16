import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// custom styles
import { QuoteTypography } from "./styledComponents";

type Props = {
  text: string;
};

function Quote({ text }: Props) {
  return <QuoteTypography>{text}</QuoteTypography>;
}

export default Quote;
