import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './button.component.css';

export const TabButton = React.forwardRef(({ children, className, selected, ...rest }, ref) => {
  const tabBClasses = clsx('bnt-tab', className, { 'border-b-2 border-blue-500': selected });

  return (
    <button ref={ref} className={tabBClasses} {...rest}>
      {children}
    </button>
  );
});

TabButton.displayName = 'TabButton';

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool
};
