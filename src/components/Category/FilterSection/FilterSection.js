import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../context/ProductContext';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './filterSection.css'

function FilterSection() {

    const[toggleFilter, setToggleFilter]= useState(false);
    const { setFilter } = useContext(ProductContext);

    return (
        <div className="filter-options">
            <div className="filter-heading">
                <h3>Filters</h3>
            </div>
            <div className="filter-sections">
                <div className="fliterByBrand">
                    <div className='section-heading'>
                        <h3>Shop By Brand</h3>
                    </div>
                    <div className='options'>
                        <input type="radio" id="Air" name="Brand" value="Air" onClick={(e) => { setFilter(e.target.value); }} />
                        <label htmlFor="Air">Air</label>
                    </div>
                    <div className='options'>
                        <input type="radio" id="Jordan" name="Brand" value="Jordan" onClick={(e) => { setFilter(e.target.value); }} />
                        <label htmlFor="Jordan">Jordan</label>
                    </div>
                    <div className='options'>
                        <input type="radio" id="Air Force" name="Brand" value="Air Force" onClick={(e) => { setFilter(e.target.value); }} />
                        <label htmlFor="Air Force">Air Force</label>
                    </div>
                </div>
                <div className="filterByPrice">
                    <div className='section-heading'>
                        <h3>Shop By Price</h3>
                    </div>
                    <div className='options'>
                        <input type="radio" id="Below 2000" name="Price" value={2000} onClick={(e) => { setFilter(e.target.value); }} />
                        <label htmlFor="Below 2000">Below 2000</label>
                    </div>
                    <div className='options'>
                        <input type="radio" id="Below 5000" name="Price" value={5000} onClick={(e) => { setFilter(e.target.value); }} />
                        <label htmlFor="Below 5000">Below 5000</label>
                    </div>
                    <div className='options'>
                        <input type="radio" id="Below 10000" name="Price" value={10000} onClick={(e) => { setFilter(e.target.value); }} />
                        <label htmlFor="Below 10000">Below 10000</label>
                    </div>
                </div>
            </div>
            <div className="filter-mobile-menu">
                {
                    toggleFilter ? <RiCloseLine size={25} onClick={() => setToggleFilter(false)} />
                        : <RiMenu3Line size={25} onClick={() => setToggleFilter(true)} />
                }
                {
                    toggleFilter && (
                        <div className="filter-mobile-sections">
                            <div className="mobile-fliterByBrand">
                                <div className='mobile-section-heading'>
                                    <h3>Shop By Brand</h3>
                                </div>
                                <div className='mobile-options'>
                                    <input type="radio" id="Air" name="Brand" value="Air" onClick={(e) => { setFilter(e.target.value); }} />
                                    <label htmlFor="Air">Air</label>
                                </div>
                                <div className='mobile-options'>
                                    <input type="radio" id="Jordan" name="Brand" value="Jordan" onClick={(e) => { setFilter(e.target.value); }} />
                                    <label htmlFor="Jordan">Jordan</label>
                                </div>
                                <div className='mobile-options'>
                                    <input type="radio" id="Air Force" name="Brand" value="Air Force" onClick={(e) => { setFilter(e.target.value); }} />
                                    <label htmlFor="Air Force">Air Force</label>
                                </div>
                            </div>
                            <div className="mobile-filterByPrice">
                                <div className='mobile-section-heading'>
                                    <h3>Shop By Price</h3>
                                </div>
                                <div className='mobile-options'>
                                    <input type="radio" id="Below 2000" name="Price" value={2000} onClick={(e) => { setFilter(e.target.value); }} />
                                    <label htmlFor="Below 2000">Below 2000</label>
                                </div>
                                <div className='mobile-options'>
                                    <input type="radio" id="Below 5000" name="Price" value={5000} onClick={(e) => { setFilter(e.target.value); }} />
                                    <label htmlFor="Below 5000">Below 5000</label>
                                </div>
                                <div className='mobile-options'>
                                    <input type="radio" id="Below 10000" name="Price" value={10000} onClick={(e) => { setFilter(e.target.value); }} />
                                    <label htmlFor="Below 10000">Below 10000</label>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FilterSection