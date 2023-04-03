import React from "react";
import { Text, Box, Flex, Checkbox } from "theme-ui";
import ReactMarkdown from "react-markdown";
import ChecklistTodo from "./ChecklistTodo";

const BlockContent = ({
  block: { _id, type, textContent, checklistContent },
}) => {
  const renderTextContent = () => (
    <Text>
      <ReactMarkdown>{textContent || "Add content"}</ReactMarkdown>
    </Text>
  );

  const renderChecklistContent = () => (
    <Flex sx={{ flexDirection: "column", gap: 3 }}>
      {checklistContent.map((todo) => (
        <ChecklistTodo key={todo.id} blockId={_id} todo={todo} />
      ))}
    </Flex>
  );

  return (
    <>
      {type === "text" && renderTextContent()}
      {type === "checklist" && renderChecklistContent()}
    </>
  );
};

export default BlockContent;
