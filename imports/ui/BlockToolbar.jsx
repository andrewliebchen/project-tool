import React from "react";
import { Flex, Select, IconButton, Button } from "theme-ui";
import { UilTrash } from "@iconscout/react-unicons";

const BlockToolbar = ({ removeBlock, setEditing }) => (
  <Flex sx={{ alignItems: "center" }}>
    <Select sx={{ width: 200 }}>
      <option>Text</option>
    </Select>
    <Flex sx={{ gap: 3, ml: "auto", alignItems: "center" }}>
      <IconButton onClick={() => removeBlock}>
        <UilTrash />
      </IconButton>
      <Button onClick={() => setEditing(false)}>Done</Button>
    </Flex>
  </Flex>
);

export default BlockToolbar;
