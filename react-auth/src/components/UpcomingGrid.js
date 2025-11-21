import React, {useEffect, useState} from "react";

export default function UpcomingGrid({items = []}){

    const [now, setNow] = useState(Date.now())    
    // const [items,setItems] = useState([])
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         try{
    //             const response = await axios.get("https://shopping-website-backend-8yq1.onrender.com/api/v1/products")
    //             const upcomingItems = response.data.products.filter(item=>item.upcoming === true)
    //             setItems(upcomingItems)
    //             console.log("FINISHED FETCHING")
    //         }
    //         catch(error){
    //             console.error("Error fetching data:", error)
    //         }
    //     }

    //     fetchData()
    // },[])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setNow(Date.now())
        },1000)
        return ()=>clearInterval(interval)
    },[])

    const getTimerString = ()=>{

        const releaseDate = new Date('2025-10-10T12:00:00').getTime()
        const remaining = releaseDate - now
        const days = Math.floor(remaining / (1000 * 60 * 60 *24))
        const hours = Math.floor((remaining % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
        const minutes = Math.floor((remaining % (1000 * 60 * 60 )) / (1000 * 60))
        const seconds = Math.floor((remaining % (1000 * 60 ))/ 1000)
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }


    return (
        <div className="upcoming-product-grid">
            <div className="upcoming-product-header">
                <p className="upcoming-header-text">UPCOMING RELEASES</p>
                <div className="upcoming_button_class">
                <a className="upcoming_button" href="/upcoming">Vezi toate</a>
                </div>
                <img src="/UpcomingGrid/next-date.png" className="next-date-icon" alt="Next date" />
            </div>

            <div className="upcoming-border-grid">
                <div className="upcoming-item-grid">
                    {items.map(item=>{
                        const {brand, images} = item
                        return(
                            <div className="product-item-upcoming" key={item.name}>
                                <img className="main_image" src={images[0]} alt='upcoming product icon'/>
                                <div className="item-favourite-name-box"><h2>{brand}</h2></div>
                                <div className="upcoming_item_timer">{getTimerString(item.releaseDate)}</div>
                            </div>
                        )
                    })}
                {/* Upcoming items go here */}
                </div>
                <button className="previous scroll-button">&#10094;</button>
                <button className="upper scroll-button">&#10095;</button>
            </div>
        </div>
    )
}