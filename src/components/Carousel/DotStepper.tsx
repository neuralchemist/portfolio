import * as React from "react";
// mui 5
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// custom components
import { StyledMobileStepper } from "./styledComponents";

type Props = {
  steps: number;
  current: number;
  handleNext: () => void;
  handleBack: () => void;
};

export default function DotsMobileStepper({
  steps,
  current,
  handleNext,
  handleBack,
}: Props) {
  return (
    <StyledMobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={current}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          sx={{ color: "white", cursor: "pointer" }}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          sx={{ color: "white", cursor: "pointer" }}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}
