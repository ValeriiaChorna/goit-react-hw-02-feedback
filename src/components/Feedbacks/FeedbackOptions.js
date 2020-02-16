import React from 'react';
import T from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button type="button" key={option} name={option} onClick={onLeaveFeedback}>
          {option.toUpperCase()}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: T.arrayOf(T.string).isRequired,
  onLeaveFeedback: T.func.isRequired,
}