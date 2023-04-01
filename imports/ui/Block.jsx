import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Select,
  Text,
  Textarea,
} from "theme-ui";
import { BlocksCollection } from "../api/blocks";
import { UilPen, UilTrash } from "@iconscout/react-unicons";

import ReactMarkdown from "react-markdown";

const Block = ({ block: { _id, title, textContent } }) => {
  const [editing, setEditing] = useState(false);

  const handleUpdateBlock = (args) =>
    BlocksCollection.update(_id, {
      $set: args,
    });

  const handleRemoveBlock = () => {
    if (
      window.confirm(
        "Are you sure? Any slides created by the block will be deleted too."
      )
    ) {
      // Remove block
      BlocksCollection.remove(blockId);

      // Find and remove the matching slide
      // Finding ID won't be necessasry on server
      const slide = SlidesCollection.findOne({ blockId: blockId });
      SlidesCollection.remove(slide._id);
    }
  };

  return editing ? (
    <Flex
      sx={{
        width: "100%",
        border: "1px solid",
        flexDirection: "column",
        gap: 3,
        p: 3,
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Select sx={{ width: 200 }}>
          <option>Text</option>
        </Select>
        <Flex sx={{ gap: 3, ml: "auto", alignItems: "center" }}>
          <IconButton onClick={() => handleRemoveBlock()}>
            <UilTrash />
          </IconButton>
          <Button onClick={() => setEditing(false)}>Done</Button>
        </Flex>
      </Flex>
      <Input
        defaultValue={title}
        placeholder="Add a title"
        autoFocus
        onChange={(event) => {
          handleUpdateBlock({ title: event.target.value });
        }}
      />
      <Textarea
        defaultValue={textContent}
        placeholder="Add content"
        autoFocus
        onChange={(event) => {
          handleUpdateBlock({ textContent: event.target.value });
        }}
      />
    </Flex>
  ) : (
    <Box
      sx={{
        width: "100%",
        p: 3,
      }}
    >
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Heading>{title || "Untitled"}</Heading>
        <IconButton onClick={() => setEditing(true)}>
          <UilPen />
        </IconButton>
      </Flex>
      <Text>
        <ReactMarkdown>{textContent || "Add content"}</ReactMarkdown>
      </Text>
    </Box>
  );
};

export default Block;
