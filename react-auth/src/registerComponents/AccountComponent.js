import React from 'react'
import Register from './Register'
import Login from './Login'
import './AccountComponent.css'  // create this CSS file

export default function Account()
{
    return(
        <div className='auth-container'>
            <div className='auth-wrapper'>
                <div className='auth-form-section'>
                    <Register/>
                </div>
                <div className='auth-form-section'>
                    <Login/>
                </div>
            </div>
        </div>
    )
}