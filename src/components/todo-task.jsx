import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const TodoTask = ({ value, idx }) => {
  const [taskDone, setTaskDone] = useState(false);
  const id = `check-${idx}`;
  const classComplete = clsx({ 'line-through ': taskDone });
  useEffect(() => {}, [taskDone]);

  const checkTask = () => {
    setTaskDone(!taskDone);
  };

  return (
    <li>
      <label htmlFor={id} className={classComplete}>
        <input type="checkbox" id={id} onChange={checkTask} />
        <span className="ml-2">{value}</span>
      </label>
    </li>
  );
};

export default TodoTask;

TodoTask.propTypes = {
  value: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired
};
