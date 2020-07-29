import React from 'react';
import ReactDOM from  'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './components/App';

//const element = <h1>Hello, my Router page</h1>;
const container = document.getElementById('app');

ReactDOM.render(<App />, container);
