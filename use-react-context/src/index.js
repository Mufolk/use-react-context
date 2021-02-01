import React from 'react';
import ReactDOM from 'react-dom';
import {UserProvider} from './UserContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);

