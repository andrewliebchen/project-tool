import { Text, Flex } from "theme-ui";
import AppContext from "./AppContext";
import ChecklistTodo from "./ChecklistTodo";
import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";

const BlockContent = ({ block: { type, textContent } }) => {
  const { todos } = useContext(AppContext);

  const renderTextContent = () => (
    <Text>
      <ReactMarkdown>{textContent || "Add content"}</ReactMarkdown>
    </Text>
  );

  const renderChecklistContent = () => (
    <Flex sx={{ flexDirection: "column" }}>
      {todos.map((todo) => (
        <ChecklistTodo key={todo._id} todo={todo} />
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
