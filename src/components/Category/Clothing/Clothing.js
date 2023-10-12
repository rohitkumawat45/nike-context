// import { useContext } from 'react'
import React from 'react'
import CategoryBar from '../CategoryBar/CategoryBar'
import { PRODUCTS } from '../../../utilities/products'
import FilterSection from '../FilterSection/FilterSection'
// import { ProductContext } from '../../../context/ProductContext'
import './clothing.css'

function Clothing() {

  // const{ filter } =useContext(ProductContext);

  return (
    <div className='clothing-card'>
      <CategoryBar />
      <div className="clothing-wrapper">
        <FilterSection/>

        <div className='clothes'>
          {
            PRODUCTS.filter((item) => {
              return item.category.includes("clothing") ;
            }).map((pro) => {
              return <div className='cloth-wrapper'>
                <div className='cloth-card' key={pro.id} >
                  <div>
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