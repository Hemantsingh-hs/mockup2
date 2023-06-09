// Scorecard.js
import React from 'react';

const Scorecard = ({ title, value }) => {
  return (
    <div className="scorecard">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Scorecard