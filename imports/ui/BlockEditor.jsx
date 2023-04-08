import React from "react";
import { Text, Box, Input, Textarea, Flex, Checkbox } from "theme-ui";
import { BlocksCollection } from "../api/blocks";
import ChecklistTodo from "./ChecklistTodo";
import { TodosCollection } from "../api/todos";
import { useTracker } from "meteor/react-meteor-data";

const BlockEditor = ({ block: { _id, type, textContent, title } }) => {
  const todos = useTracker(() =>
    TodosCollection.find({ blockId: _id }).fetch()
  );

  const handleUpdateBlock = (args) =>
    BlocksCollection.update(_id, {
      $set: args,
    });

  const handleCreateTodo = (value) =>
    TodosCollection.insert({
      blockId: _id,
      text: value,
      checked: false,
      createdAt: Date.now(),
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
      {todos.map((todo) => (
        <ChecklistTodo key={todo._id} todo={todo} disabled />
      ))}
      <Flex sx={{ alignItems: "center" }}>
        <Checkbox disabled />
        <Input
          placeholder="Add a todo and press enter"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleCreateTodo(event.target.value);
              event.target.value = "";
            }
          }}
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
