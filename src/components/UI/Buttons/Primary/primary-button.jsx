import PropTypes from 'prop-types';
import clsx from 'clsx';
import './primary-button.css';
export const PrimaryButton = ({ children, type, disabled }) => {
  const buttonClasses = clsx('btn-primary', {
    'opacity-40': disabled
  });

  return (
    <button type={type} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

PrimaryButton.defaultProps = {
  disabled: false
};
