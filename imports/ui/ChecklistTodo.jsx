import React, { useRef } from "react";
import { Flex, Text, IconButton } from "theme-ui";
import {
  UilTrash,
  UilCheckSquare,
  UilSquareFull,
} from "@iconscout/react-unicons";
import { TodosCollection } from "../api/todos";
import useHover from "@react-hook/hover";

const ChecklistTodo = ({ disabled, todo: { _id, checked, text } }) => {
  const target = useRef(null);
  const isHovering = useHover(target);

  const handleCheck = () =>
    disabled || TodosCollection.update(_id, { $set: { checked: !checked } });

  const handleRemoveTodo = () => TodosCollection.remove(_id);

  return (
    <Flex
      sx={{
        alignItems: "center",
        height: 36,
        px: 1,
        "&:hover": { bg: "muted" },
      }}
      ref={target}
    >
      <IconButton sx={{ cursor: "pointer", mr: 2 }} onClick={handleCheck}>
        {checked ? <UilCheckSquare /> : <UilSquareFull />}
      </IconButton>
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
