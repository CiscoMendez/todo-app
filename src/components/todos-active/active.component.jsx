import { useTodosStatus } from "../../hooks/useTodosStatus";
import { SubmitTodo } from "../forms";
import TodoList from "../todo-list";

export const TodosActive = () => {
  const { todosActive } = useTodosStatus();
  return (
    <div className="flex flex-col gap-8">
      <SubmitTodo/>
       <TodoList todos={todosActive} />
    </div>
 
  );
};
