import React, { useState } from "react";
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import { IconButton, Box, Text } from "theme-ui";
import { BlocksCollection } from "../api/blocks";
import { SlidesCollection } from "../api/slides";
import useOnclickOutside from "react-cool-onclickoutside";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import OptionRow from "./OptionRow";
import OptionsMenu from "./OptionsMenu";

const BlockOptions = ({ blockId }) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useOnclickOutside(() => {
    setShowOptions(false);
  });

  const handleRemoveBlock = () => {
    if (
      window.confirm(
        "Are you sure? Any slides created by the block will be deleted too."
      )
    ) {
      // Remove block
      BlocksCollection.remove(blockId);

      // Find and remove the matching slide
      // Finding ID won't be necessasry on server
      const slide = SlidesCollection.findOne({ blockId: blockId });
      SlidesCollection.remove(slide._id);
    }
  };

  return (
    <Box sx={{ position: "absolute", top: 0, right: 0 }}>
      {showOptions ? (
        <OptionsMenu ref={ref}>
          <OptionRow
            icon={<UilTrash />}
            label="Delete"
            onClick={() => handleRemoveBlock()}
          />
        </OptionsMenu>
      ) : (
        <IconButton onClick={() => setShowOptions(true)}>
          <UilEllipsisV />
        </IconButton>
      )}
    </Box>
  );
};

export default BlockOptions;
