import React, {useEffect, useState} from "react"
import axios from "axios"
import Cookies from "universal-cookie"
import {Button} from "react-bootstrap"
const cookies = new Cookies()

export default function AuthComponent(){
    const [message, setMessage] = useState("")

    useEffect(()=>{
        const token = cookies.get("TOKEN")
        //set configuration for the API call here
        const configuration = {
            method: "get",
            url:"http://localhost:5000/auth-endpoint",
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    
        //make the API call
        axios(configuration)
            .then((result)=>{
                setMessage(result.data.message)
            })
            .catch((error)=> {
                error = new Error()
            })

    },[])

    //logout 
    const logout = ()=>{
        cookies.remove("TOKEN", {path:"/"}) //destroy the cookie
        window.location.href = "/" 
    }

    return(
        <div className = "text-center">
            <h1 className='text-center'>Auth Component</h1>
            <h3 className='text-center text-danger'>{message}</h3>
            <Button type="submit" variant="danger" onClick={()=>logout()}>Logout</Button>
        </div>
    )
}