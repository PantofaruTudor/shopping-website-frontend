import { useState,useEffect } from "react"
import axios from "axios"
import ItemsGrid from './ItemsGrid'
import Pagination from './Pagination'

export default function ItemsGridPage(category)
{
    const [allProducts, setAllProducts] = useState([])
    const [filters,setFilters] = useState({
        category:[],
        brand:[],
        color:[],
        size:[],
        sale:false,
        priceRange:{min:0,max:4000}
    })
    const [currentPage,setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL
                const response = await axios.get(`${apiUrl}/api/v1/products`)
                setAllProducts(response.data.products)
                console.log("FINISHED FETCHING in ItemsGridPage")
            } catch(error) {
                console.error("Error fetching data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const applyFilters = (products)=>{
        let filtered = products

        if(category ==='noutati')
        {
            filtered = filtered.filter(p=> !p.sale && !p.upcoming)
        }
        else if (category === 'sales') {
            filtered = filtered.filter(p => p.sale === true)
        } else if (category === 'upcoming') {
            filtered = filtered.filter(p => p.upcoming === true)
        }
    }


}