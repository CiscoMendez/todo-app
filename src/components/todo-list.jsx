import React, { useContext } from 'react';
import approval from '../assets/approval.png';
import TodoTask from './todo-task';
import { TodosContext } from '../context/todos';

const TodoList = React.memo(() => {
  const { todos } = useContext(TodosContext);
  if (todos.length < 1) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 gap-5 text-gray-600">
        <img src={approval} alt="Todo List" className="max-h-20 opacity-60" />
        <span>Great job! Nothing left to do, take some time off.</span>
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-2 py-8">
      {todos.map((value, index) => (
        <TodoTask key={index} idx={index} value={value} />
      ))}
    </ul>
  );
});
TodoList.displayName = 'TodoList';
export default TodoList;
