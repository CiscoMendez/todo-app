import { Tab } from '@headlessui/react';
import { TodosActive } from "../todos-active"
import { TodosCompleted } from "../todos-completed"
import { Todos } from '../todos';


const Dashboard = () => { 
  
  return(
    <Tab.Group>
    <Tab.List className="border-b-[.0625rem] mb-5 flex justify-around border-gray-300">
      <Tab className="w-full py-5">All</Tab>
      <Tab className="w-full py-5">Active</Tab>
      <Tab className="w-full py-5">Complete</Tab>
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel>
        <Todos/>
      </Tab.Panel>
      <Tab.Panel>
        <TodosActive />
      </Tab.Panel>
      <Tab.Panel>
        <TodosCompleted />
      </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
  )
 }

 export default Dashboard