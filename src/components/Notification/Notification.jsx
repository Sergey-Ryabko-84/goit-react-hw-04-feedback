import PropTypes from 'prop-types';
import { NotifiText } from './Notification.styled';

export const Notification = ({ message }) => <NotifiText>{message}</NotifiText>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
