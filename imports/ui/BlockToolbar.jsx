import React from "react";
import { Flex, Select, IconButton, Button } from "theme-ui";
import { UilTrash } from "@iconscout/react-unicons";
import blockTypes from "./blockTypes";
import { BlocksCollection } from "../api/blocks";

const BlockToolbar = ({ removeBlock, setEditing, blockId }) => (
  <Flex sx={{ alignItems: "center" }}>
    <Select
      sx={{ width: 200 }}
      onChange={(event) =>
        BlocksCollection.update(blockId, { $set: { type: event.target.value } })
      }
    >
      {Object.keys(blockTypes).map((type) => (
        <option value={type}>{blockTypes[type].label}</option>
      ))}
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
