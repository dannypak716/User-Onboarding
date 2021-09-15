import React from 'react';

export default function UserForm(props){
    const {values, submit, change, disabled, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        name='name'
                        type='name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>E-mail
                    <input  
                        name='email'
                        type='text'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        name='password'
                        type='type'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input
                        name='terms'
                        type='checkbox'
                        value={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div>
                <h2>Add User</h2>
                <button disabled={disabled}>SUBMIT</button>
                {/* <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>    
                </div> */}
            </div>
        </form>
    )
}

