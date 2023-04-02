import React from "react";
import { Text, Box } from "theme-ui";
import ReactMarkdown from "react-markdown";

const BlockContent = ({ block: { type, textContent } }) => {
  const renderTextContent = () => (
    <Text>
      <ReactMarkdown>{textContent || "Add content"}</ReactMarkdown>
    </Text>
  );

  const renderChecklistContent = () => <Text>Checklist</Text>;

  return {
    text: renderTextContent(),
    checklist: renderChecklistContent(),
  }[type];
};

export default BlockContent;
