import React, { useRef } from "react";
import { Box, Flex, Checkbox, Text, IconButton } from "theme-ui";
import { UilTrash } from "@iconscout/react-unicons";
import { TodosCollection } from "../api/todos";
import useHover from "@react-hook/hover";

const ChecklistTodo = ({ disabled, todo: { _id, checked, text } }) => {
  const target = useRef(null);
  const isHovering = useHover(target);

  const handleCheck = () =>
    TodosCollection.update(_id, { $set: { checked: !checked } });

  const handleRemoveTodo = () => TodosCollection.remove(_id);

  return (
    <Flex
      sx={{
        alignItems: "center",
        height: 36,
        px: 1,
        "&:hover": { bg: "muted" },
      }}
      onClick={handleCheck}
      ref={target}
    >
      <Checkbox
        checked={checked}
        disabled={disabled}
        sx={{ cursor: "pointer" }}
      />
      <Text>{text}</Text>
      {isHovering && (
        <IconButton sx={{ ml: "auto" }} onClick={handleRemoveTodo}>
          <UilTrash />
        </IconButton>
      )}
    </Flex>
  );
};

export default ChecklistTodo;
