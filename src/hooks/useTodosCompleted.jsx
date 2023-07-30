import { useMemo } from 'react';
import { useTodo } from './useTodo';

export const useTodosCompleted = () => {
  const { todos } = useTodo();
  const todosCompleted = useMemo(() => {
    return todos.filter((todo) => todo.completed);
  }, [todos]);
  return {
    todosCompleted
  };
};
