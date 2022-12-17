import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const FeedbackButton = styled.button`
  width: 80px;
  height: 32px;
  color: #fff;
  background-color: #2b4055d0;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 5px 0px;

  ::first-letter {
    text-transform: uppercase;
  }

  :hover {
    background-color: #2b4055f0;
    box-shadow: rgba(50, 160, 190, 0.75) 0px 0px 12px;

    :first-of-type {
      box-shadow: rgba(50, 190, 70, 0.75) 0px 0px 12px;
    }

    :last-of-type {
      box-shadow: rgba(190, 50, 50, 0.75) 0px 0px 12px;
    }
  }
`;
