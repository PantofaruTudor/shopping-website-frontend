import React from 'react'
import ItemsGrid from './ItemsGrid'

export default function NoutatiGrid({items=[]}){
    
    const newItems = items.filter(item => !item.sale && !item.upcoming).slice(0,12)
    const saleItems = items.filter(item => item.sale).slice(0,12)

    return(
        <div id='Noutati_Grid'>
            <ItemsGrid items={newItems} gridClass="noutati-product-grid" button="Noutati"  title="noutati"/>
            <ItemsGrid items={saleItems} gridClass="sales-product-grid"  button="Reduceri" title="sales"/>
        </div>
    )

}