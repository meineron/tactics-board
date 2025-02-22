import React from 'react';
import { Component } from 'react';


class GoalIcon extends Component {

  render() {
    return (
      <g id="goal-icon">
        <rect width="100" height="300" fill="url(#goal-net)" stroke="#777777" strokeWidth="4" />
        <line x1="100" x2="100" y1="0" y2="300" strokeWidth="5" stroke="white" />
        <line x1="100" x2="100" y1="0" y2="300" stroke="red" strokeDasharray="20" strokeWidth="6" />
      </g>
    );
  }
}

export default GoalIcon;