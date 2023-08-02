import clsx from 'clsx';
import './button.component.css';
import PropTypes from 'prop-types';
export const IconButton = ({ children, className, ...rest }) => {
  const classIconButton = clsx('btn-icon', className);
  return (
    <button className={classIconButton} {...rest}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
