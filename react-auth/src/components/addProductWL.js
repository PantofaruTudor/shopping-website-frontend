import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const addItemWL = async(productID)=>{
    try{
        const token = cookies.get("TOKEN")

        if(!token){
            throw new Error('User not authenticated')
        }

        const apiURL = process.env.REACT_APP_API_URL
        const response = await axios.post(
            `${apiURL}/api/wishlist/add`,
            {productID: productID},
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return {success:true, data: response.data}
    }
    catch(error)
    {
        console.log('Error adding item to wishlist')
        return{
            success: false,
            error: error.message
        }
    }
}