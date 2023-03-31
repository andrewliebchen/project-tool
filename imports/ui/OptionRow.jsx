import React from "react";
import { Flex, Text } from "theme-ui";

const OptionRow = ({ icon, label, onClick }) => (
  <Flex
    sx={{
      alignItems: "center",
      gap: 3,
      cursor: "pointer",
      p: 1,
      "&:hover": { bg: "muted" },
    }}
  >
    {icon}
    <Text onClick={onClick}>{label}</Text>
  </Flex>
);

export default OptionRow;
