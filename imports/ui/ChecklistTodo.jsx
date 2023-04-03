import React from "react";
import { Box, Flex, Checkbox, Text } from "theme-ui";
import { BlocksCollection } from "../api/blocks";

const ChecklistTodo = ({ blockId, todo: { id, checked, text } }) => (
  <Flex
    sx={{ alignItems: "center", cursor: "pointer" }}
    onClick={() =>
      // Make this simpler with a todo collection
      BlocksCollection.update(
        {
          _id: blockId,
          "checklistContent.id": id,
        },
        {
          $set: { "checklistContent.$.checked": !checked },
        }
      )
    }
  >
    <Checkbox defaultChecked={checked} />
    <Text>{text}</Text>
  </Flex>
);

export default ChecklistTodo;
