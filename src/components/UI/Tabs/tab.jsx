import { Fragment } from "react";
import { TabButton } from "../Buttons";
import { Tab } from "@headlessui/react";
import PropTypes  from "prop-types";

export const TabC = ({ children }) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => <TabButton selected={selected}>{children}</TabButton>}
    </Tab>
  );
};

TabC.propTypes = {
  children: PropTypes.node.isRequired
}
