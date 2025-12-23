import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/CartComponent.css'

const CartComponent = () =>{
    const {isCartOpen ,closeCart, cartItems,removeItemCart} = useContext(CartContext)

    return (
        <>
            {isCartOpen && (
                <div
                    className = "cart-backdrop"
                    onClick={closeCart}    
                />

            )}

            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart ({cartItems.length})</h2>
                    <button onClick={closeCart}>✕</button>
                </div>
                
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Your cart is empty</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.productID} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <p className="item-brand">{item.brand}</p>
                                    <h4 className="item-name">{item.name}</h4>
                                    <p className="item-price">${item.price}</p>
                                </div>
                                <button 
                                    onClick={() => removeItemCart(item.productID)}
                                    className="remove-btn"
                                >
                                    <a>remove</a>
                                </button>
                            </div>
                        ))
                    )}
                </div>
                
                <div className="cart-footer">
                    <div className="cart-total">
                        Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartComponent