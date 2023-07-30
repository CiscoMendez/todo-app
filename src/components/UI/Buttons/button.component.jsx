import clsx from 'clsx';
import PropTypes from 'prop-types';
import { getButtonVariant } from './utils/buttonVariants';
import './button.component.css';
export const Button = ({ children, variant, className, disabled, ...rest }) => {
  const buttonClasses = clsx('btn', className, getButtonVariant(variant));

  return (
    <button {...rest} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string
};
