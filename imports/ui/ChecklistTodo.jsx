import React from "react";
import { Box, Flex, Checkbox, Text } from "theme-ui";
import { TodosCollection } from "../api/todos";

const ChecklistTodo = ({ disabled, todo: { _id, checked, text } }) => {
  const handleCheck = () =>
    TodosCollection.update(_id, { $set: { checked: !checked } });

  return (
    <Flex sx={{ alignItems: "center" }}>
      <Checkbox
        checked={checked}
        onChange={() => handleCheck()}
        disabled={disabled}
        sx={{ cursor: "pointer" }}
      />
      <Text>{text}</Text>
    </Flex>
  );
};

export default ChecklistTodo;
