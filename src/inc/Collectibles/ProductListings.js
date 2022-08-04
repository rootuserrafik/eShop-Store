import React from 'react';
import './ProductListings.css';
import ProductListingsTopBr from './ProductListingsTopBr';
import Product from './Product';
import CK67L6I1 from '../Collectibles/Categories/shoes/items/ID#CK67L6/1.jpg';
import CK67L7I1 from '../Collectibles/Categories/shoes/items/ID#CK67L7/1.jpg';
import CK67L8I1 from '../Collectibles/Categories/shoes/items/ID#CK67L8/1.jpg';
import CK67L9I1 from '../Collectibles/Categories/shoes/items/ID#CK67L9/1.jpg';
import CK67L10I1 from '../Collectibles/Categories/shoes/items/ID#CK67L10/1.jpg';

function ProductListings() {
    return (
        <div className="productListings">
            <ProductListingsTopBr />

            <div className="PItems disf">
                <Product 
                    id="CK67L6"
                    title="Paul Parkman Men's Chukka Boots Brown & Blue"
                    images={CK67L6I1}
                    ratingSter= {5}
                    NumberOfRating= {3490}
                    NewPrice= {2990.00}
                    OldPrice= {3500.00}
                />
                <Product 
                    id="CK67L7"
                    title="New Gucci Men's Moccasin Leather Suede Loafers Shoes"
                    // imges={`${id}I1`}
                    images={CK67L7I1}
                    ratingSter= {4}
                    NumberOfRating= {490}
                    NewPrice= {1990.00}
                    OldPrice= {2500.00}
                />
                <Product 
                    id="CK67L8"
                    title="Micah Wingtip Boots (Black & Brown)"
                    images={CK67L8I1}
                    ratingSter= {3}
                    NumberOfRating= {390}
                    NewPrice= {5990.00}
                    OldPrice= {9500.00}
                />
                <Product 
                    id="CK67L9"
                    title="Brown Chukka Boots - Brown Leather Boots - Brown Ankle Boots - Minimalist "
                    images={CK67L9I1}
                    ratingSter= {4}
                    NumberOfRating= {640}
                    NewPrice= {2990.00}
                    OldPrice= {3500.00}
                />
                <Product 
                    id="CK67L10"
                    title="Brown Chukka Boots - Brown Leather Boots - Brown Ankle Boots - Minimalist "
                    images={CK67L10I1}
                    ratingSter= {3}
                    NumberOfRating= {340}
                    NewPrice= {3590.00}
                    OldPrice= {5900.00}
                />
            </div>
        </div>
    )
}

export default ProductListings