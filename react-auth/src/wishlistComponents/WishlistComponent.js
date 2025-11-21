import {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Cookies  from 'universal-cookie'
import './WishlistComponent.css'
import ItemsGrid from '../components/ItemsGrid'


const cookies = new Cookies()

export default function Wishlist(){
    const [isLoading,setIsLoading] = useState(true)
    const [wishlistItems, setWishlistItems] = useState([])

    useEffect(()=>{
        fetchWishList()
    },[])

    const fetchWishList = async() =>{
        console.log('STARTING fetchWishList')
        try{
            const token = cookies.get("TOKEN")
            const apiUrl = process.env.REACT_APP_API_URL

            const response = await axios.get(`${apiUrl}/api/wishlist`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log('Response received:', response.data)
            setWishlistItems(response.data.wishlist)
            setIsLoading(false)
            console.log('Loading set to false')

        }catch(error){
            console.log("nu gaseste pagina de wishlist")
            console.log(error)
            setIsLoading(false)
        }


    }

    if(isLoading){
        return <div>Loading...</div>
    }

    return(
        <div className='WL_container'>
            <div className='WL_header_section'>
                <div className='WL_Icon_header'>
                    <img src='/Wishlist/complete.png'></img>
                </div>

                <div className='WL_header'>
                        
                    <h1 className='wishlist-title'>WISHLIST</h1>
                    <p className='wishlist-description'>
                        Cu toții avem dorințe, iar acestea sunt ale tale. De ce este această listă importantă? 
                        O poți distribui. În acest fel, poți "da un indiciu" cuiva care dorește să îți ofere un cadou. 
                        Sau dacă consideri că vei cumpăra un produs ceva mai târziu, îl poți salva aici și îl vei găsi 
                        mai ușor atunci când vei avea nevoie.
                    </p>
                    <div className='WL_edit'>
                        <img src='/Wishlist/edit.png'></img>
                        <button className='edit-wishlist'>
                        Editează wishlist
                        </button>
                    </div>
                    
                </div>
            </div>

            <div className='WL_list'>
                <ItemsGrid 
                    items={wishlistItems}
                    gridClass="wishlist-items-grid"
                    title="wishlist"
                />
            </div>
        </div>
        
    )
}