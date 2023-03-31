import React, { forwardRef } from "react";
import { Box } from "theme-ui";

const OptionsMenu = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    sx={{
      position: "absolute",
      border: "1px solid",
      p: 1,
      right: 0,
      bg: "white",
    }}
  >
    {children}
  </Box>
));

export default OptionsMenu;
