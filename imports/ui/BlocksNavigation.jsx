import { BlocksCollection } from "../api/blocks";
import { Flex, Box, Text, Button } from "theme-ui";
import { SlidesCollection } from "../api/slides";
import AppContext from "./AppContext";
import blockTypes from "./blockTypes";
import React, { useContext } from "react";

const BlocksNavigation = () => {
  const { blocks } = useContext(AppContext);

  const handleCreateNewBlock = () => {
    // Create the block
    const insertNewBlock = () =>
      BlocksCollection.insert({
        title: "",
        textContent: "",
        createdAt: Date.now(),
        type: "text",
      });

    // Create the slide, tied to block ID
    const newBlockID = insertNewBlock();
    SlidesCollection.insert({
      blockId: newBlockID,
      createdAt: Date.now(),
    });
  };

  return (
    <Box sx={{ position: "sticky", top: 0, p: 3 }}>
      {blocks.map((block) => (
        <Flex key={block._id} sx={{ mb: 2, gap: 2, alignItems: "center" }}>
          {blockTypes[block.type].icon}
          <Text
            sx={{
              textOverflow: "ellipsis",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {block.title || "Untitled"}
          </Text>
        </Flex>
      ))}
      <Button onClick={() => handleCreateNewBlock()}>Add</Button>
    </Box>
  );
};

export default BlocksNavigation;
