import PropTypes from 'prop-types';
import approval from '../assets/approval.png';
import TodoTask from './todo-task';

const TodoList = ({ todos, done }) => {
  return (
    <div className='w-full'>
      {todos.some(todo=> todo)?(
        <ul className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoTask key={todo.id} todo={todo} done={done}/>
          ))}
        </ul>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-20 gap-5 text-gray-600">
          <img src={approval} alt="Todo List" className="max-h-20 opacity-60" />
          <span>Great job! Nothing left to do, take some time off.</span>
        </div>
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
  done: PropTypes.bool
};

TodoList.defaultProps = {
  done: false
}
