import React, { forwardRef } from "react";
import { Text, Box, Input, Textarea, Flex } from "theme-ui";

const BlockEditor = forwardRef(
  ({ block: { type, textContent, title } }, ref) => {
    const handleUpdateBlock = (args) =>
      BlocksCollection.update(_id, {
        $set: args,
      });

    const renderTextEditor = () => (
      <Flex sx={{ flexDirection: "column", gap: 3 }}>
        <Input
          defaultValue={title}
          placeholder="Add a title"
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
    );

    const renderChecklistEditor = () => <Text>Checklist</Text>;

    return (
      <Box ref={ref}>
        {
          {
            text: renderTextEditor(),
            checklist: renderChecklistEditor(),
          }[type]
        }
      </Box>
    );
  }
);

export default BlockEditor;
