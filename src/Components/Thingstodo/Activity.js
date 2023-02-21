import React from 'react';

const Activity = ({ activity }) => {
  return (
    <li>
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>
    </li>
  );
};

export default Activity;
