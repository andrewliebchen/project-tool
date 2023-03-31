import React from "react";
import { Box } from "theme-ui";

const Slide = ({ children }) => (
  <Box sx={{ border: "1px solid", bg: "white" }}>
    <Box sx={{ width: "100%", pt: "56.25%" }}>
      <Box>{children}</Box>
    </Box>
  </Box>
);

export default Slide;
