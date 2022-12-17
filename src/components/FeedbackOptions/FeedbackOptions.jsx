import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackWrapper>
    {options.map(option => (
      <FeedbackButton
        type="button"
        name=""
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
