import { useState } from 'react';
import { Button } from '../UI/Buttons';
import { Input } from '../UI/Inputs';
import { useTodo } from '../../hooks/useTodo';
import { v4 as uuidv4 } from 'uuid';
export const SubmitTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodo();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      task: inputValue,
      completed: false
    };
    addTodo(todo);
    //Reset form
    setInputValue('');
  };
  return (
    <form className="flex items-center gap-6" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add details"
        required
      />
      <Button variant="primary" type="submit">
        Add
      </Button>
    </form>
  );
};
