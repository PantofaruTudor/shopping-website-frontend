import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()
export const CartProvider = ({children}) =>{

    // Initialize cart from localStorage
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })
    const [isCartOpen, setCartOpen] = useState(false)


    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
        console.log('Cart saved to localStorage:', cartItems)
    },[cartItems])


    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isCartOpen])

    const addToCart = (item) =>{
        const existingItem = cartItems.find(exisItem => exisItem.productID === item.productID)
        if(existingItem){
            console.error("The item is already in the cart")
            return
        }

        const updatedCart = [...cartItems, item]
        setCartItems(updatedCart)
    }

    const openCart = () => {
        setCartOpen(true)
        console.log('cart open')
    }

    const closeCart = () => {
        setCartOpen(false)
        console.log('cart closed')
    }

    const removeItemCart = (productID) => {
        const updatedCart = cartItems.filter(item => item.productID !== productID)
        setCartItems(updatedCart)
    }

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem('cart')
    }

    const updateCart = (newCartItems) => {
        setCartItems(newCartItems)
    }

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        openCart,
        closeCart,
        removeItemCart,
        clearCart,
        updateCart
    }
    return (
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}
