import React from 'react'
import './category.css'
import FilterResult from './FilterResult';
import CategoryBar from './CategoryBar/CategoryBar';
import FilterSection from './FilterSection/FilterSection';

function Category() {

    return (

        <div className='category-card'>
            <CategoryBar/>
            <div className="fliter">
                <FilterSection/>
                <div className="filter-results">
                    <FilterResult />
                </div>
            </div>

        </div>
    )
}

export default Category