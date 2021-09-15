import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm.js';
import React, {useState} from 'react';


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialUsers = [];

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState(initialUsers);


  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserForm /> 
    </div>
  );
}

export default App;
