import React from 'react'
// import { useContext } from 'react'
import CategoryBar from '../CategoryBar/CategoryBar'
import './gear.css'
import { PRODUCTS } from '../../../utilities/products'
import FilterSection from '../FilterSection/FilterSection'
// import { ProductContext } from '../../../context/ProductContext'

function Gear() {
  // const { filter } = useContext(ProductContext);

  return (
    <div className='gears-card'>
      <CategoryBar />
      <div className="gears-wrapper">
        <FilterSection />

        <div className='gears'>
          {
            PRODUCTS.filter((item) => {
              return item.category.includes("gear");
            }).map((pro) => {
              return <div className='gear-wrapper'>
                <div className='gear-card' key={pro.id} >
                  <div>
                    <img src={pro.productImage} alt="" />
                  </div>
                  <div className="gear-details">
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

export default Gear