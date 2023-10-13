import { createContext, useState } from "react";
import { PRODUCTS } from "../utilities/products";
import { useParams } from "react-router-dom";

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
    const params = useParams();
    const { itemId } = params;


    const[filter,setFilter]= useState();
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());
    const [search, setSearch] = useState('');
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

    const addToWishlist = (proId)=>{
        setWishlistItems((prev) => ({ ...prev, [proId]: 1}));
    }

    const removeWishlist = (proId) => {
        setWishlistItems((prev) => ({ ...prev, [proId]: 0 }));
    };

    const contextValue = {
        cartItems,
        wishlistItems,
        search,
        filter,
        addToCart,
        removeFromCart,
        removeItem,
        getTotalCartAmount,
        addToWishlist,
        removeWishlist,
        setSearch,
        setFilter,
        checkout,
        params,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;