import './App.css';
import UserForm from './UserForm.js';
import User from './User.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema.js';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false
}

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [users, setUsers] = useState(initialUsers);  // array of users
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(resp => {
        setUsers(resp.data.data);
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(resp => {
        setUsers([resp.data, ...users]);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err)
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/> 
      {
        users && users.map(user => {
          return (
            <User key={user.id} user={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
