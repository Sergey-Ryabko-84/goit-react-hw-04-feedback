import styled from 'styled-components';

export const StatisticsWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  display: inline-flex;
  margin: 8px 0;
  padding: 2px 6px ;
  font-weight: 500;
  border-radius: 12px;

  :nth-of-type(1) {
    width: 76px;
    background-color: rgba(50, 255, 70, ${props => (props.value * 2) / props.total});
    box-shadow: rgba(50, 255, 70, ${props => (props.value * 2) / props.total}) 0px 0px 12px;
  }

  :nth-of-type(2) {
    width: 90px;
    background-color: rgba(50, 160, 255, ${props => (props.value * 2) / props.total});
    box-shadow: rgba(50, 160, 255, ${props => (props.value * 2) / props.total}) 0px 0px 12px;
  }

  :nth-of-type(3) {
    width: 64px;
    background-color: rgba(255, 60, 50, ${props => (props.value * 2) / props.total});
    box-shadow: rgba(255, 60, 50, ${props => (props.value * 2) / props.total}) 0px 0px 12px;
  }
`;

export const Value = styled.span`
  padding: 0 4px;
`;
