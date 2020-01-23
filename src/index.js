import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Sign from './Sign';
//import Text from './Text';


import * as serviceWorker from './serviceWorker';
//import Button from './Button';
//import ComboBox from './ComboBox';

//import label from './label';

ReactDOM.render(<Sign/>, document.getElementById('root'));
//ReactDOM.render(<Textfield />, document.getElementById('root'));
//ReactDOM.render(<password />, document.getElementById('root'));
//ReactDOM.render(<ComboBox />, document.getElementById('root'));
//ReactDOM.render(<RadioButton />, document.getElementById('root'));
//ReactDOM.render(<form/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
