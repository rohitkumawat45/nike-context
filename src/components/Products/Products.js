import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../../utilities/products'
import { PiHeartStraight, PiHeartStraightFill } from 'react-icons/pi'
import { ProductContext } from '../../context/ProductContext';
import "./products.css"
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Products() {

    const { cartItems, addToCart, addToWishlist, removeWishlist} = useContext(ProductContext);
    const cartItemCount = cartItems[PRODUCTS.id];
    const { search } = useContext(ProductContext);
    const [likedItems, setLikedItems] = useState([]);
    const isItemLiked = (id) => likedItems.includes(id);
    // useNavigate();

    const itemId = useLocation();

    const toggleLike = (id) => {
        if (isItemLiked(id)) {
            // If item is liked, remove it from likedItems
            setLikedItems(likedItems.filter((itemId) => itemId !== id));
        } else {
            // If item is not liked, add it to likedItems
            setLikedItems([...likedItems, id]);
        }
    };

    console.log(itemId);

    return (

        <div className='products'>

            <div className="products-wrapper">
                <div className='title'>
                    <h1>Shop Products</h1>
                </div>
                <div className="all-products">
                    {
                        PRODUCTS.filter((product)=> {
                            if (product.id === itemId.state.id){
                                return product.id
                            }
                            }).map((product) =>
                                <div className='product-card' key={product.id} >
                                <div>
                                    <img src={product.productImage} alt="" />
                                </div>
                                <div className="product-details">
                                    <h3>
                                        {product.productName}
                                    </h3>
                                    <h4>
                                        &#x20B9; {product.price}
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