import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ProductContext } from '../../context/ProductContext'
import './wishlist.css'

function Wishlist() {

    const { wishlistItems, removeWishList } =useContext(ProductContext);

    return (
        <div className='wishlist-card'>
            <div className='wishlist-item'>
                <div className='title'>
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
                                            <h4 className="">INR {items.price}</h4>
                                        </div>
                                        <div className='functions'>
                                            <div className='removebtn'>
                                                <button onClick={() => removeWishList(items.id)}>Remove</button>
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