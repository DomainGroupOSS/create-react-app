import React from 'react';
import ReactDOM from 'react-dom';
import FeCoDemo from '@domain-group/fe-co-demo';
import fixtures from './fixtures';
import './legacy.css';

ReactDOM.render(
  <FeCoDemo fixtureGroups={fixtures} />,
  document.getElementById('root'),
);
