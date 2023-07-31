import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useTodo } from '../hooks/useTodo';
import { MdDeleteOutline } from 'react-icons/md';
import { IconButton } from './UI/Buttons';

const TodoTask = ({ todo, done }) => {
  const { updateTodo, deleteTodo } = useTodo();

  const { id, task } = todo;

  const classComplete = clsx('flex items-center w-full cursor-pointer', {
    'line-through ': todo.completed
  });

  const checkTask = (ev) => {
    const { checked } = ev.target;
    const newTodo = {
      ...todo,
      completed: checked
    };
    updateTodo(newTodo);
  };
  const deleteTask = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="flex items-center justify-between">
      <label htmlFor={id} className={classComplete}>
        <input type="checkbox" id={id} onChange={checkTask} checked={todo.completed} />
        <span className="ml-2 w-full">{task}</span>
      </label>
      {todo.completed && done && (
        <IconButton onClick={deleteTask}>
          <MdDeleteOutline size={24} />
        </IconButton>
      )}
    </li>
  );
};

export default TodoTask;

TodoTask.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  done: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
