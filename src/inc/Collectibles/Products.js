import React from 'react'
import ProductListings from './ProductListings'
import ProductPageSideBr from './ProductPageSideBr'
import './Products.css';

function Products() {
    return (
        <div className="Products__Pages">
            {/* Page title */}
            <h1>Men's Vintage Shoes</h1>
            <div className="productBody disf">
                {/* Left Sidebar */}
                <ProductPageSideBr />
                {/* Product Listings */}
                <ProductListings />
            </div>
        </div>
    )
}

export default Products
