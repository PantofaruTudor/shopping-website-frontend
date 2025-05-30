import React, { useState } from 'react';

export default function ProductItem({ brand, images, price, id, name, title }) {
    const frontImages = images.slice(0, 2);
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className='product-item'
            key={id}
            data-images={JSON.stringify(frontImages)}
            >
            <img
                className='main_image'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                src={hovered && frontImages[1] ? frontImages[1] : frontImages[0]}
                alt={name}
            />
            <div className='item-favourite-name-box'>
                <p>{brand}</p>
                <h2>{name}</h2>
                <div className='item-price-favourite-box'>
                    <p id='full-price'>{price}$</p>
                    {title === "sales" && (
                        <p id='sale-price'>{Math.floor((price - price / 10) * 10) / 10}$</p>
                    )}
                    <button className='favourite-item'>
                        <img src='white_star.png' alt="favourite" />
                    </button>
                </div>
            </div>
        </div>
    );
}