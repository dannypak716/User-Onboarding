import React from 'react';

export default function User({user}){
    return(
        <div className='user-container'>
            <h2>{user.first_name} {user.last_name}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
}