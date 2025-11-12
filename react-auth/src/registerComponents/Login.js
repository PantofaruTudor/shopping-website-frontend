import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import Cookies from "universal-cookie"
const cookies = new Cookies()

export default function Login()
{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [error , setError] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmitted(true)

        const apiUrl = process.env.REACT_APP_API_URL
        console.log('apiUrl')

        const configuration = {
            method: "post", 
            url: `${apiUrl}/auth/register`,  
            data:{
                email,
                password
            }
        }

        axios(configuration)
        .then((result)=>{
            setLogin(true)
            setError("")
            cookies.set("TOKEN", result.data.token, {path:"/"})
            window.location.href = "/auth"
        })
        .catch((error)=>{
            // error = new Error()
            setLogin(false) 
            setError("Invalid email or password")
        
            //alert("Error")
        })
    }

    return(
        <>
            <h2>Login</h2>
            <Form onSubmit = {(e)=> handleSubmit(e)}>
                {submitted && login && (
                    <p className='text-success'>You are Logged in Successfully</p>
                )}
                {submitted && error && <p className='text-danger'>{error}</p>}
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    value={email}    
                    onChange = {(e)=> setEmail(e.target.value)}
                />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange = {(e)=> setPassword(e.target.value)}

                />
                </Form.Group>

                {/* submit button */}
                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={(e)=>handleSubmit(e)}    
                >
                Submit
                </Button>
            </Form>
        </>
    )
}
