import React from 'react';
import "./home.css";
import ProductSection from '../ProductSection/ProductSection';
import Carousel from '../Carousel/Carousel'
import { slides } from '../../utilities/imageSlides'
import { shoeSlides } from '../../utilities/imageSlides'
import { clothSlides } from '../../utilities/imageSlides'
import { gearSlides } from '../../utilities/imageSlides'
import { ad1, ad4, ad7, ad9, ad10, ad11, ad15, ad16, ad17 } from '../../utilities/adImages';

function Home() {
  return (
    <div className='home'>
      <div className="banners">
        <Carousel data={slides} className="main-banner" />
      </div>
      <div className="sections">
        <div className="cloth-section">
          <ProductSection title="All New, Perfect For You" category="shoes" data={shoeSlides} />
        </div>
        <div className="ad-section1 ads">
          <img className="ad-images" src={ad7} alt="ad7" />
          <img className="ad-images" src={ad4} alt="ad4" />
          <img className="ad-images" src={ad1} alt="ad1" />
        </div>
        <div className="shoe-section">
          <ProductSection title="Your Kind Of Wear" category="clothing" data={clothSlides} />
        </div>
        <div className="ad-section2 ads">
          <div className="ad-heading">
            <h3>What's Trending</h3>
          </div>
          <div className="ad-section2-img">
            <img className="ad-images" src={ad15} alt="3ad3" />
            <img className="ad-images" src={ad10} alt="2ad2" />
          </div>
        </div>
        <div className="gear-section">
          <ProductSection title="Best Of Gears" category="gear" data={gearSlides} />
        </div>
        <div className="ad-section3 ads">
          <img className="ad-images" src={ad16} alt="4ad" />
          <img className="ad-images" src={ad11} alt="3ad" />
          <img className="ad-images" src={ad9} alt="2ad1" />
          <img className="ad-images" src={ad17} alt="4ad2" />
        </div>
      </div>
    </div>
  )
}

export default Home