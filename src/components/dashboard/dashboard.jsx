import { Tab } from '@headlessui/react';
import { TodosActive } from '../todos-active';
import { TodosCompleted } from '../todos-completed';
import { Todos } from '../todos';
import { TabC } from '../UI/Tabs/tab';

export const Dashboard = () => {
  return (
    <Tab.Group>
      <Tab.List className=" mb-5 flex justify-around">
        <TabC>All</TabC>
        <TabC>Active</TabC>
        <TabC>Completed</TabC>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Todos />
        </Tab.Panel>
        <Tab.Panel>
          <TodosActive />
        </Tab.Panel>
        <Tab.Panel>
          <TodosCompleted />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
