import React from "react";
import { Flex, Text } from "theme-ui";
import { UilAngleRight } from "@iconscout/react-unicons";

const OptionRow = ({ icon, label, onClick, submenu }) => (
  <Flex
    onClick={onClick}
    sx={{
      alignItems: "center",
      gap: 2,
      cursor: "pointer",
      p: 1,
      "&:hover": { bg: "muted" },
    }}
  >
    {icon}
    <Text sx={{ mr: "auto" }}>{label}</Text>
    {submenu && <UilAngleRight />}
  </Flex>
);

export default OptionRow;
