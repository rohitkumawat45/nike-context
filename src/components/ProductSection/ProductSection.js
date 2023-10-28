import './productSection.css';
import React from 'react'
import { PRODUCTS } from '../../utilities/products'
import Carousel from '../Carousel/Carousel';
import { useNavigate } from 'react-router-dom';

function ProductSection({ title, category, data }) {

    const navigate = useNavigate();

    return (
        <div className='prodSection'>

            <div className="section-title">
                <h2>{title}</h2>
            </div>
            <div className='prodSection-wrapper'>
                <div className='product-section'>
                    {
                        PRODUCTS.filter((prod) => {
                            return prod.category.includes(category)
                        }).map((prod) => {
                            return <div className='prodSection-card' key={prod.id} onClick={() => navigate("/products", { state: { id: prod.id } })} >
                                <div>
                                    <img src={prod.productImage} alt="" />
                                </div>
                                <div className="prodSection-details">
                                    <h3>
                                        {prod.productName}
                                    </h3>
                                    <h4>
                                        &#x20B9; {prod.price}
                                    </h4>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="carousel-wrapper">
                    <Carousel data={data} />
                </div>
            </div>
        </div>
    )
}

export default ProductSection