import { useTodo } from '../../hooks/useTodo';
import { SubmitTodo } from '../forms';
import TodoList from '../todo-list';

export const Todos = () => {
  const { todos } = useTodo();
  return (
    <div className="flex flex-col gap-8">
      <SubmitTodo />
      <TodoList todos={todos} />
    </div>
  );
};
