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

function ProductProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [toggleHeart, setToggleHeart] = useState(false);

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

    const addToWishlist = (itemId, toggleHeart)=>{
        setCartItems((prev)=>({
            ...prev, [itemId]: 1
        }));
        for(let i=0; i<PRODUCTS.length ; i++){
            let proId = PRODUCTS.find((product)=> product.id=== itemId);
            if (proId){
                setToggleHeart((toggleHeart) => !toggleHeart);
            }
        }
    }

    const removeWishList = (itemId, toggleHeart) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
        setToggleHeart((toggleHeart) => !toggleHeart)
    };

    const contextValue = {
        cartItems,
        toggleHeart,
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