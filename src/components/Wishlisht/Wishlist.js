import React, { useContext } from 'react'
import { PRODUCTS } from '../../utilities/products'
import { ProductContext } from '../../context/ProductContext'
import './wishlist.css'

function Wishlist() {

    const { wishlistItems, removeWishlist, addToCart } =useContext(ProductContext);

    return (
        <div className='wishlist-card'>
            <div className='wishlist-item'>
                <div className='wishlist-title'>
                    <h1>Your Wishlist</h1>
                </div>
                <div className='wishlist-wrapper'>
                    {
                        PRODUCTS.map((items) => {
                            if (wishlistItems[items.id] !== 0) {
                                return <div className='card' key={items.id}>
                                    <div className='image'>
                                        <img src={items.productImage} alt="" />
                                    </div>
                                    <div className="allDetails">
                                        <div className="details">
                                            <h3 className="">{items.productName}</h3>
                                            <h4 className="">&#x20B9; {items.price}</h4>
                                        </div>
                                        <div className='functions'>
                                            <div className='removebtn'>
                                                <button className= "addBtn" onClick={() => addToCart(items.id)}>Add To Cart</button>
                                                <button onClick={() => removeWishlist(items.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist;