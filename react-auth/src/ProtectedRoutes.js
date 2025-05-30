import React from "react"
import {Route, Redirect} from "react-router-dom"
import Cookies from "universal-cookie"
const cookies = new Cookies()


//received component and any other props represented by ...rest
export default function ProtectedRoutes({component: Component, ...rest})
{
    return(
        //this route takes other routes assignet to it from the App.js and 
        //returns the same route if the conditions are met
        <Route
            {...rest}
            render={(props) => {
                // get cookie from browser if logged in
                const token = cookies.get("TOKEN");

                // returns route if there is a valid token set in the cookie
                if (token) {
                    console.log("Token found, access granted to protected route.");
                    return <Component {...props} />;
                } else {
                // returns the user to the landing page if there is no valid token set
                console.log("Token is INVALID");
                return (
                    <Redirect
                    to={{
                        pathname: "/",
                        state: {
                        // sets the location a user was about to access before being redirected to login
                        from: props.location,
                        },
                    }}
                    />
                );
                }
            }}
        />    
    )
}