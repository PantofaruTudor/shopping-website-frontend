//THIS FILE IS USED FOR PROTECTION OF THE ROUTES
import React, {useEffect, useState} from 'react'
import axios from "axios"



export default function FreeComponent()
{
    //set an initial state for the message we will reveive after the API call
    const [message, setMessage] = useState("")

    useEffect(()=> {
        //set configurations for the API call here
        const configuration = {
            method: "get", 
            url: "http://localhost:5000/free-endpoint"
        }
    
        //make the API call
        axios(configuration)
            .then((result)=> {
    
                //assign the message in our result to the message we initialized above
                setMessage(result.data.message)
            })
            .catch((error)=>{
                error = new Error()
            })
    
    },[])


    return (
        <div>
            <h1 className='text-center'>Free Component</h1>
            <h3 className='text-center text-danger'>{message}</h3>
        </div>
    )
}