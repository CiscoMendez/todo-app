import { getEmptyMessage } from './utils/emptyListMessages';
import PropTypes from 'prop-types';
export const EmptyList = ({ done }) => {
  const emptyMessage = getEmptyMessage(done);
  return (
    <div className="w-full flex flex-col items-center  py-20 gap-5 text-gray-400">
      <img src={emptyMessage.img} alt="Todo List" className="max-h-20 opacity-60" />
      <span>{emptyMessage.text}</span>
    </div>
  );
};

EmptyList.propTypes = {
  done: PropTypes.bool.isRequired
};
