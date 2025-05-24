import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";


export default function Register() {
    // Move useState inside the function component
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const validateEmail = (email) => {

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email)
    }

    const validatePassword = (password) =>{
        return password.length >= 8
    }

    const handleSubmit = (e)=>
    {
        //prevent the form from refreshing the whole page
        e.preventDefault()

        let valid = true

        if(!validateEmail(email)){
            setEmailError("Please enter a valid email")
            valid = false
        }
        else if(!validatePassword(password)){
            setPasswordError("Password must be at least 8 characters")
            valid = false
        }
        else{
            setPasswordError("")
            setEmailError("")
        }

        if(!valid)
            return 
        
        const configuration = {
        method: "post", 
        url: "http://localhost:5000/auth/register", 
        //url: "https://shopping-website-backend-ounn.onrender.com/auth/register", 
        data: {
            email,
            password
        }
       }
       axios(configuration)
       .then((result)=> {console.log("User registered successfully")})
       .catch((error)=> {error = new Error()})
    }


    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    {emailError && <p className='text-danger'>{emailError}</p>}
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    {passwordError && <p className='text-danger'>{passwordError}</p>}
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {/* submit button */}
                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={(e)=> handleSubmit(e)}
                >
                Register
                </Button>
                 
            </Form>
        </>
    );
}