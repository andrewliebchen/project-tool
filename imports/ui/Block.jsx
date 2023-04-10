import React, { useState } from "react";
import { Box, Flex, Heading, IconButton, Text } from "theme-ui";
import { UilPen } from "@iconscout/react-unicons";
import BlockToolbar from "./BlockToolbar";
import BlockContent from "./BlockContent";
import BlockEditor from "./BlockEditor";
import useOnclickOutside from "react-cool-onclickoutside";
import ChecklistProgress from "./ChecklistProgress";

const Block = ({ block }) => {
  const [editing, setEditing] = useState(false);
  const ref = useOnclickOutside(() => {
    setEditing(false);
  });

  return editing ? (
    <Flex
      ref={ref}
      sx={{
        width: "100%",
        border: "1px solid",
        flexDirection: "column",
        gap: 3,
        p: 3,
      }}
    >
      <BlockToolbar setEditing={setEditing} block={block} />
      <BlockEditor block={block} />
    </Flex>
  ) : (
    <Box
      sx={{
        width: "100%",
        p: 3,
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          gap: 3,
        }}
      >
        <Heading sx={{ mr: "auto" }}>{block.title || "Untitled"}</Heading>
        <ChecklistProgress block={block} />
        <IconButton onClick={() => setEditing(true)}>
          <UilPen />
        </IconButton>
      </Flex>
      <BlockContent block={block} />
    </Box>
  );
};

export default Block;
