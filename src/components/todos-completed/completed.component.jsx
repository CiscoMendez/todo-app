import { useTodosStatus } from '../../hooks/useTodosStatus';
import { Button } from '../UI/Buttons';
import { MdDeleteOutline } from 'react-icons/md';
import TodoList from '../todo-list';
import { useTodo } from '../../hooks/useTodo';

export const TodosCompleted = () => {
  const { todosCompleted } = useTodosStatus();
  const { deleteTodos } = useTodo();
  const hideButton = todosCompleted.some((todo) => todo) ? '' : 'hidden';

  const handleDelete = () => {
    deleteTodos();
  };
  return (
    <div className="flex flex-col items-end gap-8 ">
      <TodoList todos={todosCompleted} done={true} />
      <Button variant="delete" onClick={handleDelete} className={hideButton}>
        <MdDeleteOutline size={24} />
        Delete all
      </Button>
    </div>
  );
};
