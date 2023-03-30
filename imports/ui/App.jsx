import React from "react";
import { BlocksCollection } from "../api/blocks";
import { useTracker } from "meteor/react-meteor-data";
import { Heading, Text, Flex, Box, Button, Grid } from "theme-ui";
import Block from "./Block";

export const App = () => {
  const blocks = useTracker(() => BlocksCollection.find({}).fetch());

  const addNewBlock = () => {
    return BlocksCollection.insert({
      title: "",
      content: "",
      createdAt: Date.now(),
    });
  };

  return (
    <Grid gap={4} columns={["1fr 4fr 1fr"]}>
      <Box sx={{ position: "sticky", top: 0 }}>
        {blocks.map((block) => (
          <Flex key={block._id} sx={{ mb: 2 }}>
            <Text>{block.title || "Untitled"}</Text>
          </Flex>
        ))}
        <Button onClick={() => addNewBlock()}>Add</Button>
      </Box>
      <Flex sx={{ flexDirection: "column", gap: 4 }}>
        {blocks.map((block) => (
          <Block key={block._id} block={block} />
        ))}
      </Flex>
      <Box>
        <Text>Present</Text>
      </Box>
    </Grid>
  );
};
