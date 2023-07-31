import PropTypes from 'prop-types';
import TodoTask from './todo-task';
import clsx from 'clsx';
import { EmptyList } from './empty-states/empty-list.component';

const TodoList = ({ todos, done }) => {
  const listClasses = clsx('flex flex-col', { 'gap-3': !done, 'gap-0': done });
  return (
    <div className="w-full">
      {todos.some((todo) => todo) ? (
        <ul className={listClasses}>
          {todos.map((todo) => (
            <TodoTask key={todo.id} todo={todo} done={done} />
          ))}
        </ul>
      ) : (
        <EmptyList done={done} />
      )}
    </div>
  );
};
TodoList.displayName = 'TodoList';
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  done: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
TodoList.defaultProps = {
  done: false
}