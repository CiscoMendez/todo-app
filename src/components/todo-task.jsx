import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useTodo } from '../hooks/useTodo';
const TodoTask = ({ todo }) => {
  const { updateTodo } = useTodo();

  const { id, task } = todo;

  const classComplete = clsx({ 'line-through ': todo.completed });

  const checkTask = (ev) => {
    const { checked } = ev.target;
    const newTodo = {
      ...todo,
      completed: checked
    };
    updateTodo(newTodo);
  };

  return (
    <li>
      <label htmlFor={id} className={classComplete}>
        <input type="checkbox" id={id} onChange={checkTask} checked={todo.completed} />
        <span className="ml-2">{task}</span>
      </label>
    </li>
  );
};

export default TodoTask;

TodoTask.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};
