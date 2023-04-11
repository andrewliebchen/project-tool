import { Button, Flex } from "theme-ui";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import Slide from "./Slide";

const SlidesPreview = () => {
  const { slides } = useContext(AppContext);

  return (
    <Flex sx={{ flexDirection: "column", gap: 3, p: 3, bg: "muted" }}>
      <Button>Present</Button>
      {slides.map((slide) => (
        <Slide key={slide._id} slide={slide} />
      ))}
    </Flex>
  );
};

export default SlidesPreview;
