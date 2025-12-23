import React from 'react';
import {Link} from 'react-router-dom'
import ProductItem from './ProductItem';

export default function ItemsGrid({ items = [], gridClass, button, title }) {
    return (
        <div className={gridClass}>

            {button && title && (
                <div className={`${title}_button_class`}>
                    <Link to={`/${title}`} className='noutati_button'>{button}</Link>
                </div>
            )}


            <div className='items-grid'>
                {items.map(item => (
                    <ProductItem
                        key={item._id}
                        {...item}
                        title={title}
                    />
                ))}
            </div>
        </div>
    );
}