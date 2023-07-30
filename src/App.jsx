import { Tab } from '@headlessui/react';
import TodoList from './components/todo-list';
import { useState } from 'react';
import { Button } from './components/UI/Buttons';
import { Completed } from './components/completed';
import { useTodo } from './hooks/useTodo';
import { v4 as uuidv4 } from 'uuid';
import { TodosActive } from './components/active';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const { addTodo, todos } = useTodo();
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
    <main className="flex flex-col items-center">
      <header className="p-8 w-full">
        <h1 className="text-4xl text-center font-bold ">#todo</h1>
      </header>
      <div className="flex flex-col w-full max-w-2xl ">
        <Tab.Group>
          <Tab.List className="border-b-[.0625rem] mb-5 flex justify-around border-gray-300">
            <Tab className="w-full py-5">All</Tab>
            <Tab className="w-full py-5">Active</Tab>
            <Tab className="w-full py-5">Complete</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <form className="flex items-center gap-6" onSubmit={handleSubmit}>
                <input
                  className="rounded-xl border-gray-300 border-[.0625rem] text-base py-4 px-3 min-w-[30rem]"
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
              <TodoList todos={todos} />
            </Tab.Panel>
            <Tab.Panel>
              <TodosActive />
            </Tab.Panel>
            <Tab.Panel>
              <Completed />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}
