import React,{useState, useEffect} from 'react'
import axios from "axios"
import NoutatiGrid from './NoutatiGrid';
import UpcomingGrid from './UpcomingGrid';
 
export default function ProductsProvider() {

    const [items,setItems] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get("https://shopping-website-backend-8yq1.onrender.com/api/v1/products")
                setItems(response.data.products)
                console.log("FINISHED FETCHING")
            }
            catch(error){
                console.error("Error fetching data:", error)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    },[])

    if(loading)
        return <div>Loading items...</div>;

    return (
        <>
            <NoutatiGrid items={items.filter(item => item.upcoming === false)} />
            <UpcomingGrid items={items.filter(item => item.upcoming === true)} />
        </>
    )


}