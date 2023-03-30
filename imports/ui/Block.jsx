import React, { useState } from "react";
import { Box, Heading, Text, Input, Textarea, Button } from "theme-ui";
import { BlocksCollection } from "../api/blocks";

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
        <Heading onClick={() => setEditing("title")}>
          {title || "Add a title"}
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
          {content || "Add content"}
        </Text>
      )}
    </Box>
  );
};

export default Block;
