import React from 'react';

export default function Section({ title, children }) {
  return (
    <div>
      <p className="title">{title}</p>
      {children}
    </div>
  );
}