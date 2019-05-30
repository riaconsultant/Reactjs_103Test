import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
var Files = [
    {name: 'Document #1', name1: 'Me', nick: 'Dustin', type:'pdf', path: ''},
    {name: 'Document #2', name1: 'Me', nick: 'Dustin', type:'text', path: ''},
    {name: 'Document #3', name1: 'Me', nick: 'Dustin', type:'pdf', path: ''}
  ];

ReactDOM.render(<App Files={Files}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
