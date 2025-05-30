import React from 'react';
import ProductItem from './ProductItem';

export default function ItemsGrid({ items = [], gridClass, button, title }) {
    return (
        <div className={gridClass}>
            <div className={`${title}_button_class`}>
                <a href={`/${title}`} className='noutati_button'>{button}</a>
            </div>
            <div className='items-grid'>
                {items.map(item => (
                    <ProductItem
                        key={item.id}
                        {...item}
                        title={title}
                    />
                ))}
            </div>
        </div>
    );
}