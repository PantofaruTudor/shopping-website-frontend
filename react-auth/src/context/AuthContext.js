import {createContext, useState, useEffect, useContext} from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const checkAuth = () => {
        const token = cookies.get("TOKEN")
        setIsAuthenticated(!!token)
    }

    useEffect(()=>{
        checkAuth()
    },[])


    const value = {
        isAuthenticated  // State - components read this
    }

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}