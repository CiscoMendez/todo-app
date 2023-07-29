import PropTypes from 'prop-types';
import clsx from 'clsx';

const DeleteButton = ({ children, disabled }) => {
  const baseClass = 'flex items-center justify-center gap-1 bg-red-500 text-white text-base font-medium px-6 py-4 min-w-[6.8rem] rounded-xl drop-shadow-md hover:bg-red-400';
  const conditionalClasses = clsx({
    'opacity-40': disabled,
  });
  const className = `${baseClass} ${conditionalClasses}`;

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

DeleteButton.defaultProps = {
  disabled: false,
};
