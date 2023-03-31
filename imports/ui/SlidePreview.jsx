import React from "react";
import { Flex, Box, Text } from "theme-ui";
import Slide from "./Slide";
import { SlidesCollection } from "../api/slides";
import { useTracker } from "meteor/react-meteor-data";

const SlidePreview = () => {
  const slides = useTracker(() => SlidesCollection.find({}).fetch());

  return (
    <Flex sx={{ flexDirection: "column", gap: 3 }}>
      {slides.map((slide) => (
        <Slide key={slide._id} slide={slide} />
      ))}
    </Flex>
  );
};

export default SlidePreview;
