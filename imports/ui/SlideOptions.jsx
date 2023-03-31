import React, { useState } from "react";
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import { IconButton, Box, Text, Flex } from "theme-ui";
import { SlidesCollection } from "../api/slides";
import useOnclickOutside from "react-cool-onclickoutside";
import OptionRow from "./OptionRow";
import OptionsMenu from "./OptionsMenu";

const styles = {
  menuRow: {
    alignItems: "center",
    gap: 2,
  },
};

const SlideOptions = ({ slideId }) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useOnclickOutside(() => {
    setShowOptions(false);
  });

  const handleRemoveSlide = () =>
    window.confirm("Are you sure?") && SlidesCollection.remove(slideId);

  return (
    <Box sx={{ position: "absolute", top: 0, right: 0 }}>
      {showOptions ? (
        <OptionsMenu ref={ref}>
          <OptionRow
            icon={<UilTrash />}
            label="Delete"
            onClick={() => handleRemoveSlide()}
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

export default SlideOptions;
