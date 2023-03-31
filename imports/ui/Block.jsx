import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
  IconButton,
} from "theme-ui";
import { BlocksCollection } from "../api/blocks";
import BlockOptions from "./BlockOptions";
import useHover from "@react-hook/hover";

import ReactMarkdown from "react-markdown";

const Block = ({ block: { _id, title, content } }) => {
  const [editing, setEditing] = useState(false);
  const target = useRef(null);
  const isHovering = useHover(target);

  const updateBlock = (args) =>
    BlocksCollection.update(_id, {
      $set: args,
    });

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        p: 3,
        zIndex: isHovering ? 2 : 1,
      }}
      ref={target}
    >
      {editing === "title" ? (
        <Input
          defaultValue={title}
          placeholder="Add a title"
          autoFocus
          onBlur={(event) => {
            updateBlock({ title: event.target.value });
            setEditing(false);
          }}
        />
      ) : (
        <Heading onClick={() => setEditing("title")} sx={{ width: "100%" }}>
          {title || "Untitled"}
        </Heading>
      )}
      {editing === "content" ? (
        <Textarea
          defaultValue={content}
          placeholder="Add content"
          autoFocus
          onBlur={(event) => {
            updateBlock({ content: event.target.value });
            setEditing(false);
          }}
        />
      ) : (
        <Text onClick={() => setEditing("content")}>
          <ReactMarkdown>{content || "Add content"}</ReactMarkdown>
        </Text>
      )}
      {!editing && <BlockOptions blockId={_id} blockType={(type = "text")} />}
    </Box>
  );
};

export default Block;
