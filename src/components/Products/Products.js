import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../../products';
import { PiHeartStraight, PiHeartStraightFill } from 'react-icons/pi'
import { ProductContext } from '../../context/ProductContext';
import "./products.css"

function Products() {

    const { cartItems, addToCart, addToWishlist, removeWishlist } = useContext(ProductContext);
    const cartItemCount = cartItems[PRODUCTS.id];
    const { search } = useContext(ProductContext);
    const [likedItems, setLikedItems] = useState([]);
    const isItemLiked = (id) => likedItems.includes(id);

    const toggleLike = (id) => {
        if (isItemLiked(id)) {
            // If item is liked, remove it from likedItems
            setLikedItems(likedItems.filter((itemId) => itemId !== id));
        } else {
            // If item is not liked, add it to likedItems
            setLikedItems([...likedItems, id]);
        }
    };
    
    console.log(search);

    return (

        <div className='products'>

            <div className="products-wrapper">
                <div className='title'>
                    <h1>Shop Products</h1>
                    {/* <input className='searchFilter' type="text" placeholder='Search Products' onChange={(e) => { setSearch(e.target.value) }} value={search} /> */}
                </div>
                <div className="all-products">
                    {
                        PRODUCTS.filter((product)=> {
                            return search.toLowerCase === '' ? product : product.productName.toLowerCase().includes(search.toLowerCase())}).map((product) =>
                            <div className='product-card' key={product.id}>
                                <div>
                                    <img src={product.productImage} alt="" />
                                </div>
                                <div className="product-details">
                                    <h3>
                                        {product.productName}
                                    </h3>
                                    <h4>
                                        INR {product.price}
                                    </h4>
                                </div>
                                <div className="btns">
                                    {isItemLiked(product.id) ? (
                                        <PiHeartStraightFill
                                            className="wishlist"
                                            size={30}
                                            onClick={() => {
                                                toggleLike(product.id);
                                                removeWishlist(product.id);
                                            }}
                                        />
                                    ) : (
                                        <PiHeartStraight
                                            className="wishlist"
                                            size={30}
                                            onClick={() => {
                                                toggleLike(product.id);
                                                addToWishlist(product.id);
                                            }}
                                        />
                                    )}
                                    {/* <PiHeartStraight className="wishlist" size={35} onClick={() => {
                                         addToWishlist(product.id) }} /> */}
                                    <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
                                        Add To Cart {cartItemCount > 0 && <div> ({cartItemCount})</div>}
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Products