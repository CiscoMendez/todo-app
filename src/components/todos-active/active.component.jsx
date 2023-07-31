import { useTodo } from '../../hooks/useTodo';
import { useTodosStatus } from '../../hooks/useTodosStatus';
import { SubmitTodo } from '../forms';
import TodoList from '../todo-list';

export const TodosActive = () => {
  const { todos } = useTodo();
  const { todosActive } = useTodosStatus();
  const hasActiveTodos = todosActive.some((todo) => todo);
  const hasAnyTodos = todos.some((todo) => todo);
  const emptyMessage = hasActiveTodos ? false : hasAnyTodos && 'Default Message';

  return (
    <div className="flex flex-col gap-8">
      <SubmitTodo />
      <TodoList todos={todosActive} done={emptyMessage} />
    </div>
  );
};
