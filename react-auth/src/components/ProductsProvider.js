import React,{useState, useEffect} from 'react'
import axios from "axios"
import NoutatiGrid from './NoutatiGrid';
import UpcomingGrid from './UpcomingGrid';
import ItemsGrid from './ItemsGrid';
 
export default function ProductsProvider({category}) {

    const [items,setItems] = useState([])
    const [loading, setLoading] = useState(true);

    console.log('ProductsProvider received category:', category)


    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const apiUrl = process.env.REACT_APP_API_URL
                const response = await axios.get(`${apiUrl}/api/v1/products`)
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

    if (!category || category === 'homepage') {
        return (
            <>
                <NoutatiGrid items={items.filter(item => item.upcoming === false)} />
                <UpcomingGrid items={items.filter(item => item.upcoming === true)} />
            </>
        )
    }

    if (category === 'noutati') {
        const noutatiItems = items.filter(item => 
            item.upcoming === false && item.sale === false
        )
        return (
            <ItemsGrid 
                items={noutatiItems} 
                gridClass="noutati-full-grid"
                title="noutati"
            />
        )
    }

    if (category === 'sales') {
        const salesItems = items.filter(item => item.sale === true)
        return (
            <ItemsGrid 
                items={salesItems} 
                gridClass="sales-full-grid"
                title="sales"
            />
        )
    }


}