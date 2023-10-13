import React, { useContext } from 'react'
import { PRODUCTS } from '../../utilities/products'
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import './searchResults.css'

function SearchResult(props) {
    const navigate = useNavigate();
    const { search } = useContext(ProductContext);
    console.log(search);

    return (
        <div className='nav-search-result'>
            <div className='search-result'>
                {
                    PRODUCTS.filter((pro) => {
                        return pro.productName.toLowerCase().includes(search);
                    }).map((pro) => {
                        return <div className='search-result-wrapper'>
                            <div className='search-result-card' key={pro.id} onClick={() => navigate("/products", { state: { id: pro.id } })}>
                                <div className='search-image-result'>
                                    <img src={pro.productImage} alt="" />
                                </div>
                                <div className="search-result-details">
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

export default SearchResult