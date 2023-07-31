import clsx from 'clsx';
import './input.component.css';
import PropTypes from 'prop-types';
export const Input = ({ className, ...rest }) => {
  const inputClasses = clsx('input-c', className);

  return <input className={inputClasses} {...rest} />;
};

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
