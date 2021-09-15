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
const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [users, setUsers] = useState(initialUsers);  // array of users
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserForm values={formValues}/> 
    </div>
  );
}

export default App;
