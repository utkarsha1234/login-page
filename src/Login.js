import React from 'react';
//import logo from './logo.svg';
import './Login.css';

function Login() {
  return (
     <form>
         <label>
             Name:
               <input type='text' name='name'/>
               
         </label>

         <label>
             Name:
               <input type='text' name='surname'/>
               </label>
     </form>
    
  );
}

export default Login;
