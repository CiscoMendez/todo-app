import PropTypes from 'prop-types';
import clsx from 'clsx';

const PrimaryButton = ({ children, type, disabled}) => {
  const baseClass = 'flex items-center justify-center gap-1 bg-blue-500 text-white text-base font-medium px-6 py-4 min-w-[6.8rem] rounded-xl drop-shadow-md hover:bg-blue-400';
  const conditionalClasses = clsx({
    'opacity-40': disabled,
  });
  const className = `${baseClass} ${conditionalClasses}`;

  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  disabled: false,
};
