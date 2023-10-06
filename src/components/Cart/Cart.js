import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom';
import './cart.css';


function Cart() {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, removeItem, cartItems, getTotalCartAmount } = useContext(ProductContext);

  return (
    <div className='cart'>
      <div className='cart-item'>
        <div className='cart-title'>
          <h1>Your Items</h1>
        </div>
        <div className='item-wrapper'>
          {
            PRODUCTS.map((items) => {
              if (cartItems[items.id] !== 0) {
                return <div className='item-card' key={items.id}>
                  <div className='item-image'>
                    <img src={items.productImage} alt="" />
                  </div>
                  <div className="allDetails">
                    <div className="item-details">
                      <h3 className="">{items.productName}</h3>
                      <h4 className="">INR {items.price}</h4>
                    </div>
                    <div className='func'>
                      <div className="counter">
                        <button onClick={() => addToCart(items.id)}>+</button>
                        <p>{cartItems[items.id]}</p>
                        <button onClick={() => removeFromCart(items.id)}>-</button>
                      </div>
                      <div className='cartbtn'>
                        <button onClick={() => removeItem(items.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              }
            })
          }
        </div>
      </div>
      <div className="cart-summary">
        <div>
          <h1 className='summary'>Cart Summary</h1>
        </div>
        <div className="details">
          <p className='total'>Sub Total : {getTotalCartAmount()}</p>
          <div className="funbtn">
            <button>Checkout</button>
            <button onClick={() => navigate("/nike-context")}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart