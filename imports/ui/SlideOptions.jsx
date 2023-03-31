import React, { useState } from "react";
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import { IconButton, Box, Text } from "theme-ui";
import { SlidesCollection } from "../api/slides";
import useOnclickOutside from "react-cool-onclickoutside";

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
        <Box
          ref={ref}
          sx={{
            position: "absolute",
            border: "1px solid",
            p: 3,
            right: 0,
            bg: "white",
          }}
        >
          <Text onClick={() => handleRemoveSlide()}>Delete</Text>
        </Box>
      ) : (
        <IconButton onClick={() => setShowOptions(true)}>
          <UilEllipsisV />
        </IconButton>
      )}
    </Box>
  );
};

export default SlideOptions;
