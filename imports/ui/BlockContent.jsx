import React from "react";
import { Text, Box, Flex, Checkbox } from "theme-ui";
import ReactMarkdown from "react-markdown";
import ChecklistTodo from "./ChecklistTodo";
import { TodosCollection } from "../api/todos";
import { useTracker } from "meteor/react-meteor-data";

const BlockContent = ({
  block: { _id, type, textContent, checklistContent },
}) => {
  const todos = useTracker(() =>
    TodosCollection.find({ blockId: _id }).fetch()
  );

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
