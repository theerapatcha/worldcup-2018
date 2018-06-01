import React from 'react';
import { render } from 'react-dom';
import App from './app';
console.log('render', App);
render((<App/>), document.getElementById('root'));
