import React from "react";
import { BlocksCollection } from "../api/blocks";
import { useTracker } from "meteor/react-meteor-data";
import { Text, Flex, Box, Button, Grid } from "theme-ui";
import Block from "./Block";
import SlidePreview from "./SlidePreview";
import { SlidesCollection } from "../api/slides";
import blockTypes from "./blockTypes";

export const App = () => {
  const blocks = useTracker(() => BlocksCollection.find({}).fetch());

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
    <Grid gap={4} columns={["1fr 5fr 1fr"]} sx={{ minHeight: "100vh" }}>
      <Box sx={{ position: "sticky", top: 0, p: 3 }}>
        {blocks.map((block) => (
          <Flex key={block._id} sx={{ mb: 2, gap: 2, alignItems: "center" }}>
            {blockTypes[block.type].icon}
            <Text>{block.title || "Untitled"}</Text>
          </Flex>
        ))}
        <Button onClick={() => handleCreateNewBlock()}>Add</Button>
      </Box>
      <Flex sx={{ flexDirection: "column" }}>
        {blocks.map((block) => (
          <Block key={block._id} block={block} />
        ))}
      </Flex>
      <Box sx={{ bg: "muted", p: 3 }}>
        <SlidePreview />
      </Box>
    </Grid>
  );
};
