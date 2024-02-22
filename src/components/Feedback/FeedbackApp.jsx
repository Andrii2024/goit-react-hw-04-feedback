import React from 'react';

import { StyledButton, StyledWrapper } from './FeedbackApp.styled.js';

const FeedbackApp = ({ onLeaveFeedback }) => (
  <StyledWrapper>
    <StyledButton type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </StyledButton>
    <StyledButton type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </StyledButton>
    <StyledButton type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </StyledButton>
  </StyledWrapper>
);
export default FeedbackApp;
