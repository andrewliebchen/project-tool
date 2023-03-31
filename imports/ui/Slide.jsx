import React, { useRef } from "react";
import { Flex, Box, Text } from "theme-ui";
import { BlocksCollection } from "../api/blocks";
import SlideOptions from "./SlideOptions";
import useHover from "@react-hook/hover";

const Slide = ({ slide: { _id, blockId } }) => {
  const target = useRef(null);
  const isHovering = useHover(target);
  const blockContent = BlocksCollection.findOne(blockId);

  return (
    <Box sx={{ border: "1px solid", bg: "white" }} ref={target}>
      <Box sx={{ width: "100%", pt: "56.25%", position: "relative" }}>
        {blockContent && (
          <Flex
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              p: 3,
              fontSize: "0.5rem",
              flexDirection: "column",
            }}
          >
            <Text sx={{ fontWeight: "bold" }}>{blockContent.title}</Text>
            <Text>{blockContent.content}</Text>
          </Flex>
        )}
        {isHovering && <SlideOptions slideId={_id} />}
      </Box>
    </Box>
  );
};

export default Slide;
