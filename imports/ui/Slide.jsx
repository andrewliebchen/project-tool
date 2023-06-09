import { BlocksCollection } from "../api/blocks";
import { Flex, Box, Text, IconButton } from "theme-ui";
import { SlidesCollection } from "../api/slides";
import { UilTrash, UilPen } from "@iconscout/react-unicons";
import React, { useRef } from "react";
import useHover from "@react-hook/hover";

const Slide = ({ slide: { _id, blockId } }) => {
  const target = useRef(null);
  const isHovering = useHover(target);
  const blockContent = BlocksCollection.findOne(blockId);

  const handleRemoveSlide = () =>
    window.confirm("Are you sure?") && SlidesCollection.remove(_id);

  return (
    <Box sx={{ border: "1px solid", bg: "white" }} ref={target}>
      <Box sx={{ width: "100%", pt: "56.25%", position: "relative" }}>
        <Flex
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            p: 3,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isHovering ? (
            <Flex sx={{ gap: 2 }}>
              <IconButton>
                <UilPen />
              </IconButton>
              <IconButton onClick={handleRemoveSlide}>
                <UilTrash />
              </IconButton>
            </Flex>
          ) : (
            blockContent && (
              <Box sx={{ fontSize: "0.5rem" }}>
                <Text sx={{ fontWeight: "bold" }}>
                  {blockContent.title || "Untitled"}
                </Text>
                <Text>{blockContent.content}</Text>
              </Box>
            )
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Slide;
