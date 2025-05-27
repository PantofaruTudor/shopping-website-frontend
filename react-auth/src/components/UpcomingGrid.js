import React, {useRef, useEffect, useState} from "react";
import axios from "axios"


export default function UpcomingGrid(){

    const [items,setItems] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get("https://shopping-website-backend-8yq1.onrender.com/api/v1/products")
                setItems(response.data)
            }
            catch(error){
                console.error("Error fetching data:", error)
            }
        }
    })


    return (
        <div className="upcoming-product-grid">
            <div className="upcoming-product-header">
                <p className="upcoming-header-text">UPCOMING RELEASES</p>
                <div className="upcoming_button_class">
                <a className="upcoming_button" href="#">Vezi toate</a>
                </div>
                <img src="/UpcomingGrid/next-date.png" className="next-date-icon" alt="Next date" />
            </div>

            <div className="upcoming-border-grid">
                <div className="upcoming-item-grid">
                    {items.map(item=>(
                        <div key={item.id}>{item.name}</div>
                    ))}
                {/* Upcoming items go here */}
                </div>
                <button className="previous scroll-button">&#10094;</button>
                <button className="upper scroll-button">&#10095;</button>
            </div>
        </div>
    )
}