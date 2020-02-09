import React from 'react';

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
