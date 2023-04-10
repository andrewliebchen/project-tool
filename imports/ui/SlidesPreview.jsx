import React, { useContext } from "react";
import { Flex, Box, Text } from "theme-ui";
import Slide from "./Slide";
import AppContext from "./AppContext";

const SlidesPreview = () => {
  const { slides } = useContext(AppContext);

  return (
    <Flex sx={{ flexDirection: "column", gap: 3, p: 3, bg: "muted" }}>
      {slides.map((slide) => (
        <Slide key={slide._id} slide={slide} />
      ))}
    </Flex>
  );
};

export default SlidesPreview;
