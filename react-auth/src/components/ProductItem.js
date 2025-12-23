import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import Cookies from 'universal-cookie'
import axios from 'axios'
const cookies = new Cookies()

export default function ProductItem({ brand, images, price, _id, name, title }) {
    const frontImages = images.slice(0, 2);
    const [hovered, setHovered] = useState(false);
    
    const {addToCart, openCart} = useContext(CartContext)
    const {isAuthenticated} = useContext(AuthContext)
    const {isInWishlist, addToWishlist,removeWishlist} = useContext(WishlistContext)
    const inWishlist = isInWishlist(_id)

    const token = cookies.get("TOKEN")
    const apiUrl = process.env.REACT_APP_API_URL
    const navigate = useNavigate()
    
    const handleItemWL = async() => {

        if(isAuthenticated){
            try{
                if(inWishlist){
                    console.log(`Removing ${name} from wishlist database`)
                    await axios.delete(`${apiUrl}/api/wishlist/remove/${_id}`,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    removeWishlist(_id)
                    console.log('removed from wishlist')
                }
                else{
                    console.log(`Adding ${name} to wishlist`)
                    await axios.post(`${apiUrl}/api/wishlist/add`,
                        {productID: _id},
                        {
                            headers:{
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )
                    addToWishlist(_id)
                    console.log('added to wishlist')
                }
            }
            catch(error){
                console.error('Error with handleItemWL')
                
            }

        }
        else{
            alert("Please log in to use the wishlist")
            navigate("/contul-meu")
            return
        }


    }

    const addItemCart = async() => {
        const cartItem = {
            productID: _id,
            name: name,
            brand: brand,
            price: price,
            image: images[0],
            quantity: 1
        }
        addToCart(cartItem)
        //openCart()
    }



    return (
        <div
            className='product-item'
            key={_id}
            data-images={JSON.stringify(frontImages)}
            >
            <img
                className='main_image'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                src={hovered && frontImages[1] ? frontImages[1] : frontImages[0]}
                alt={name}
            />
            <div className='item-favourite-name-box'>
                <p>{brand}</p>
                <h2>{name}</h2>
                <div className='item-price-favourite-box'>
                    <p id='full-price'>{price}$</p>
                    {title === "sales" && (
                        <p id='sale-price'>{Math.floor((price - price / 10) * 10) / 10}$</p>
                    )}

                    <button 
                        className='add-to-cart'
                        onClick={addItemCart}>
                        <img src='add-to-cart.png' alt="addToCart"/>
                    </button>
                    <button 
                        className='favourite-item'
                        onClick={handleItemWL}>
                        <img src={inWishlist ? '/black_star.png': '/white_star.png'} alt="favourite" />
                    </button>
                </div>
            </div>
        </div>
    );
}