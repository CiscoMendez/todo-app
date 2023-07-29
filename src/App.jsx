import "./App.css";
import { Tab } from '@headlessui/react'
import PrimaryButton from './components/UI/Buttons/primary-button'
import TodoList from "./components/todo-list";
import { useContext, useState } from "react";
import { TodosContext } from "./context/todos";



export default function App() {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useContext(TodosContext);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    addTodo(inputValue)
  }
  
  return (
    <main className="flex flex-col items-center ">
      <header className="p-8 w-full">
        <h1 className="text-4xl text-center font-bold ">#todo</h1>
      </header>
      <div className="flex flex-col w-full max-w-2xl ">
        <Tab.Group >
          <Tab.List className={"border-b-[.0625rem] mb-5 flex justify-around border-gray-300"}>
            <Tab className={"w-full py-5 "}>All</Tab>
            <Tab className={"w-full py-5 "}>Active</Tab>
            <Tab className={"w-full py-5 "}>Complete</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <form className="flex items-center gap-6" onSubmit={handleSubmit}>
                <input className="rounded-xl border-gray-300 border-[.0625rem] text-base py-4 px-3 min-w-[30rem]" 
                type="text" value={inputValue} onChange={handleChange} placeholder="Add details" required/>
                <PrimaryButton type={"submit"}>
                  Add
                </PrimaryButton>
              </form>
              <TodoList/>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}
