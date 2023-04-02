import React from "react";
import { Text, Box } from "theme-ui";
import ReactMarkdown from "react-markdown";

const BlockContent = ({ type, textContent }) => (
  <Box>
    {
      {
        text: (
          <Text>
            <ReactMarkdown>{textContent || "Add content"}</ReactMarkdown>
          </Text>
        ),
      }[type]
    }
  </Box>
);

export default BlockContent;
