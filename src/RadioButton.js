import React from 'react';
//import logo from './logo.svg';
import './RadioButton.css';

function RadioButton() {
  return (
    <form>
      <input type = "Radio" name= "fruit" value= "apple"/>Apple
      <input type = "Radio" name= "fruit" value= "banana"/>Banana

</form>
    
  );
}

export default RadioButton;
