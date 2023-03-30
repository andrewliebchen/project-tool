import React, { useState } from "react";
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
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import ReactMarkdown from "react-markdown";

const Block = ({ block: { _id, title, content } }) => {
  const [editing, setEditing] = useState(false);

  const updateBlock = (args) =>
    BlocksCollection.update(_id, {
      $set: args,
    });

  return (
    <Box sx={{ width: "100%" }}>
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
        <Flex>
          <Heading onClick={() => setEditing("title")} sx={{ width: "100%" }}>
            {title || "Untitled"}
          </Heading>
          <IconButton onClick={() => console.log("Block options")}>
            <UilEllipsisV />
          </IconButton>
        </Flex>
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
    </Box>
  );
};

export default Block;
