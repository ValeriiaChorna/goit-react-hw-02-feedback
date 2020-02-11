import React from 'react';
import T from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(e => (
        <button type="button" name={e} onClick={onLeaveFeedback}>
          {e.toUpperCase()}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: T.arrayOf(T.string).isRequired,
  onLeaveFeedback: T.func.isRequired,
}