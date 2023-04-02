import React, { useState } from "react";
import { Box, Flex, Heading, IconButton } from "theme-ui";
import { UilPen } from "@iconscout/react-unicons";
import BlockToolbar from "./BlockToolbar";
import BlockContent from "./BlockContent";
import BlockEditor from "./BlockEditor";
import useOnclickOutside from "react-cool-onclickoutside";

const Block = ({ block }) => {
  const [editing, setEditing] = useState(false);
  const ref = useOnclickOutside(() => {
    setEditing(false);
  });

  return editing ? (
    <Flex
      sx={{
        width: "100%",
        border: "1px solid",
        flexDirection: "column",
        gap: 3,
        p: 3,
      }}
    >
      <BlockToolbar setEditing={setEditing} block={block} />
      <BlockEditor ref={ref} block={block} />
    </Flex>
  ) : (
    <Box
      sx={{
        width: "100%",
        p: 3,
      }}
    >
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Heading>{block.title || "Untitled"}</Heading>
        <IconButton onClick={() => setEditing(true)}>
          <UilPen />
        </IconButton>
      </Flex>
      <BlockContent block={block} />
    </Box>
  );
};

export default Block;
