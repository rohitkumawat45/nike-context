import React from 'react'
import CategoryBar from '../CategoryBar/CategoryBar'
import './shoes.css'
import { PRODUCTS } from '../../../utilities/products'
import { useNavigate } from 'react-router-dom'

function Shoes() {

  const navigate = useNavigate();

  return (
    <div className='shoes-card'>
      <CategoryBar />
      <div className="shoes-wrapper">

        <div className='shoes'>
          {
            PRODUCTS.filter((item) => {
              return item.category.includes("shoes")
            }).map((pro) => {
              return <div className='shoe-wrapper'>
                <div className='shoe-card' key={pro.id} onClick={() => navigate("/products", { state: { id: pro.id } })}>
                  <div>
                    <img src={pro.productImage} alt="" />
                  </div>
                  <div className="shoe-details">
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

export default Shoes