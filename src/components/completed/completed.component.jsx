import { useTodosCompleted } from '../../hooks/useTodosCompleted';
import TodoList from '../todo-list';

export const Completed = () => {
  const { todosCompleted } = useTodosCompleted();

  return <TodoList todos={todosCompleted} />;
};
