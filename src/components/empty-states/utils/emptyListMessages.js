import confetti from '../../../assets/confetti.png';
import approval from '../../../assets/approval.png';
import target from '../../../assets/target.png';
/**
 *
 * @param {*} completed
 */
export const getEmptyMessage = (completed) => {
  switch (completed) {
    case true:
      return { img: target, text: 'Go to and check yours todo' };
    case false:
      return { img: approval, text: 'Add new Todo' };
    default:
      return { img: confetti, text: 'Great job! You are done' };
  }
};
