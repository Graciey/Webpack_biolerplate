import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';



// if(process.env.NODE_ENV === 'production') {
//     console.log('Production Mode')
// }
// else if(process.env.NODE_ENV === 'development') {
//     console.log('Development Mode')
// }

ReactDOM.render(<App />, document.getElementById('root'));

