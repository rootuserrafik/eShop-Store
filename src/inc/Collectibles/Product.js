import React from 'react';
import { Link } from "react-router-dom";
import './Product.css';
import StarIcon from '@material-ui/icons/Star';

function Product({id, images, title, ratingSter, NumberOfRating, NewPrice, OldPrice}) {


    return (
        <div className="singlePItem">
            {/* img */}
            {/* title */}
            {/* rating Star| Total Number of Rating*/}
            {/* New price | Old Price */}
            {/* Discount */}
            {/* Shipping Cost */}

            <img className="ProductThumbnail" src={images} alt={title}/>
            <div className="textInfo">
                <Link to={`/spro/id#${id}`}><h1 className="ProductTitle">{title} {`ID#${id}`}</h1></Link>
                <span className="rating disf">
                    <div className="star">
                        {
                            Array(ratingSter)
                            .fill()
                            .map((_, i) => (
                                <StarIcon />
                            ))
                        }
                    </div>
                    <p className="NumberOfRating">{NumberOfRating}</p>
                </span>
                <div className="product__Price">
                    <p>
                        ৳{NewPrice} to <s>৳{OldPrice}</s>
                    </p>
                </div>
                <div className="AcctionBtn">
                    <Link to="/cart" className="btn">Add to Cart</Link>
                </div>
            </div>

        </div>
    )
}

export default Product
