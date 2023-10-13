import React from 'react'
import CategoryBar from '../CategoryBar/CategoryBar'
import { PRODUCTS } from '../../../utilities/products'
import './clothing.css'
import { useNavigate } from 'react-router-dom';

function Clothing() {

  const navigate = useNavigate();

  return (
    <div className='clothing-card'>
      <CategoryBar />
      <div className="clothing-wrapper">
       
        <div className='clothes'>
          {
            PRODUCTS.filter((item) => {
              return item.category.includes("clothing") ;
            }).map((pro) => {
              return <div className='cloth-wrapper'>
                <div className='cloth-card' key={pro.id} onClick={() => navigate("/products", { state: { id: pro.id } })}>
                  <div className='cloth-image'>
                    <img src={pro.productImage} alt="" />
                  </div>
                  <div className="cloth-details">
                    <h3>
                      {pro.productName}
                    </h3>
                    <h4>
                      &#x20B9; {pro.price}
                    </h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eligendi optio voluptatibus commodi architecto repellendus laborum reprehenderit quisquam impedit iure quidem delectus, cupiditate pariatur velit, officia quae esse? Incidunt, deleniti.</p>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Clothing