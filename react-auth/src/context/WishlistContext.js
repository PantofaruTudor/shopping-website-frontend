import React,{createContext,useState,useEffect} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const WishlistContext = createContext()

export const WishlistProvider = ({children}) =>{
    const [wishlistIDs, setWishlistIDs] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        fetchWishlistIDs()
    },[])

    const fetchWishlistIDs = async() =>{
        try{
            const token = cookies.get("TOKEN")
            
            if(!token){
                setIsLoading(false)
                return
            }

            const apiUrl = process.env.REACT_APP_API_URL
            const response = await axios.get(`${apiUrl}/api/wishlist`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const ids = response.data.wishlist.map(item=>item._id)
            setWishlistIDs(ids)
            setIsLoading(false)

        }catch(error)
        {
            console.error('Error fetching wishlist:', error)
            setIsLoading(false)
        }
    }

    const isInWishlist = (productID)=>{
        return wishlistIDs.includes(productID)
    }
    const removeWishlist = (productID)=>{
        setWishlistIDs(prev=> prev.filter(id=> id !==productID))
    }

    const value = {
        wishlistIDs,
        isLoading,
        isInWishlist,
        removeWishlist,
        refreshWishlist: fetchWishlistIDs
    }

    return (
        <WishlistContext.Provider value = {value}>
            {children}
        </WishlistContext.Provider>
    )
}