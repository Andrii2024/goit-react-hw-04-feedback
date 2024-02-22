import React, { useState } from 'react';
// import { Component } from 'react';
import FeedbackApp from './Feedback/FeedbackApp';
import Statistics from './Statistic/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import styled from 'styled-components';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = feedbackType => {
    setGood(prevGood => prevGood + 1);
    setNeutral(prevNeutral => prevNeutral + 1);
    setBad(prevBad => prevBad + 1);
    // this.setState(prevState => ({
    //   [feedbackType]: prevState[feedbackType] + 1,
    // }));
  };
  const total = good + neutral + bad;
  return (
    <StyledWrapper>
      <h1>Please leave feedback</h1>
      <FeedbackApp onLeaveFeedback={handleLeaveFeedback} />
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      )}
    </StyledWrapper>
  );
};
export default App;
export const StyledWrapper = styled.div`
  border-radius: 10px;
  margin: 0 auto;
  background-color: antiquewhite;
  max-height: 300px;
  max-width: 400px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
`;
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = feedbackType => {
//     this.setState(prevState => ({
//       [feedbackType]: prevState[feedbackType] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;

//     return (
//       <StyledWrapper>
//         <h1>Please leave feedback</h1>
//         <FeedbackApp onLeaveFeedback={this.handleLeaveFeedback} />
//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="">
//             <Statistics good={good} neutral={neutral} bad={bad} />
//           </Section>
//         )}
//       </StyledWrapper>
//     );
//   }
// }
