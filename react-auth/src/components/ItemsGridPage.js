import { useState,useEffect } from "react"
import axios from "axios"
import ItemsGrid from './ItemsGrid'
import Pagination from './Pagination'
import FiltersComponent from "./FiltersComponent"

const ItemsGridPage = ({category})=>{

    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filters,setFilters] = useState({
        brand:[],
        color:[],
        size:[],
        priceRange: {min:0 , max:4000}
    })
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 12

    useEffect(()=>{
        const fetchProducts = async() =>{
            try{
                const apiUrl = process.env.REACT_APP_API_URL
                const response = await axios.get(`${apiUrl}/api/v1/products`)
                const products = response.data.products
                console.log("API Response:", response.data)
                console.log("Products array:", products)
                let categoryProducts = products
                if(category === "noutati")
                    categoryProducts = products.filter(p=>p.sale === false && p.upcoming ===false)
                else if(category === "sales")
                    categoryProducts = products.filter(p =>p.sale === true)
                setAllProducts(categoryProducts)
                setFilteredProducts(categoryProducts)

            }
            catch(error)
            {
                console.log("Error:", error)
            }
        }
        fetchProducts()
    },[category])

    useEffect(()=>{
        let result = [...allProducts]
        if (filters.brand.length > 0) {
      result = result.filter(p => filters.brand.includes(p.brand));
    }

    // Filtrare după culoare
    if (filters.color.length > 0) {
      result = result.filter(p => filters.color.includes(p.color));
    }

    // Filtrare după preț
    result = result.filter(p => 
      p.price >= filters.priceRange.min && 
      p.price <= filters.priceRange.max
    );

    setFilteredProducts(result);
    setCurrentPage(1); // Reset la pagina 1 când se schimbă filtrele
  
    },[filters, allProducts])

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
    <div className="category-page">
      <div className="filter-items">
        <FiltersComponent 
          filters={filters}
          onFilterChange={setFilters}
          allProducts={allProducts}
        />
        <ItemsGrid 
            items={currentProducts}
            gridClass="noutati-full-grid"
            title="noutati"
          
          />
      </div>
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage }
        />
      </div>
    </div>
    
  );

}

export default ItemsGridPage
