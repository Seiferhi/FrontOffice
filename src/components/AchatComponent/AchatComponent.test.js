import React from 'react';
import ReactDOM from 'react-dom';
import AchatComponent from './AchatComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AchatComponent />, div);
});
