import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../../utilities/products'
import { PiHeartStraight, PiHeartStraightFill } from 'react-icons/pi'
import { ProductContext } from '../../context/ProductContext';
import "./products.css"
import { useLocation } from 'react-router-dom';

function Products() {

    const { cartItems, addToCart, addToWishlist, removeWishlist } = useContext(ProductContext);
    const cartItemCount = cartItems[PRODUCTS.id];
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

    return (

        <div className='products'>

            <div className="products-wrapper">
                <div className="all-products">
                    {
                        PRODUCTS.filter((product) => {
                            if (product.id === itemId.state.id) {
                                return product.id
                            }
                        }
                        ).map((product) =>
                            <div className='product-card' key={product.id} >
                                <div className="product-summary">
                                    <div className='image-pro'>
                                        <img src={product.productImage} alt="" />
                                        <div className="wishlist-btn">
                                            {isItemLiked(product.id) ? (
                                                <PiHeartStraightFill
                                                    className="wishlist" size={35}
                                                    onClick={() => {
                                                        toggleLike(product.id);
                                                        removeWishlist(product.id);
                                                    }}
                                                />
                                            ) : (
                                                <PiHeartStraight
                                                    className="wishlist" size={35}
                                                    onClick={() => {
                                                        toggleLike(product.id);
                                                        addToWishlist(product.id);
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="productinfo">
                                        <div className="product-details">
                                            <div className="head-product">
                                                <h3>
                                                    {product.productName}
                                                </h3>
                                                <h4>
                                                    &#x20B9; {product.price}
                                                </h4>
                                            </div>
                                            <div className="offers">
                                                <ul>
                                                    <h5>Available Offers</h5>
                                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, dolores.</li>
                                                    <li>Lorem ipsum dolor sit amet.</li>
                                                    <li>lore9
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="btns">
                                                {/* <div className="wishlist-btn">
                                                {isItemLiked(product.id) ? (
                                                    <PiHeartStraightFill
                                                        className="wishlist" size={45}
                                                        onClick={() => {
                                                            toggleLike(product.id);
                                                            removeWishlist(product.id);
                                                        }}
                                                    />
                                                ) : (
                                                    <PiHeartStraight
                                                        className="wishlist" size={45}
                                                        onClick={() => {
                                                            toggleLike(product.id);
                                                            addToWishlist(product.id);
                                                        }}
                                                    />
                                                )}
                                            </div> */}
                                                <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
                                                    Add To Cart {cartItemCount > 0 && <div> ({cartItemCount})</div>}
                                                </button>
                                                <button className="addToCartBttn"> Buy Now</button>
                                            </div>

                                            <div className="description">
                                                <h4>Product Description</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt reiciendis atque libero, corporis quae aliquam repellat repellendus eos aut, veniam a eius voluptates officiis, fugiat dolor laboriosam architecto mollitia modi magnam ea ut dicta? Unde, enim, error recusandae fuga, reprehenderit harum dignissimos esse ipsum cum obcaecati iusto perferendis necessitatibus?</p>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="reviews">
                                    <h3>Reviews</h3>
                                    <div className="review-card">
                                        <div className="review">
                                            <h4>User213</h4>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odio quis culpa vel unde excepturi voluptatum, sapiente ullam sit, neque quasi. Cupiditate modi provident tempore commodi unde reprehenderit doloremque. Animi!</p>
                                        </div>
                                        <div className="review">
                                            <h4>User213</h4>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odio quis culpa vel unde excepturi voluptatum, sapiente ullam sit, neque quasi. Cupiditate modi provident tempore commodi unde reprehenderit doloremque. Animi!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recommendation">
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