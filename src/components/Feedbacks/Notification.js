import React from 'react';
import T from 'prop-types';

export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: T.string.isRequired,
}