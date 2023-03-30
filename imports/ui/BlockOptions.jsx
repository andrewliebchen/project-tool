import React, { useState } from "react";
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import { IconButton, Box, Text } from "theme-ui";
import { BlocksCollection } from "../api/blocks";

const BlockOptions = ({ blockId }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <Box sx={{ position: "relative" }}>
      {showOptions ? (
        <Box
          sx={{
            position: "absolute",
            border: "1px solid",
            p: 3,
            right: 0,
            bg: "white",
          }}
        >
          <Text
            onClick={() =>
              window.confirm("Are you sure?") &&
              BlocksCollection.remove(blockId)
            }
          >
            Delete
          </Text>
        </Box>
      ) : (
        <IconButton onClick={() => setShowOptions(true)}>
          <UilEllipsisV />
        </IconButton>
      )}
    </Box>
  );
};

export default BlockOptions;
