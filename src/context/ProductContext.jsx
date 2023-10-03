import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const getDefaultWishlist=()=>{
    let wishlist ={};
    for(let i =1; i< PRODUCTS.length+1; i++){
        wishlist[i]=0;
    }
    return wishlist;
}

function ProductProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const removeItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const addToWishlist = (itemId)=>{
        setWishlistItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
    }

    const removeWishList = (itemId) => {
        setWishlistItems((prev) => ({ ...prev, [itemId]: 0 }));
    };

    const contextValue = {
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        removeItem,
        getTotalCartAmount,
        addToWishlist,
        removeWishList,
        checkout,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;