import React from 'react'
import Register from './Register'
import Login from './Login'

export default function Account()
{
    return(
        <div className='Auth-container'>
            <Register/>
            <Login/>
        </div>
    )
}