import React from "react";
import { Text, Box, Input, Textarea, Flex, Checkbox } from "theme-ui";
import { BlocksCollection } from "../api/blocks";
import uniqueString from "unique-string";
import ChecklistTodo from "./ChecklistTodo";

const BlockEditor = ({
  block: { _id, type, textContent, checklistContent, title },
}) => {
  const handleUpdateBlock = (args) =>
    BlocksCollection.update(_id, {
      $set: args,
    });

  const handleCreateChecklistItem = (value) =>
    // Make a collection for todos
    BlocksCollection.upsert(_id, {
      $push: {
        checklistContent: { id: uniqueString(), checked: false, text: value },
      },
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

  const renderChecklistEditor = () => (
    <Flex sx={{ flexDirection: "column", gap: 3 }}>
      <Input
        defaultValue={title}
        placeholder="Add a title"
        onChange={(event) => {
          handleUpdateBlock({ title: event.target.value });
        }}
      />
      {checklistContent.map((todo) => (
        <ChecklistTodo key={todo.id} todo={todo} />
      ))}
      <Flex sx={{ alignItems: "center" }}>
        <Checkbox disabled />
        <Input
          placeholder="Add a todo and press enter"
          onKeyDown={(event) =>
            event.key === "Enter" &&
            handleCreateChecklistItem(event.target.value)
          }
        />
      </Flex>
    </Flex>
  );

  return (
    <>
      {type === "text" && renderTextEditor()}
      {type === "checklist" && renderChecklistEditor()}
    </>
  );
};

export default BlockEditor;
