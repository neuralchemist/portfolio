import React, { useState } from "react";
// custom components
import ProjectCard from "../ProjectCard";
import DotStepper from "./DotStepper";
import {
  StyledCardContainer,
  StyledCarousel,
  StyledForwardSlide,
  StyledBackwardSlide,
} from "./styledComponents";
// custom types
import { Project } from "../utils/types";

type Props = {
  slides: Project[];
};

type Direction = "forward" | "backward";

function Carousel({ slides }: Props) {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>("forward");

  const lastIndex = slides.length - 1;
  const handleNext = () => {
    if (current === lastIndex) setCurrent(0);
    else setCurrent((prev) => prev + 1);

    setDirection("forward");
  };
  const handleBack = () => {
    if (current === 0) setCurrent(lastIndex);
    else setCurrent((prev) => prev - 1);

    setDirection("backward");
  };
  return (
    <StyledCarousel>

      <StyledCardContainer>
        {direction === "forward" ? (
          <StyledForwardSlide key={current}>
            <ProjectCard project={slides[current]} />
          </StyledForwardSlide>
        ) : (
          <StyledBackwardSlide key={current}>
            <ProjectCard project={slides[current]} />
          </StyledBackwardSlide>
        )}

      </StyledCardContainer>

        <DotStepper
          steps={slides.length}
          current={current}
          handleNext={handleNext}
          handleBack={handleBack}
        />
    </StyledCarousel>
  );
}

export default Carousel;
