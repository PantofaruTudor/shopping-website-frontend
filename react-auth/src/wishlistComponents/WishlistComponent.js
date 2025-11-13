import {useState,useEffect} from 'react'
import axios from 'axios'
import './WishlistComponent.css'

export default function Wishlist(){

    return(
        <div className='WL_container'>
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
    )
}