// src/WebsiteCategoryComponents/FiltersComponent.js
import React, { useState } from 'react';
import '../styles/filters_template.css'; // Presupun că ai acest fișier CSS

const FiltersComponent = ({ filters, onFilterChange, allProducts }) => {
  const [openSections, setOpenSections] = useState({
    brand: false,
    color: false,
    size: false,
    price: false
  });


  const uniqueBrands = [...new Set(allProducts.map(p => p.brand))];
  const uniqueColors = [...new Set(allProducts.map(p => p.color))];
  const uniqueSizes = [...new Set(allProducts.flatMap(p => p.sizes || []))];

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brand.includes(brand)
      ? filters.brand.filter(b => b !== brand)
      : [...filters.brand, brand];
    onFilterChange({ ...filters, brand: newBrands });
  };

  const handleColorChange = (color) => {
    const newColors = filters.color.includes(color)
      ? filters.color.filter(c => c !== color)
      : [...filters.color, color];
    onFilterChange({ ...filters, color: newColors });
  };

  const handleSizeChange = (size) => {
    const newSizes = filters.size.includes(size)
      ? filters.size.filter(s => s !== size)
      : [...filters.size, size];
    onFilterChange({ ...filters, size: newSizes });
  };

  const handlePriceChange = (min, max) => {
    onFilterChange({ ...filters, priceRange: { min, max } });
  };

  return (
    <div className="filters-sidebar">

      {/* Brand Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('brand')}>
          <p>Brand</p>
          <span>{openSections.brand ? '▼' : '▶'}</span>
        </div>
        {openSections.brand && (
          <div className="filter-content">
            {uniqueBrands.map(brand => (
              <label key={brand}>
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('color')}>
          <p>Color</p>
          <span>{openSections.color ? '▼' : '▶'}</span>
        </div>
        {openSections.color && (
          <div className="filter-content">
            {uniqueColors.map(color => (
              <label key={color}>
                <input
                  type="checkbox"
                  checked={filters.color.includes(color)}
                  onChange={() => handleColorChange(color)}
                />
                {color}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('size')}>
          <p>Size</p>
          <span>{openSections.size ? '▼' : '▶'}</span>
        </div>
        {openSections.size && (
          <div className="filter-content">
            {uniqueSizes.map(size => (
              <label key={size}>
                <input
                  type="checkbox"
                  checked={filters.size.includes(size)}
                  onChange={() => handleSizeChange(size)}
                />
                {size}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection('price')}>
          <p>Price Range</p>
          <span>{openSections.price ? '▼' : '▶'}</span>
        </div>
        {openSections.price && (
          <div className="filter-content">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceRange.min === 0 ? '' : filters.priceRange.min}
              onChange={(e) => handlePriceChange(e.target.value === '' ? 0 : Number(e.target.value), filters.priceRange.max)}
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.priceRange.max === 0 ? '' : filters.priceRange.max}
              onChange={(e) => handlePriceChange(filters.priceRange.min, e.target.value === '' ? 0 : Number(e.target.value))}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltersComponent;