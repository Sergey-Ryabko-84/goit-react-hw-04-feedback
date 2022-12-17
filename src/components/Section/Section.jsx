import PropTypes from 'prop-types';
import { SectionkWrapper } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionkWrapper>
    <h2>{title}</h2>
    {children}
  </SectionkWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
