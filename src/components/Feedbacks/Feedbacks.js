import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class Feedbacks extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseValue = e => {
    const value = e.target.name;
    this.setState({
      [value]: this.state[value] + 1,
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.floor((positive / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.increaseValue}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics:">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}

export default Feedbacks;
