import React from 'react';

export default function UserForm(){


    return(
        <form>
            <div>
                <label>Name
                    <input
                        name='name'
                        type='name'
                    />
                </label>
                <label>E-mail
                    <input  
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password
                    <input 
                        name='password'
                        type='type'
                    />
                </label>
                <label>Terms of Service
                    <input
                        name='terms'
                        type='checkbox'
                    />
                </label>
            </div>
        </form>
    )
}

