import PropTypes from 'prop-types';
import clsx from 'clsx';
import './delete-button.css';

const DeleteButton = ({ children, disabled }) => {
  const buttonClasses = clsx('btn-delete', {
    'opacity-40': disabled
  });

  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};

DeleteButton.defaultProps = {
  disabled: false
};
