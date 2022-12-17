import PropTypes from 'prop-types';
import { StatisticsWrapper, Text, Value } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsWrapper>
    <Text value={good} total={total}>
      Good:
      <Value>{good}</Value>
    </Text>
    <Text value={neutral} total={total}>
      Neutral:
      <Value>{neutral}</Value>
    </Text>
    <Text value={bad} total={total}>
      Bad:
      <Value>{bad}</Value>
    </Text>
    <Text>
      Total:
      <Value>{total}</Value>
    </Text>
    <Text>
      Positive feedback:
      <Value>{positivePercentage}</Value>
    </Text>
  </StatisticsWrapper>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
