import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const updateTodo = (todo) => {
    const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const deleteTodos = () => {
    const newsTodos = todos.filter((todo) => !todo.completed);
    setTodos(newsTodos);
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
    } else {
      localStorage.removeItem('task');
    }
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        deleteTodos
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired
};
