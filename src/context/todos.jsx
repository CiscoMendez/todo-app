import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('task')) || [];
    if (list.length > 0) {
      setTodos(list);
    }
  }, []);
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('task', JSON.stringify(todos));
    }
  }, [todos]);

  const deleteTodos = () => {
    setTodos([]);
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodos
      }}>
      {children}
    </TodosContext.Provider>
  );
}

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired
};
