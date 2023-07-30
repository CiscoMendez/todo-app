import { useMemo } from 'react';
import { useTodo } from './useTodo';

export const useTodosStatus = () => {
  const { todos } = useTodo();
  const todosCompleted = useMemo(() => {
    return todos.filter((todo) => todo.completed);
  }, [todos]);
  const todosActive = useMemo(()=> {
    return todos.filter((todo)=> !todo.completed)
  },[todos])

  return {
    todosCompleted,
    todosActive
  };
};
