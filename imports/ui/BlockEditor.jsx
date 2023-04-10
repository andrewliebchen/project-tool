import React from "react";
import { Input, Flex, IconButton } from "theme-ui";
import { BlocksCollection } from "../api/blocks";
import ChecklistTodo from "./ChecklistTodo";
import { TodosCollection } from "../api/todos";
import { useTracker } from "meteor/react-meteor-data";
import TextareaAutosize from "react-autosize-textarea";
import { UilSquareFull } from "@iconscout/react-unicons";

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
      <TextareaAutosize
        defaultValue={textContent}
        placeholder="Add content"
        autoFocus
        onChange={(event) => {
          handleUpdateBlock({ textContent: event.target.value });
        }}
        onResize={(event) => {}}
      />
    </Flex>
  );

  const renderChecklistEditor = () => (
    <Flex sx={{ flexDirection: "column" }}>
      {todos.map((todo) => (
        <ChecklistTodo key={todo._id} todo={todo} disabled />
      ))}
      <Flex sx={{ alignItems: "center", p: 1, pt: 3 }}>
        <IconButton sx={{ cursor: "pointer", mr: 2 }}>
          <UilSquareFull />
        </IconButton>
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
