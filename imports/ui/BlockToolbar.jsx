import { BlocksCollection } from "../api/blocks";
import { Flex, Select, IconButton, Button, Input } from "theme-ui";
import { SlidesCollection } from "../api/slides";
import { UilTrash } from "@iconscout/react-unicons";
import blockTypes from "./blockTypes";
import React from "react";

const BlockToolbar = ({ setEditing, block: { _id, type, title } }) => {
  const handleUpdateBlockTitle = (title) =>
    BlocksCollection.update(_id, {
      $set: { title: title },
    });

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
    <Flex sx={{ alignItems: "center", gap: 3 }}>
      <Input
        defaultValue={title}
        placeholder="Add a title"
        onChange={(event) => {
          handleUpdateBlockTitle(event.target.value);
        }}
        sx={{ flex: "1 1 0" }}
      />
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
        <IconButton onClick={handleRemoveBlock} sx={{ flexShrink: 0 }}>
          <UilTrash />
        </IconButton>
        <Button onClick={() => setEditing(false)} sx={{ flexShrink: 0 }}>
          Done
        </Button>
      </Flex>
    </Flex>
  );
};

export default BlockToolbar;
