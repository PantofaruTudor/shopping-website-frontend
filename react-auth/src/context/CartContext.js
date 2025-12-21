import React, {createContext, useState, useEffect, useContext} from 'react'

export const CartContext = createContext()
export const CartProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setCartOpen] = useState(false)

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
        console.log(localStorage.cart)
    },[cartItems])

    const addToCart = (item) =>{
        const savedCart = localStorage.getItem('cart')
        let cartArray = savedCart ? JSON.parse(savedCart): []
        const existingItem = cartArray.find(exisItem => exisItem.productID === item.productID)
        if(existingItem)
            return console.error("the item is already in the cart")

        let updatedCart
        updatedCart = [...cartArray,item]
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        setCartItems(updatedCart)
        
    }

    const openCart = ()=>{

    }

    const removeItemCart = () =>{

    }

    const value = {
        addToCart,
        openCart,
        removeItemCart
    }
    return (
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}
