import React from "react";
import { BlocksCollection } from "../api/blocks";
import { useTracker } from "meteor/react-meteor-data";
import { Heading, Text, Flex, Box, Button } from "theme-ui";
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
    <Flex sx={{ flexDirection: "column", gap: 4, p: 4 }}>
      {blocks.map((block) => (
        <Block key={block._id} block={block} />
      ))}
      <Button onClick={() => addNewBlock}>Add</Button>
    </Flex>
  );
};
