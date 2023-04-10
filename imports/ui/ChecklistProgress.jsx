import { Text, Progress, Flex } from "theme-ui";
import React, { useContext } from "react";
import AppContext from "./AppContext";

const ChecklistProgress = ({ block: { _id, type } }) => {
  const isChecklist = type === "checklist";
  let { todos } = isChecklist && useContext(AppContext);
  todos = todos?.length > 0 && todos.filter((todo) => todo.blockId === _id);

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

export default ChecklistProgress;
