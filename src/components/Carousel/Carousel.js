import React, {useEffect, useState} from 'react'
import './carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function Carousel({ data }) {

  const [slide, setSlide] = useState(0);

  const nextSlide=()=>{
    setSlide(slide === data.length-1 ? 0 : slide+1);
  }

  const previousSlide=()=>{
    setSlide(slide === 0 ? data.length - 1 : slide-1) ;
  }

  useEffect(()=>{
    setTimeout(()=>nextSlide(),5000)
  });

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
      {
        data.map((item, index) => {
          return <img src={item} key={index} alt='banners' className={slide === index ? "slide" : "slide slide-hidden"}/>
        })
      }
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>
        {
          data.map((_, index)=>{
              return <button key={index} onClick={()=>setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
          })
        }
      </span>
    </div>
  )
}

export default Carousel