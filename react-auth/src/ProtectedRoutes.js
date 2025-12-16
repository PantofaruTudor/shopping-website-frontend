import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export default function ProtectedRoutes({ children })
{
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {
        console.log("User not authenticated, redirecting to login");
        return <Navigate to="/contul-meu" replace />
    }

    console.log("User authenticated, access granted");
    return children
}