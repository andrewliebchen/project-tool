import React from "react";
import { Flex, Select, IconButton, Button } from "theme-ui";
import { UilTrash } from "@iconscout/react-unicons";
import blockTypes from "./blockTypes";
import { BlocksCollection } from "../api/blocks";
import { SlidesCollection } from "../api/slides";

const BlockToolbar = ({ setEditing, block: { _id, type } }) => {
  const handleUpdateBlockType = (type) =>
    BlocksCollection.update(_id, {
      $set: { type: type },
    });

  const handleRemoveBlock = () => {
    if (
      window.confirm(
        "Are you sure? Any slides created by the block will be deleted too."
      )
    ) {
      // Remove block
      BlocksCollection.remove(_id);

      // Find and remove the matching slide
      // Finding ID won't be necessasry on server
      const slide = SlidesCollection.findOne({ blockId: _id });
      SlidesCollection.remove(slide._id);
    }
  };

  return (
    <Flex sx={{ alignItems: "center" }}>
      <Select
        sx={{ width: 200 }}
        onChange={(event) => handleUpdateBlockType(event.target.value)}
        value={type}
      >
        {Object.keys(blockTypes).map((type) => (
          <option key={type} value={type}>
            {blockTypes[type].label}
          </option>
        ))}
      </Select>
      <Flex sx={{ gap: 3, ml: "auto", alignItems: "center" }}>
        <IconButton onClick={handleRemoveBlock}>
          <UilTrash />
        </IconButton>
        <Button onClick={() => setEditing(false)}>Done</Button>
      </Flex>
    </Flex>
  );
};

export default BlockToolbar;
