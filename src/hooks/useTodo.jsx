import { useContext } from 'react';
import { TodosContext } from '../context/todos';

export const useTodo = () => useContext(TodosContext);
