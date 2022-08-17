import React from "react";
// custom styles
import { QuoteTypography } from "./styledComponents";

type Props = {
  text: string;
};

function Quote({ text }: Props) {
  return <QuoteTypography>{text}</QuoteTypography>;
}

export default Quote;
