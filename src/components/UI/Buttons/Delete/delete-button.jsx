import PropTypes from 'prop-types';
import clsx from 'clsx';

const DeleteButton = ({ children, disabled }) => {
  const buttonClasses = clsx('btn', {
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
