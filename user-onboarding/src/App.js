import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm.js';
import React, {useState} from 'react';



function App() {
  // const [users, setUsers] = useState();






  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserForm /> 
    </div>
  );
}

export default App;
