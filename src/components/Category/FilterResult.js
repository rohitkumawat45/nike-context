import React, { useContext } from 'react'
import { PRODUCTS } from '../../utilities/products'
import { ProductContext } from '../../context/ProductContext';
import './filterResults.css'

function FilterResult(props) {

    const { filter } = useContext(ProductContext);

    return (
        <div className='result'>
            <div>
                {
                    PRODUCTS.filter((pro) => {
                        return pro.productName && (pro.productName.includes(filter) || (pro.price<filter));
        
                    }).map((pro) => {
                        return <div className='result-wrapper'>
                            <div className='result-card' key={pro.id} >
                                <div>
                                    <img src={pro.productImage} alt="" />
                                </div>
                                <div className="result-details">
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
    )
}

export default FilterResult