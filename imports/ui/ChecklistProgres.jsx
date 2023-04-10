import React from "react";
import { TodosCollection } from "../api/todos";
import { useTracker } from "meteor/react-meteor-data";
import { Text, Progress, Flex } from "theme-ui";

const ChecklistProgres = ({ block: { _id, type } }) => {
  const isChecklist = type === "checklist";
  const todos =
    isChecklist &&
    useTracker(() => TodosCollection.find({ blockId: _id }).fetch());

  const todosCount = todos.length;

  const completedTodosCount =
    todosCount > 0 && todos.filter((todo) => todo.checked).length;

  return (
    isChecklist && (
      <Flex sx={{ alignItems: "center", gap: 2 }}>
        <Text sx={{ fontSize: "small" }}>
          {completedTodosCount}/{todos.length}
        </Text>
        <Progress
          sx={{ width: 40, bg: "muted" }}
          max={todosCount}
          value={completedTodosCount}
        />
      </Flex>
    )
  );
};

export default ChecklistProgres;
